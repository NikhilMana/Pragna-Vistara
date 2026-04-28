"""
config.py — Application settings loaded from environment variables / .env file.
Uses pydantic-settings for type-safe configuration.
"""

from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # ── App ────────────────────────────────────────────
    app_env:     str = "development"
    app_host:    str = "0.0.0.0"
    app_port:    int = 8000
    app_title:   str = "Edu-Sakhi API"
    app_version: str = "0.1.0"

    # ── CORS ───────────────────────────────────────────
    cors_origins: list[str] = ["http://localhost:5173", "http://localhost:4173"]

    # ── AI Provider (placeholder) ──────────────────────
    openai_api_key:    str | None = None
    google_ai_api_key: str | None = None

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    @property
    def is_development(self) -> bool:
        return self.app_env.lower() == "development"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Returns a cached Settings singleton."""
    return Settings()
