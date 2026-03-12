# MSPbots — AI Ticket Intake Prototype

A working prototype for the AI Ticket Intake feature built as part of the MSPbots PM candidate test project.

## What This Demonstrates

Three end-to-end intake flows showing how AI improves ticket quality at the point of entry into ConnectWise:

| Flow | Actor | AI Capability |
|---|---|---|
| 📞 Phone Intake | Technician | Real-time field suggestion, duplicate detection, validation |
| 🌐 Portal Intake | End User | Conversational guided flow, plain-language to CW field mapping |
| 🤖 RMM Alerts | System (Automate/Auvik) | Alert normalization, duplicate suppression, auto-escalation |

## Key Design Decisions

- **AI suggests, humans decide** — no action is taken without technician confirmation
- **Every suggestion is explainable** — AI shows reasoning behind each recommendation
- **Graceful degradation** — manual intake always available if AI is unavailable
- **ConnectWise-first** — field structure maps directly to CW ticket schema

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Tech Stack

- React 18
- Vite
- No external UI libraries — custom design system built inline

## Context

Built as part of the MSPbots AI Ticket Intake PM test project. The PRD, GTM plan, and revenue projection accompany this prototype as separate deliverables.
