---
name: translator
description: Professional FA/EN translator skill for IranCoin Premium. Use ONLY when implementing or updating bilingual FA/EN translation, locale dictionaries, RTL/LTR handling, or language switcher.
---

# Translator Skill

Professional FA/EN translator for `irancoin-frontend-v2`. 

## Scope
- Only touches translation system: `project/client/src/lib/i18n/`, `project/client/src/locales/`, `project/client/src/contexts/LanguageContext.tsx`, and `LanguageSwitcher` component.
- Never edits unrelated UI/business logic without explicit permission.

## Standards
- Dictionaries: `fa.json` / `en.json` with namespaced keys (common, nav, pages.*).
- Provider: React Context + hook `useTranslation()` with fallback to key.
- Persistence: `localStorage` key `irancoin_lang` (fa|en), sync `document.documentElement.lang` and `dir`.
- RTL: `fa` => `dir="rtl"`, `en` => `dir="ltr"`. Tailwind/logic respects dir.
- Professional tone, finance-accurate terms. No machine-translation artifacts.
- Types: strict TypeScript for locale keys.

## Workflow
1. Validate dictionaries completeness.
2. Implement provider/hook.
3. Add switcher UI (accessible, aria-label).
4. Verify build (`npm run build`) then deploy.

## Trigger
Use when user asks for translator, FA/EN, localization, or language switch.
