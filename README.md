# rizom.work

Standalone deployment repo for the Rizom work site and ranger brain.

## Quick start

```bash
bun install
bunx brain start
```

## What's here

- `brain.yaml` — instance configuration
- `package.json` — pinned runtime deps for standalone install
- `tsconfig.json` — JSX runtime hint for Preact
- `.env.example` / `.env.schema` — secrets and deploy env contract
- `brain-data/` — local content checkout / sync target (gitignored)
- `src/site.ts` — local site override
- `src/site-content.ts` — local landing-page section definitions
- `src/theme.css` — local theme layer

## Content repo

This instance syncs content from:

- `rizom-ai/rizom-work-content`
