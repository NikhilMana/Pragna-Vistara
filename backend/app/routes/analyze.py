"""
routes/analyze.py — /analyze-response endpoint.

Accepts a student's answer and returns misconception detection results.
AI logic will be injected here in a future sprint.
"""

import logging
from fastapi import APIRouter, HTTPException, status

from app.schemas import AnalyzeResponseRequest, AnalyzeResponseResult, MisconceptionDetail

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post(
    "/analyze-response",
    response_model=AnalyzeResponseResult,
    summary="Analyze a student response for misconceptions",
    tags=["Analysis"],
)
async def analyze_response(payload: AnalyzeResponseRequest) -> AnalyzeResponseResult:
    """
    Receives the question context and the student's selected answer.
    Returns whether the answer is correct and any detected misconceptions.

    **TODO (Sprint 2):** Replace stub with actual AI model call.
    """
    logger.info(
        "analyze_response | question_id=%s topic=%s correct=%s",
        payload.question_id,
        payload.topic_id,
        payload.selected_index == payload.correct_index,
    )

    is_correct = payload.selected_index == payload.correct_index

    # ── Stub response ─────────────────────────────────
    misconceptions: list[MisconceptionDetail] = []
    corrective_guidance = ""

    if not is_correct:
        misconceptions = [
            MisconceptionDetail(
                type="conceptual",
                description="The student appears to have a conceptual gap in this area.",
                confidence=0.70,
            )
        ]
        corrective_guidance = (
            "Review the fundamental concepts for this topic. "
            "An AI-generated explanation will be available shortly."
        )

    return AnalyzeResponseResult(
        question_id=payload.question_id,
        is_correct=is_correct,
        misconceptions=misconceptions,
        corrective_guidance=corrective_guidance,
        explanation_available=False,   # will be True once explanation is generated
    )
