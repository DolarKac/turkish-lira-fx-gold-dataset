// Downloads full daily history CSVs from the public DolarKaç endpoint into ../data.
// Usage: node scripts/fetch.mjs   (Node 18+). Output: data/<id>.csv (UTF-8, comma separated, ISO dates, dot decimals).
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const IDS = ['USD', 'EUR', 'GBP', 'GRAM', 'CEYREK', 'ONS', 'BTC'];
const out = fileURLToPath(new URL('../data/', import.meta.url));
// Candle t = day start in fixed UTC+3 (site convention), so shift by 3h instead of using historical tz rules.
const day = t => new Date((t + 10800) * 1000).toISOString().slice(0, 10);
await mkdir(out, { recursive: true });

for (const id of IDS) {
  const r = await fetch(`https://dolarkac.com/api/history-csv?id=${id}&from=2000-01-01&format=json`);
  if (!r.ok) throw new Error(`${id}: HTTP ${r.status}`);
  const { points } = await r.json();
  const unit = id === 'ONS' ? 'USD' : 'TRY';
  const rows = points.map(([t, o, h, l, c]) => [day(t), o, h, l, c].map(v => typeof v === 'number' ? +v.toFixed(6) : v).join(','));
  await writeFile(`${out}${id.toLowerCase()}.csv`, `date,open,high,low,close,currency\n${rows.map(x => `${x},${unit}`).join('\n')}\n`);
  console.log(`${id}: ${points.length} rows, ${rows[0]?.slice(0, 10)} – ${rows.at(-1)?.slice(0, 10)}`);
  await new Promise(res => setTimeout(res, 1500));
}
