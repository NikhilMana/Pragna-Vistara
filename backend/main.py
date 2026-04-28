"""
main.py — FastAPI application factory for Edu-Sakhi backend.

Startup order:
  1. Load settings from environment
  2. Configure logging
  3. Build FastAPI app with CORS middleware
  4. Mount all API routes under /api/v1
  5. Expose health check at /health
"""

import logging
import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routes import api_router
from app.schemas import HealthResponse

# ─── Logging ─────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# ─── App factory ─────────────────────────────────────────────────────────────

def create_app() -> FastAPI:
    settings = get_settings()

    app = FastAPI(
        title=settings.app_title,
        version=settings.app_version,
        description=(
            "Edu-Sakhi API — AI-powered misconception detection and "
            "visual explanation generation for secondary school students."
        ),
        docs_url="/docs" if settings.is_development else None,
        redoc_url="/redoc" if settings.is_development else None,
    )

    # ── CORS ──────────────────────────────────────────
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ── Routes ────────────────────────────────────────
    app.include_router(api_router, prefix="/api/v1")

    # ── Lifecycle events ─────────────────────────────
    @app.on_event("startup")
    async def on_startup():
        logger.info(
            "Edu-Sakhi API starting | env=%s | version=%s",
            settings.app_env,
            settings.app_version,
        )

    @app.on_event("shutdown")
    async def on_shutdown():
        logger.info("Edu-Sakhi API shutting down.")

    # ── Health check ─────────────────────────────────
    @app.get("/health", response_model=HealthResponse, tags=["Health"])
    async def health():
        """Returns API liveness status."""
        return HealthResponse(
            status="ok",
            version=settings.app_version,
            env=settings.app_env,
        )

    return app


# ─── Entry point ─────────────────────────────────────────────────────────────

app = create_app()

if __name__ == "__main__":
    import uvicorn

    settings = get_settings()
    uvicorn.run(
        "main:app",
        host=settings.app_host,
        port=settings.app_port,
        reload=settings.is_development,
        log_level="info",
    )
