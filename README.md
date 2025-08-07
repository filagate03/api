# Food AI Server

Серверless-функция для анализа еды по фото, подсчёта калорий и рекомендаций.

## Запуск локально

1. Установи Node.js версии 18 или новее.
2. Склонируй репозиторий и перейди в папку `api`.
3. Сохрани ключ OpenAI в переменную окружения:
   ```bash
   export OPENAI_API_KEY="твой_ключ"
   ```
4. Запусти тесты:
   ```bash
   npm test
   ```
5. Для локального запуска установи [Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm install -g vercel
   vercel dev
   ```
   Эндпоинт будет доступен по адресу `http://localhost:3000/food`.

## Деплой

1. Авторизуйся в Vercel:
   ```bash
   vercel login
   ```
2. Выполни команду:
   ```bash
   vercel
   ```
3. Следуй подсказкам в терминале. После деплоя получишь URL вида `https://твое-приложение.vercel.app/food`.

При каждом запросе отправляй POST JSON с полями `imageBase64`, `currentWeight` и `targetWeight`.
