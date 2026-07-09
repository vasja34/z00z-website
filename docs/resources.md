Сделал. Иконки в `Switch Domain` теперь берутся из YAML-конфига, а не захардкожены в компоненте.

Основное:

- В [config/domains.yaml (line 1)](/home/vadim/Projects/z00z-website/config/domains.yaml:1) добавил `icon:` для каждого домена:
  `docs=book`, `wiki=flask`, `explorer=compass`, `network=network`, `tools=code`, `aggregators=layers`, `validators=shield`, `watchers=monitor`, `wallet=wallet`.
- Схему конфига расширил в [src/lib/config/site.ts (line 18)](/home/vadim/Projects/z00z-website/src/lib/config/site.ts:18).
- Сам switcher теперь показывает иконку и в trigger, и в списке доменов: [src/components/docs/DomainSwitcher.tsx (line 42)](/home/vadim/Projects/z00z-website/src/components/docs/DomainSwitcher.tsx:42).
- Для этого добавил недостающие иконки `compass` и `monitor` в [src/components/ui/NavIcon.tsx (line 141)](/home/vadim/Projects/z00z-website/src/components/ui/NavIcon.tsx:141).

Что было в `website_2025-09-30`:

- Навигационные иконки там шли не из одного набора, а через `react-icons` из нескольких паков: [navigation-icon.config.tsx (line 1)](/home/vadim/Projects/z00z-website/.temp/website_2025-09-30/src/configs/navigation-icon.config.tsx:1).
- Конкретные mapping’и были вроде `documentation-icon`, `network-icon`, `validators-icon`, `monitors-icon`: [navigation-icon.config.tsx (line 218)](/home/vadim/Projects/z00z-website/.temp/website_2025-09-30/src/configs/navigation-icon.config.tsx:218).
- `@mdit/plugin-icon` там тоже был, но это markdown/plugin слой, не shell navigation: [package.json (line 33)](/home/vadim/Projects/z00z-website/.temp/website_2025-09-30/package.json:33).

Где смотреть бесплатные иконки:

- Основной вариант: `Lucide Icons` — https://lucide.dev/icons/ . Стиль очень близок к нашему текущему тонкому docs UI, библиотека open-source, иконки консистентные. Источник: https://lucide.dev/icons/ , https://lucide.dev/guide/
- Если нужен огромный каталог по многим open-source наборам: `Iconify Icon Sets` — https://icon-sets.iconify.design/ . Там можно сразу видеть наборы и лицензии. Источник: https://icon-sets.iconify.design/ , https://iconify.design/docs/usage/

Проверка: `npm run lint` и `npm run build` прошли. В build остались старые Turbopack warnings про file tracing в `content`, к этой правке они не относятся.

----------



Есть такие нормальные mono-варианты, и все они локально доступны через `next/font/google`:

- `Source Code Pro` — сейчас уже подключён
- `IBM Plex Mono`
- `JetBrains Mono`
- `Fira Code`
- `Roboto Mono`
- `Space Mono`
- `Inconsolata`
- `DM Mono`
- `PT Mono`
- `Ubuntu Mono`
- `Anonymous Pro`

-------



Исправил в [DocsShell.tsx](/home/vadim/Projects/z00z-website/src/components/docs/DocsShell.tsx): для логотипа включил `unoptimized` у `next/image`, чтобы он брал raw PNG без optimizer Next. Это как раз тот слой, который чаще всего даёт чёрные углы/ореолы на прозрачных PNG.
