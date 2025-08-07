function calculateAchievements(currentWeight, targetWeight) {
  const delta = currentWeight - targetWeight;
  const achievements = [];

  if (delta <= 0) {
    achievements.push('Цель достигнута! Продолжай в том же духе.');
  } else if (delta < 5) {
    achievements.push('Почти у цели! Осталось меньше 5 кг.');
  } else {
    achievements.push('Отличное начало! Держи курс на здоровый рацион.');
  }

  return achievements;
}

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Только POST' });
  }

  const { imageBase64, currentWeight, targetWeight } = req.body;

  if (!imageBase64 || !currentWeight || !targetWeight) {
    return res.status(400).json({ error: 'Не хватает данных' });
  }

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) {
    return res.status(500).json({ error: 'Отсутствует ключ API' });
  }

  const prompt = `Проанализируй блюдо на фото и оцени калорийность. Текущий вес: ${currentWeight} кг. Целевой вес: ${targetWeight} кг. Дай три рекомендации для достижения цели и предложи три полезных рецепта. Ответ верни в формате JSON: { "analysis": string, "calories": number, "recommendations": string[], "recipes": string[] }`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Ты нутрициолог и помощник по здоровому питанию.' },
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
              }
            ]
          }
        ],
        max_tokens: 500,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: 'Ошибка запроса к OpenAI', details: errorText });
    }

    const data = await response.json();

    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      return res.status(500).json({ error: 'Ошибка ИИ' });
    }

    let result;
    try {
      result = JSON.parse(content);
    } catch {
      return res.status(500).json({ error: 'Неверный ответ ИИ' });
    }

    result.achievements = calculateAchievements(currentWeight, targetWeight);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Сбой соединения с OpenAI' });
  }
};

module.exports.calculateAchievements = calculateAchievements;
