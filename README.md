# Edu-Sakhi

AI-powered educational platform for **11th & 12th grade** students — misconception detection, visual learning, and offline-first study sessions.

## Tech Stack

| Layer    | Technology                           |
|----------|--------------------------------------|
| Frontend | React 18 + Vite + Tailwind CSS + PWA |
| Backend  | FastAPI (Python 3.11+)               |
| Storage  | IndexedDB (offline) via `idb`        |

## Project Structure

```
Edu-Sakhi/
├── frontend/                  # React + Vite PWA
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Layout, Navbar
│   │   │   └── ui/            # Icons, ProgressBar, Spinner, ErrorMessage, OfflineBanner
│   │   ├── hooks/             # useOnlineStatus
│   │   ├── pages/             # HomePage, TopicPage, QuestionPage, ResultPage, NotFoundPage
│   │   ├── services/          # api.js (Axios client)
│   │   └── utils/             # indexedDB.js
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                   # FastAPI server
│   ├── app/
│   │   ├── routes/
│   │   │   ├── analyze.py     # POST /analyze-response
│   │   │   ├── explain.py     # POST /generate-explanation
│   │   │   └── validate.py    # POST /validate-content
│   │   ├── config.py          # Pydantic settings
│   │   └── schemas.py         # Request/response models
│   ├── main.py                # App factory + entry point
│   └── requirements.txt
│
└── README.md
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
cp .env.example .env
python main.py           # http://localhost:8000
```

### API Docs (dev only)

- Swagger UI: http://localhost:8000/docs
- ReDoc:      http://localhost:8000/redoc

## API Routes

| Method | Path                    | Description                                |
|--------|-------------------------|--------------------------------------------|
| POST   | `/api/v1/analyze-response`   | Analyse student answer for misconceptions  |
| POST   | `/api/v1/generate-explanation` | Generate AI explanation for a question  |
| POST   | `/api/v1/validate-content`   | Validate question/explanation objects      |
| GET    | `/health`               | Liveness probe                             |

## Roadmap

- [ ] Sprint 2 — AI integration (Gemini / GPT-4o)
- [ ] Sprint 3 — Visual diagram generation
- [ ] Sprint 4 — Backend sync & student analytics dashboard
- [ ] Sprint 5 — Authentication & teacher dashboard