// Exports provided rows to CSV
import { stringify } from 'csv-stringify';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { rows = [] } = req.body || {};
  stringify(rows, { header: true }, (err, output) => {
    if (err) return res.status(500).json({ error: err.message });
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(output);
  });
}
