# AI-Assisted Development Instructions

## Project Purpose

This repository is the FlyRank AI internship capstone project. It is currently in the Setup phase. Future work should add only the application functionality defined by the project requirements and should keep the implementation understandable for an internship project.

## Current Technology Stack

- Node.js project foundation
- No application framework selected yet
- No runtime dependencies selected yet
- No build, test, or lint tooling configured yet

Update this section when the technology stack is established.

## Development Principles

- Inspect the existing files, documentation, and relevant call sites before making changes.
- Keep changes small, focused, simple, and maintainable.
- Preserve existing behavior unless the requested change requires otherwise.
- Prefer clear code and established project patterns over clever abstractions.
- Do not add application code, configuration, or dependencies without a current project need.
- Avoid unnecessary dependencies. Before adding one, confirm that the standard library or an existing dependency cannot reasonably solve the problem, and document the reason for the addition.
- Add or update focused tests when implementing behavior that can be tested.
- Keep documentation accurate as the project evolves.

## Coding Conventions

- Use the formatting and naming conventions established by the project once implementation begins.
- Prefer descriptive names over abbreviations and one-letter variables.
- Keep functions and modules focused on a single responsibility.
- Handle errors explicitly and avoid silently ignoring failures.
- Keep public interfaces stable unless a change is intentional and documented.
- Use comments only when they clarify non-obvious reasoning; do not narrate straightforward code.

## File and Folder Conventions

- Keep application source code in a dedicated source directory once one is established, typically `src/`.
- Keep tests in a clearly identified test location, following the convention selected by the project tooling.
- Keep configuration files at the repository root unless a tool requires another location.
- Keep reusable modules organized by responsibility rather than by incidental implementation detail.
- Do not commit generated output, local environment files, secrets, or dependency directories.
- Update the README when setup or development commands become available.

## Git and Commit Conventions

- Do not create commits automatically; the project owner handles commits.
- Use short, imperative Conventional Commit messages, such as `docs: add setup instructions` or `feat: add ranking service`.
- Use an appropriate type such as `feat`, `fix`, `docs`, `refactor`, `test`, `build`, or `chore`.
- Keep each commit focused on one logical change.
- Inspect the diff before committing and do not include unrelated changes.

## AI-Assisted Workflow

1. Inspect the relevant existing code and documentation.
2. State the intended change and any assumptions.
3. Make the smallest practical implementation.
4. Run the narrowest relevant validation, then broader checks when appropriate.
5. Summarize changed files, validation performed, and any remaining limitations.
