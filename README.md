# Mazdoor Chowk — मज़दूर चौक

An ambient web experience portraying an Indian construction-site morning (Labour Chowk) with curated retro Hindi background music and real-time online visitor presence.

## Features

- **Ambient Audio Player**: Integrated YouTube audio player with curated retro Hindi tracks, custom playback controls, track shuffle, and time formatting.
- **Real-Time Visitor Presence**: Powered by Pusher presence channels to show live visitor count.
- **Responsive Artwork**: Dynamic background illustration switching based on viewport aspect ratio.
- **Production Optimized**: Minimal bundle size, Next.js 15 App Router, Tailwind CSS v4, and strict ESLint / TypeScript setup.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (or yarn / pnpm)

### Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Configure your Pusher credentials in `.env`:
   ```env
   PUSHER_APP_ID="your_app_id"
   PUSHER_KEY="your_key"
   PUSHER_SECRET="your_secret"
   PUSHER_CLUSTER="ap2"

   NEXT_PUBLIC_PUSHER_KEY="your_key"
   NEXT_PUBLIC_PUSHER_CLUSTER="ap2"
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons
- **Real-Time**: Pusher JS & Pusher Server SDK
- **Language**: TypeScript
