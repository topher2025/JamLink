# JamLink
**_Connect. Create. Play Together_**

JamLink is a free platform for musicians to connect, jam, and perform together - online or in person. Create a free account, list your instruments and styles, and find your next bandmate or jam session.

---

## Updates
> [!IMPORTANT]
> Created the basic frontend server. **7/15/2025**

- Created the basic backend server. **7/15/2025**
- Finished the Roadmap, looking forward to starting the coding aspect. **7/9/2025**

---

## Features
- Musician profiles with instruments, styles, and bios
- Search and match with compatible musicians
- Real-time chat and collaboration

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios (for API calls)

### Backend
- FastAPI (Python)
- PostgreSQL (via SQLAlchemy)
- JWT + bcrypt (authentication)
- Websockets via FastAPI for real-time chat (planned)

### DevOps
- Docker & Docker Compose
- Nginx (reverse proxy & HTTPS)
- GitHub Actions (CI/CD)

---

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Python 3.11+
- Node.js (for frontend dev)

### Clone the repo

```bash
git clone https://github.com/yourusername/jamlink.git
cd jamlink
```

---

## Project Structure
This is the basic goal. 
```
jamlink/
├── backend/       # FastAPI app
├── frontend/      # React + Tailwind app
├── devops/        # Docker, Nginx, deploy scripts
├── .env           # Environment variables (not committed)
└── README.md
```

---

## Roadmap
> [!NOTE]
> This is still in the beginning stages of development. This roadmap was last updated: **7/9/25**

### Phase 1: Basics: August, 2025
- [ ] Create basic front and back ends
- [ ] User registration & login
- [ ] Secure password hashing with bcrypt

### Phase 2: Begin adding features: October, 2025
- [ ] User profiles with instruments and styles
- [ ] Search/match musicians by filters
- [ ] Real-time chat between matched users

### Phase 3: Deployment and updates: January, 2026
- [ ] Deploy via Docker & Nginx
- [ ] Music collaboration tools (e.g. metronome, shared tracks)
- [ ] Live jam sessions (WebRTC or AudioKit)
- [ ] Event planning (sessions, rehearsals, gigs)

### Phase 4: Mobile: July, 2026
- [ ] Mobile-friendly Web UI
- [ ] Apple app
- [ ] Android app

### Phase 5: Further updates and development: To infinity and beyond 🚀!
- [ ] Spotify/YouTube/Apple Music integration?


