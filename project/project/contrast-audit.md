# WCAG Contrast Audit

Calculated with the WCAG relative-luminance formula. Target guidance used here: 4.5:1 for normal text, 3:1 for large text and non-text UI boundaries where applicable.

## Dark mode

| Pair | Foreground | Background | Ratio | Indicative result |
|---|---:|---:|---:|---|
| body text (normal text) | `#eef0eb` | `#0b0f12` | 16.77:1 | Pass 4.5:1 |
| muted copy (normal text) | `#aeb6b1` | `#0b0f12` | 9.28:1 | Pass 4.5:1 |
| dim metadata (small text) | `#74807b` | `#0b0f12` | 4.69:1 | Pass 4.5:1 |
| copper accent (large/accent text) | `#e09a72` | `#0b0f12` | 8.28:1 | Pass 4.5:1 |
| healthy status (status text) | `#a6bca5` | `#0b0f12` | 9.49:1 | Pass 4.5:1 |
| info status (status text) | `#91aeba` | `#0b0f12` | 8.22:1 | Pass 4.5:1 |
| danger status (status text) | `#db866f` | `#0b0f12` | 7.01:1 | Pass 4.5:1 |
| paper on surface (card heading) | `#eef0eb` | `#11171b` | 15.74:1 | Pass 4.5:1 |
| copper on surface (accent text) | `#e09a72` | `#11171b` | 7.77:1 | Pass 4.5:1 |

## Light mode

| Pair | Foreground | Background | Ratio | Indicative result |
|---|---:|---:|---:|---|
| body text (normal text) | `#1d2528` | `#f4f1eb` | 13.82:1 | Pass 4.5:1 |
| muted copy (normal text) | `#5f6865` | `#f4f1eb` | 5.10:1 | Pass 4.5:1 |
| dim metadata (small text) | `#5e6b65` | `#f4f1eb` | 4.95:1 | Pass 4.5:1 |
| copper accent (large/accent text) | `#96502f` | `#f4f1eb` | 5.34:1 | Pass 4.5:1 |
| healthy status (status text) | `#4e7358` | `#f4f1eb` | 4.76:1 | Pass 4.5:1 |
| info status (status text) | `#426879` | `#f4f1eb` | 5.34:1 | Pass 4.5:1 |
| danger status (status text) | `#a14f42` | `#f4f1eb` | 5.02:1 | Pass 4.5:1 |
| paper on surface (card heading) | `#1d2528` | `#ebe7df` | 12.64:1 | Pass 4.5:1 |
| copper on surface (accent text) | `#96502f` | `#ebe7df` | 4.89:1 | Pass 4.5:1 |

## Notes

- Alpha-blended borders, shadows, chart fills, and image overlays require rendered-state inspection in addition to these solid-token calculations.
- Focus indicators should remain visibly distinct from both the canvas and adjacent control surface; the implementation uses the copper-bright token and a 2px outline.
- Disabled controls intentionally use reduced opacity and are not treated as readable primary content; their state must remain distinguishable by structure and label.
- The audit is an engineering check, not a formal certification. A complete accessibility review should include keyboard, screen-reader, zoom, motion, and automated testing.
