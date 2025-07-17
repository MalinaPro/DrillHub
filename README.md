# Marketplace Desktop App

Desktop приложение на Tauri с маркетплейсом встраиваемых приложений и VSCode-подобным интерфейсом.

## Структура проекта

```
├── src/                 # Frontend (React + TypeScript)
├── src-tauri/           # Tauri backend (Rust)
├── server/              # Серверная часть для взаимодействия с маркетплейсом
│   ├── api/            # REST API endpoints
│   ├── database/       # Модели данных и миграции
│   ├── middleware/     # Промежуточное ПО
│   └── utils/          # Вспомогательные утилиты
├── core/               # Основная логика локального приложения
│   ├── config/         # Конфигурационные файлы
│   ├── plugins/        # Система плагинов
│   ├── themes/         # Темы оформления (VSCode-стиль)
│   └── services/       # Основные сервисы
├── apps/               # Встраиваемые приложения
│   ├── marketplace/    # Доступные приложения
│   └── installed/      # Установленные приложения
├── docs/               # Документация
└── Ideas/              # Идеи и заметки
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
