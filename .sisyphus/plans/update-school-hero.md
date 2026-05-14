# Update School Page Hero Section

## TL;DR
> Replace the Unsplash hero image on the School page with `hero-img3.png` and center the hero section text.
>
> **Deliverables**:
> - 1 file modified: `src/pages/School.tsx`
>
> **Estimated Effort**: Quick (~2 min)
> **Parallel Execution**: Single task

## Context
The user wants consistency across site pages. Prayer Request, Partnership, Contact, and New Convert pages already use `hero-img3.png` for their hero backgrounds. The School page still uses an Unsplash URL and the hero text is left-aligned with large left padding (`lg:px-24`).

## Work Objectives
- Replace the Unsplash hero image with `hero-img3.png`
- Center the hero heading, description, and button

## Verification Strategy
- `npm run lint` (tsc --noEmit) passes
- `npm run build` completes successfully
- Visual: hero section shows `hero-img3.png` and all text is horizontally centered

---

## TODOs

- [ ] 1. Update School page hero with hero-img3.png and center text

  **What to do**:

  1. **Add import** for `heroImg3` after the `schoolImg` import on line 5:
     ```ts
     import heroImg3 from '../assets/hero-img3.png';
     ```

  2. **Replace the hero image** (lines 67-72). Change:
     ```tsx
     <img
       src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
       alt="School Background"
       className="w-full h-full object-cover opacity-60 mix-blend-overlay"
       referrerPolicy="no-referrer"
     />
     ```
     To:
     ```tsx
     <img
       src={heroImg3}
       alt="School Background"
       className="w-full h-full object-cover opacity-60 mix-blend-overlay"
     />
     ```

  3. **Center the text container** (line 77). Change:
     ```tsx
     <div className="max-w-8xl mt-10 px-4 sm:px-6 lg:px-24">
     ```
     To:
     ```tsx
     <div className="max-w-4xl mx-auto text-center mt-10">
     ```

  **Must NOT do**:
  - Don't change anything else in the file
  - Don't remove the `schoolImg` import

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: `[]`

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - `src/pages/PrayerRequest.tsx:80` — Same `heroImg3` import pattern
  - `src/pages/Partnership.tsx:6` — Same `heroImg3` import pattern
  - `src/pages/Contact.tsx:6` — Same `heroImg3` import pattern

  **QA Scenarios**:
  ```
  Scenario: Build and type-check pass
    Tool: Bash
    Steps:
      1. npm run lint → tsc --noEmit passes with no errors
      2. npm run build → vite build succeeds
    Expected Result: Both commands exit with code 0
    Evidence: .sisyphus/evidence/task-1-build-pass.log
  ```

  **Commit**: YES
  - Message: `feat: replace school hero with hero-img3 and center text`
  - Files: `src/pages/School.tsx`
