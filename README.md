# NotifyHub

Multi-channel notification system with email, SMS and push support.

## Features

- Email, SMS and push channels
- Template rendering flow
- Queue-based notification processing
- Retry configuration
- History tracking
- Status dashboard
- Basic API-style route structure

## Current demo flow

1. A notification payload is created
2. Channel is resolved
3. Queue item is generated
4. Processor runs
5. History and status data can be viewed

## Project structure

- `src/channels` provider implementations
- `src/queue` queue and processors
- `src/services` business logic
- `src/routes` route-like response builders
- `src/utils` helpers and normalizers
- `src/ui` dashboard output
- `tests` demo route tests
- `docs` architecture and API notes
