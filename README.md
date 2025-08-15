# Viral OS

Viral OS — панель для поиска и анализа вирусных коротких видео. Проект использует Next.js, Supabase и модульный биллинг.

## Запуск на Windows
1. Установите [Node.js 18+](https://nodejs.org/) и [Git](https://git-scm.com/).
2. Клонируйте репозиторий и перейдите в папку `api`.
3. Скопируйте `.env.example` в `.env.local` и заполните ключи.
4. Установите зависимости:
   ```bash
   npm install
   ```
5. Запустите dev сервер:
   ```bash
   npm run dev
   ```
   Приложение будет доступно на `http://localhost:3000`.

## Деплой на Vercel
1. Установите [Vercel CLI](https://vercel.com/docs/cli).
2. Выполните `vercel` и следуйте инструкциям.
3. Переменные из `.env.local` добавьте в настройки проекта на Vercel.

## Supabase
1. Создайте проект Supabase и таблицы согласно файлу `supabase.sql` (миграция).
2. Включите RLS и добавьте политики.

## Биллинг
Выберите провайдера через переменную `BILLING_PROVIDER` (`lemon`, `stripe`, `yookassa`).
Заполните соответствующие ключи в `.env.local`.

## Turnstile
Для защиты от ботов используйте [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/). Заполните `TURNSTILE_SITE_KEY` и `TURNSTILE_SECRET_KEY`.

## Полезные команды
- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка
- `npm start` — запуск продакшн-сборки
- `npm run lint` — проверка eslint

Без заполненных ключей API серверные роуты вернут понятные ошибки, а UI загрузится.
