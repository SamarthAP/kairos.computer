# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kairos.computer is a workflow automation platform that allows users to record their screen and create automated workflows from those recordings. The platform uses AI to understand user actions and generate repeatable automation workflows.

## Key Technologies

- **Next.js 15.2.1** with App Router
- **React 19.0.0** with TypeScript (strict mode)
- **Tailwind CSS v4** with PostCSS
- **Supabase** for backend data persistence
- **WebRTC/WebSockets** for real-time streaming
- **Web Audio API** for audio processing

## Development Commands

```bash
npm run dev       # Start development server with Turbopack
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture Overview

### Core Workflow

1. **Recording**: Users start a screen recording session with audio
2. **Streaming**: Real-time streaming to backend via WebSocket
3. **Processing**: AI analyzes the recording and generates workflow metadata
4. **Storage**: Workflow data stored in Supabase, video in cloud storage
5. **Execution**: Users can run workflows on app.kairos.computer

### Directory Structure

- `/app/` - Next.js App Router pages and components
  - `/api/` - API routes for workflow management
  - `/components/` - React components (WorkflowRecorder, modals)
  - `/contexts/` - React contexts (LiveApiContext)
  - `/hooks/` - Custom hooks for streaming functionality
  - `/lib/` - Utilities and core logic
    - `/livestream/` - WebRTC/audio streaming implementation
    - `/db.ts` - Supabase client configuration

### Key Components

**WorkflowRecorder** (`/app/components/WorkflowRecorder.tsx`): 
- Manages screen capture and audio recording
- Handles WebRTC connections and streaming
- Uses Web Audio API for audio processing

**LiveAPIProvider** (`/app/contexts/LiveApiContext.tsx`):
- Provides WebSocket connection context
- Manages real-time communication state

**Multimodal Live Client** (`/app/lib/livestream/multimodal-live-client.ts`):
- Core WebSocket client for real-time streaming
- Handles audio/video data transmission

### Database Schema (Supabase)

**homepage_workflow** table:
- `id`: Unique identifier
- `name`: Workflow name
- `description`: Workflow description
- `outline`: Generated workflow steps
- `metadata`: JSON containing inputs, secure_inputs, integrations

### Environment Variables

Required in `.env.local`:
```
SUPABASE_URL=<your-supabase-url>
SUPABASE_KEY=<your-supabase-service-role-key>
```

### API Routes

- `POST /api/create-workflow` - Creates new workflow entry
- `GET /api/get-workflow?id=<id>` - Retrieves workflow data
- `GET /api/presigned-url?id=<id>` - Gets presigned URL for video upload
- `POST /api/early-access` - Handles early access signups
- `GET /api/og` - Generates Open Graph images

### Important Implementation Details

1. **Audio Processing**: Uses AudioWorklet for efficient audio streaming
2. **Cross-Domain Cookies**: Sets cookies with `.kairos.computer` domain for app integration
3. **Polling Mechanism**: Frontend polls `/api/get-workflow` until workflow processing completes
4. **TypeScript Paths**: Uses `@/` alias for root directory imports

### Testing Approach

Currently no test framework is configured. When implementing tests:
1. Check for test framework in package.json
2. Look for test scripts or configuration files
3. Follow existing patterns if tests exist

### Deployment

- Production: `kairos.computer`
- App subdomain: `app.kairos.computer`
- Development app: `app-dev.kairos.computer`