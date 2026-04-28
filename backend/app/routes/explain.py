"""
routes/explain.py — /generate-explanation endpoint.

Generates (or retrieves cached) AI explanations for questions.
AI integration is a future sprint item — stub returns placeholder content.
"""

import logging
import time
from fastapi import APIRouter

from app.schemas import GenerateExplanationRequest, ExplanationResult

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post(
    "/generate-explanation",
    response_model=ExplanationResult,
    summary="Generate an AI explanation for a question",
    tags=["Explanation"],
)
async def generate_explanation(payload: GenerateExplanationRequest) -> ExplanationResult:
    """
    Returns a detailed explanation for the given question.
    Optionally includes a visual diagram hint.

    **TODO (Sprint 2):** Call LLM (Gemini / GPT-4o) and cache result.
    """
    logger.info(
        "generate_explanation | question_id=%s topic=%s include_visual=%s",
        payload.question_id,
        payload.topic_id,
        payload.include_visual,
    )

    # ── Stub explanation ──────────────────────────────
    stub_content = (
        f"## Explanation for: {payload.question_text}\n\n"
        "This is a placeholder explanation. "
        "The AI explanation engine will populate this with a detailed, "
        "step-by-step breakdown of the concept, addressing common misconceptions "
        "and providing corrective guidance tailored to the student's answer.\n\n"
        "**Key concepts to review:**\n"
        "- Fundamental definitions\n"
        "- Common misconceptions\n"
        "- Visual representation\n"
        "- Practice problems"
    )

    return ExplanationResult(
        question_id=payload.question_id,
        content=stub_content,
        visual_hint="" if not payload.include_visual else "Visual diagram placeholder",
        generated_at=time.time(),
    )
