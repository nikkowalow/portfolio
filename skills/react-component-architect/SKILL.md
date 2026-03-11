---
name: react-component-architect
description: Designs and reviews React components for modern TypeScript projects using React, Next.js, and TailwindCSS. Use when the user asks to build React components, refactor UI components, debug React code, improve component structure, or optimize frontend performance.
---

# React Component Architect

This skill helps design, refactor, and review React components to ensure production-grade architecture, readability, and performance.

It assumes the project uses:

- React
- TypeScript
- TailwindCSS
- Component-based architecture

Focus on **clean, scalable frontend engineering practices.**

---

# When this skill activates

Use this skill when the user asks to:

- build a React component
- fix or refactor React UI
- debug React or TSX code
- improve layout or styling
- optimize frontend performance
- organize React project structure

---

# Output Requirements

When generating or modifying React code:

1. Use **TypeScript**
2. Prefer **functional components**
3. Use **clear props interfaces**
4. Avoid unnecessary re-renders
5. Keep components modular and maintainable

---

# Component Structure Rules

All components should follow this structure:

1. Imports
2. Types / interfaces
3. Main component
4. Helper functions
5. Export default

Example structure:

```tsx
import React from "react";

interface Props {
  title: string;
}

export default function Example({ title }: Props) {
  return <div className="p-4">{title}</div>;
}
```
