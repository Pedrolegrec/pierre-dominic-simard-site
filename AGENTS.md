# Pierre-Dominic Simard Site Instructions

These instructions apply to the whole
`/app/dev/public-presence/pierre-dominic-simard-site` repository.

## Role

This repo owns a static bilingual web presence and privacy-policy URLs used
for business identity, D-U-N-S, and Google Play onboarding.

## Working Rules

- `main` is the source-of-truth branch. Create branches from current `main`,
  open PRs back to `main`, and keep GitHub Pages configured to publish from
  `main` at `/`.
- There is no package manager or build step. Edit static HTML, CSS, JS, and
  image assets directly.
- Keep French and English pages aligned when changing identity, services,
  privacy, or contact information.
- Preserve GitHub Pages-friendly relative paths and existing `en/` localized
  structure.
- Verify public URLs and privacy-policy anchors before changing app-facing
  links.

## Boundaries

- Do not add private roadmap notes, credentials, analytics secrets, `.env`
  files, local hosting artifacts, or unpublished business identifiers unless
  the user explicitly provides them for public copy.
- Treat privacy-policy and business-identity copy as public legal/commercial
  content that needs explicit approval for substantive changes.

## Validation

Before reporting changes complete, run:

```bash
git -C /app/dev/public-presence/pierre-dominic-simard-site diff --check
git -C /app/dev/public-presence/pierre-dominic-simard-site status --short
```

For visual or language changes, preview the static site in a browser or local
static server when practical.
