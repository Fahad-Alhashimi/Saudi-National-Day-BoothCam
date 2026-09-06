# SCC AI Photo Booth

Full-screen, touch-first MVP for the Saudi Cultural Club at Ajman University.

## Start locally

1. Copy `.env.example` to `.env.local` and add event-specific values.
2. Run `pnpm install`, then `pnpm dev`.
3. Open `http://localhost:3000` and use browser full-screen/kiosk mode.

## Included MVP

- Branded bilingual start, configurable style selection, camera capture and test-photo import.
- Server-only generation route with a provider interface. Without credentials it safely returns the captured photo as a mock result.
- Frame is separate from the photo in the UI; download/print use the final view in this MVP.
- Auto-reset, visitor consent, private-session design intent, admin screen, and browser-print flow.

## Before the event

- Implement the current OpenAI Image API image-edit request in `lib/ai/openai.ts` after selecting a supported model. Never expose the key to the client.
- Add Supabase storage using random session IDs and signed/unguessable retrieval URLs; implement the QR endpoint against that URL.
- Add scheduled deletion for generated images after `IMAGE_RETENTION_HOURS`; delete originals immediately after successful generation unless a retry is required.
- Verify the DJI camera appears in Windows as a UVC device, choose it from the selector, and run a camera test in Chrome/Edge.
- Select the real printer and add a Windows PrintAdapter if silent printing is needed. The MVP uses the browser print dialog.
- The required Thmanyah fonts were not supplied. The UI currently uses a system sans / Noto Sans Arabic fallback; replace it with licensed approved webfont files when provided.

## Brand rules applied

Primary green `#063D2B`, supporting green `#0D563E`, gold `#B79750`, sand `#F4EFE4`, charcoal `#18231F`, and gray `#68736E`. The frame uses a restrained portrait composition, gold line, dark green ground, supplied untouched logo, and generous clear space. Avoid stacking every brand motif; use only one strong visual idea.

## Privacy

No name, email, or phone number is requested. Do not enable a public gallery or training reuse. The retrieval page must only expose the holder's unguessable session asset.
