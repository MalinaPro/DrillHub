# DrillHub Dashboard

Локальная панель управления, развёрнутая на стеке **Vite + React + Tailwind + shadcn/ui** и упакованная в **Tauri**.

## Скрипты

- `npm run dev` — запустить Vite на порту `4444`.
- `npm run tauri` — запустить Tauri в режиме разработки (ожидает доступности Vite на 4444).
- `npm run build` — собрать фронтенд для Tauri.
- `npm run preview` — превью собранного фронтенда.

## Структура

- `src/` — компоненты React и стили.
- `src-tauri/` — конфигурация и исходники Tauri.

> В среде выполнения CLI `npx shadcn@latest` недоступен, поэтому блок `dashboard-01` воссоздан вручную по спецификации shadcn/ui.
