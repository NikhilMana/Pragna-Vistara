"""
schemas.py — Pydantic request / response models for all API routes.
No business logic lives here — only data contracts.
"""

from __future__ import annotations

from enum import Enum
from typing import Any

from pydantic import BaseModel, Field


# ─── Shared ───────────────────────────────────────────────────────────────────

class ContentType(str, Enum):
    question    = "question"
    explanation = "explanation"


# ─── /analyze-response ────────────────────────────────────────────────────────

class AnalyzeResponseRequest(BaseModel):
    """Payload sent when a student submits an answer."""

    question_id:    str = Field(..., description="Unique question identifier")
    question_text:  str = Field(..., description="Full text of the question")
    topic_id:       str = Field(..., description="Topic the question belongs to")
    selected_index: int = Field(..., ge=0, description="Index of the option the student chose")
    correct_index:  int = Field(..., ge=0, description="Index of the correct option")
    options:        list[str] = Field(default_factory=list, description="All answer options")


class MisconceptionDetail(BaseModel):
    """Describes a detected misconception."""

    type:        str        = Field(..., description="Short label for the misconception category")
    description: str        = Field(..., description="Human-readable explanation of the misconception")
    confidence:  float      = Field(..., ge=0.0, le=1.0, description="Model confidence [0-1]")


class AnalyzeResponseResult(BaseModel):
    """Response from the analysis endpoint."""

    question_id:           str
    is_correct:            bool
    misconceptions:        list[MisconceptionDetail] = []
    corrective_guidance:   str                        = ""
    explanation_available: bool                       = False


# ─── /generate-explanation ───────────────────────────────────────────────────

class GenerateExplanationRequest(BaseModel):
    """Payload to request an AI explanation for a question."""

    question_id:    str            = Field(...)
    question_text:  str            = Field(...)
    topic_id:       str            = Field(...)
    student_answer: str | None     = Field(None, description="The student's chosen answer text (optional)")
    include_visual: bool           = Field(False, description="Whether to include a visual diagram hint")


class ExplanationResult(BaseModel):
    """Structured AI explanation returned to the frontend."""

    question_id:  str
    content:      str  = Field(..., description="Markdown-formatted explanation")
    visual_hint:  str  = Field("",  description="Optional diagram description or data URI")
    generated_at: float = Field(..., description="Unix timestamp of generation")


# ─── /validate-content ───────────────────────────────────────────────────────

class ValidateContentRequest(BaseModel):
    """Payload for content validation before storage."""

    content_type: ContentType = Field(...)
    content:      Any         = Field(..., description="The content object to validate")


class ValidationIssue(BaseModel):
    field:   str
    message: str


class ValidateContentResult(BaseModel):
    """Validation outcome."""

    is_valid: bool
    issues:   list[ValidationIssue] = []
    message:  str                   = ""


# ─── Health ──────────────────────────────────────────────────────────────────

class HealthResponse(BaseModel):
    status:  str = "ok"
    version: str
    env:     str
