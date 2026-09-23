# AI-Assisted Workflow Drill

## Round 1 and Round 2 Comparison

Round 1 implemented a complete settings screen in `index.html` and `script.js`. It included full name, email, and role fields; weekly summary, product updates, and compact navigation controls; a Reset button; and browser-local persistence through `localStorage`. Its submit handler used `form.reportValidity()` before saving the form data.

Round 2 changed the form to a smaller name-and-email form. It added custom validation in `validateSettings()` and `submitSettings()`, but those functions only return validation results; they do not persist submitted values. Round 2 also removed the role field, all preference controls, the Reset button, and the Round 1 persistence logic. The sidebar navigation was removed as well.

## Correctness and the AI Mistake

The concrete AI mistake caught in Round 1 was in `index.html`: `Overview` links to `#overview` and `Projects` links to `#projects`, but those targets do not exist in `index.html`. Clicking those links therefore cannot navigate to the intended sections. Round 2 removes those links, so the broken-target issue is no longer present, but it does so by removing the sidebar navigation rather than by adding the missing destinations. That avoids the bad links while also removing navigation between Overview, Projects, and Settings.

The more important Round 2 correctness regression is the loss of behavior that Round 1 already provided: persistence, reset, role and preferences controls, and sidebar navigation. A valid Round 2 submission reports success but is not saved for a later reload.

## Accessibility and Edge Cases

Round 2 improves validation accessibility. Its inputs use `aria-describedby`; invalid fields receive `aria-invalid`; messages use `role="alert"`; and the first invalid field receives focus. The form uses `novalidate`, so this custom feedback path is responsible for validation behavior. Round 2 tests cover the validation functions, including blank and malformed values, but do not cover persistence, reset, navigation, or browser DOM behavior. Consequently, browser-specific regressions and missing controls require manual verification.

## Lesson

This comparison taught me that AI output must be checked against a precise specification, not judged only by whether a replacement screen looks cleaner or whether a few unit tests pass. I need to state which existing behaviors must be preserved, inspect the actual diff, test navigation and form workflows in the browser, and verify edge cases such as invalid input and reload persistence. AI can accelerate implementation and review, but I remain responsible for defining the contract and confirming that the delivered behavior still satisfies it.
