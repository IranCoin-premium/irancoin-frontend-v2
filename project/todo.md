# IranCoin Premium — Profile Feature Tasks

- [ ] Add a dedicated `/profile` route inside the Workspace Dashboard experience.
- [ ] Build editable account information fields with save feedback in the frontend.
- [ ] Add notification, security, appearance, and language preference controls.
- [ ] Add a profile entry point from the dashboard sidebar and mobile shell.
- [ ] Preserve the demo-only boundary and clearly label backend-dependent actions.
- [ ] Verify responsive rendering and run TypeScript plus production build checks.

## Profile save feedback

- [x] Add an explicit saving state to profile save actions.
- [x] Prevent duplicate submissions while a save is in progress.
- [x] Show success Toast after a simulated successful save.
- [x] Show error Toast for invalid profile input or simulated failure.
- [x] Validate the feedback states with TypeScript, build, and browser screenshots.

## Final archive delivery

- [x] Extract the main requirements and implementation tracks from all 20 prompt parts.
- [x] Generate a comprehensive `todo.list` covering product, UX, frontend, platform, security, compliance, content, QA, and operations.
- [x] Include every project file created through the current checkpoint.
- [x] Include the original `all_prompts.md` source document in the final package.
- [x] Build and integrity-check the final ZIP archive.

## Master-prompt expansion scope

- [x] Audit the 20-part master prompt against the current frontend and map missing product surfaces.
- [x] Expand the workspace navigation for positions, alerts, automations, settings, and admin-ready states.
- [x] Add a market intelligence surface with watchlist, instrument details, scenario context, and provenance labels.
- [x] Add an operations surface for connection permissions, capability gating, and explicit unavailable states.
- [x] Add a public methodology/risk surface that explains signal limits, venue differences, and platform boundaries.
- [x] Add responsive, accessible loading, empty, error, and demo-state patterns across the new surfaces.
- [x] Validate the expanded frontend with TypeScript, production build, desktop/mobile screenshots, and checkpoint delivery.

## Navigation stabilization follow-up

- [x] Repair the malformed JSX handler introduced while exposing Market and Operations links in Dashboard navigation.
- [x] Re-run type checking after the navigation repair.
- [x] Verify Market and Operations routes plus their mobile layouts before the next checkpoint.

## Global theme switcher

- [x] Audit the existing ThemeProvider and workspace color tokens.
- [x] Add a persistent dashboard-wide Dark Mode / Light Mode toggle.
- [x] Calibrate light-theme surfaces, borders, typography, charts, and status colors.
- [x] Add accessible labels and a no-flash initial theme preference.
- [x] Verify theme switching on representative workspace routes and mobile layout.
- [x] Run TypeScript, production build, and final visual validation.

## WCAG contrast audit

- [x] Audit primary text, status colors, borders, buttons, focus rings, and chart labels in dark and light themes.
- [x] Calculate representative foreground/background contrast ratios and record the findings.
- [x] Adjust low-contrast tokens while preserving the copper editorial identity.
- [x] Recheck hover, focus, disabled, and semantic status states in both themes.
- [x] Validate with TypeScript, production build, and representative desktop/mobile screenshots.

## Final ZIP and GitHub delivery

- [x] Rebuild and integrity-check the final project ZIP from the latest checkpoint.
- [ ] Verify available GitHub authentication and account identity. Blocked until GitHub integration is enabled.
- [ ] Create the `test_manus` repository in the user's GitHub account. Blocked until GitHub integration is enabled.
- [ ] Push the complete frontend source and documentation to the repository. Blocked until GitHub integration is enabled.
- [ ] Attempt GitHub Pages deployment with a compatible static build workflow. Blocked until GitHub integration is enabled.
- [x] Return the ZIP, repository URL, and deployment URL or exact blocker.
