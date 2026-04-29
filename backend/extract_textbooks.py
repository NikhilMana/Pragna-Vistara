"""CLI for generating the extracted textbook layer.

Usage:
  python extract_textbooks.py
  python extract_textbooks.py --dataset-root ../dataset --output-root ./generated/textbooks
"""

from __future__ import annotations

import argparse
import os
from pathlib import Path

from app.services.textbook_extraction import extract_dataset

BACKEND_ROOT = Path(__file__).resolve().parent
DEFAULT_DATASET_ROOT = BACKEND_ROOT.parent / "dataset"
DEFAULT_OUTPUT_ROOT = BACKEND_ROOT / "generated" / "textbooks"


def _default_path(env_name: str, fallback: Path) -> Path:
    value = os.getenv(env_name)
    if not value:
        return fallback
    path = Path(value)
    return path if path.is_absolute() else (BACKEND_ROOT / path).resolve()


def _load_defaults() -> tuple[Path, Path]:
    try:
        from app.config import get_settings

        settings = get_settings()
        dataset_root = Path(settings.textbook_dataset_root)
        output_root = Path(settings.textbook_extracted_root)
        if not dataset_root.is_absolute():
            dataset_root = (BACKEND_ROOT / dataset_root).resolve()
        if not output_root.is_absolute():
            output_root = (BACKEND_ROOT / output_root).resolve()
        return dataset_root, output_root
    except Exception:
        return (
            _default_path("TEXTBOOK_DATASET_ROOT", DEFAULT_DATASET_ROOT),
            _default_path("TEXTBOOK_EXTRACTED_ROOT", DEFAULT_OUTPUT_ROOT),
        )


def parse_args() -> argparse.Namespace:
    dataset_root_default, output_root_default = _load_defaults()
    parser = argparse.ArgumentParser(description="Extract metadata and TOC from textbook PDFs.")
    parser.add_argument(
        "--dataset-root",
        type=Path,
        default=dataset_root_default,
        help="Path to the class-wise textbook PDF folders.",
    )
    parser.add_argument(
        "--output-root",
        type=Path,
        default=output_root_default,
        help="Path where one JSON per PDF will be written.",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Do not overwrite extracted JSON files that already exist.",
    )
    parser.add_argument(
        "--include-hash",
        action="store_true",
        help="Compute SHA256 for each source PDF. Slower, but useful for deduping/versioning.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Only process the first N PDFs. Helpful for a smoke test.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    def report_progress(event: dict[str, object]) -> None:
        if event.get("event") != "processing":
            return
        print(
            f"[{event['index']}/{event['total']}] "
            f"{event['relative_pdf_path']} -> {event['output_json_path']}"
        )

    manifest = extract_dataset(
        dataset_root=args.dataset_root,
        output_root=args.output_root,
        overwrite=not args.skip_existing,
        include_hash=args.include_hash,
        progress_callback=report_progress,
        limit=args.limit,
    )
    print(
        "Extraction complete | "
        f"pdfs={manifest['pdf_count']} | "
        f"documents={manifest['document_count']} | "
        f"failures={manifest['failure_count']}"
    )


if __name__ == "__main__":
    main()
