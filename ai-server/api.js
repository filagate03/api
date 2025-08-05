module.exports = async function (req, res) {
  // Только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Только POST' });
  }

  const { business, revenue, hours } = req.body;

  // Проверяем данные
  if (!business || !revenue || !hours) {
    return res.status(400).json({ error: 'Не хватает данных' });
  }

  // Твой OpenAI API ключ (его ты вставишь в Vercel позже)
  const OPENAI_KEY = process.env.OPENAI_API_KEY;

  // Запрос к ИИ
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Ты эксперт по внедрению ИИ в бизнес. Выдай 3 короткие персональные рекомендации."
        },
        {
          role: "user",
          content: `Бизнес: ${business}. Выручка: ${revenue} руб/мес. Теряют ${hours} часов в неделю на рутину. Что посоветуешь?`
        }
      ],
      max_tokens: 200
    })
  });

  const data = await response.json();

  // Отправляем ответ на сайт
  if (data.choices) {
    res.json({ text: data.choices[0].message.content });
  } else {
    res.status(500).json({ error: "Ошибка ИИ" });
  }
};