# Cleros

# Design references:

- https://ru.pinterest.com/pin/20125529579842193/
- https://ru.pinterest.com/pin/4503668370998883/
- https://ru.pinterest.com/pin/37154765668895388/
- https://ru.pinterest.com/pin/25262447904272886/
- https://ru.pinterest.com/pin/492649953752138/
- https://ru.pinterest.com/pin/1139973724435217754/
- https://ru.pinterest.com/pin/844493673417090/
- https://ru.pinterest.com/pin/3870349673500749/

# Libs:

## Graphics:

- npm install recharts
- npm install @nivo/core @nivo/bar
- npm install reactflow
- npm install d3

```bash
src/
├── shared/
│   └── api/
│       ├── http-client/
│       │   ├── index.ts
│       │   └── types.ts
│       ├── note/
│       │   ├── index.ts      # api functions (fetchNotes, etc)
│       │   └── types.ts      # DTO types
│       └── activity/
│           └── ...
├── entities/
│   ├── note/
│   │   ├── model/
│   │   │   ├── api.ts       # обертки над shared/api/note
│   │   │   ├── storage.ts
│   │   │   ├── selectors.ts
│   │   │   └── types.ts     # внутренние типы
│   │   └── ui/
│   │       └── NoteCard.tsx
│   └── activity/
│       └── ...
└── pages/
    └── ...

```
