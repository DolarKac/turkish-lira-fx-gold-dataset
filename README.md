# Türk Lirası Döviz, Altın ve Bitcoin Günlük Fiyatları / Turkish Lira FX, Gold and Bitcoin Daily Prices

Kaynak / Source: **[DolarKaç – dolarkac.com](https://dolarkac.com)** · Lisans / License: **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**

Dolar, euro, sterlin, gram altın, çeyrek altın, ons altın ve bitcoin için günlük açılış/en yüksek/en düşük/kapanış fiyatları. Canlı fiyatlar ve grafikler: [dolarkac.com](https://dolarkac.com).

Daily open/high/low/close prices for the Turkish lira against USD, EUR and GBP, plus gram gold, quarter gold coin, gold ounce and Bitcoin.

## Dosyalar / Files

| Dosya | Varlık / Asset | Birim | Satır | İlk gün | Son gün |
|---|---|---|---|---|---|
| data/usd.csv | Dolar (USD/TRY) | TRY | 4236 | 2010-01-04 | 2026-10-31 |
| data/eur.csv | Euro (EUR/TRY) | TRY | 4236 | 2010-01-04 | 2026-10-31 |
| data/gbp.csv | Sterlin (GBP/TRY) | TRY | 4236 | 2010-01-04 | 2026-10-31 |
| data/gram.csv | Gram altın (24 ayar) | TRY | 2892 | 2010-01-01 | 2026-10-31 |
| data/ceyrek.csv | Çeyrek altın | TRY | 2789 | 2018-07-02 | 2026-10-31 |
| data/ons.csv | Ons altın (XAU/USD) | USD | 2788 | 2018-07-02 | 2026-10-31 |
| data/btc.csv | Bitcoin (BTC/TRY) | TRY | 3363 | 2017-08-17 | 2026-10-31 |

Sütunlar / columns: `date,open,high,low,close,currency` — tarih İstanbul saatine göre (UTC+3) ISO `YYYY-MM-DD`, ondalık ayırıcı nokta, UTF-8.

Notlar / notes:
- Eski yıllarda bazı seriler yalnızca kapanış fiyatı içerir (open = high = low = close). / Older rows may carry only a close (open = high = low = close).
- Hafta sonu ve tatil günleri seriye göre eksik olabilir; gram altında eski dönemde boşluklar vardır. / Weekends/holidays may be missing; older gram gold data has gaps.
- Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. / Informational only, not investment advice.

## Atıf / Attribution (zorunlu / required)

CC BY 4.0 gereği kullandığınız her yerde kaynak gösterin / Credit the source wherever you use the data:

```
Kaynak: DolarKaç (https://dolarkac.com)
```
HTML: `Kaynak: <a href="https://dolarkac.com/">DolarKaç</a>`

## Güncelleme / Update

```sh
node scripts/fetch.mjs   # Node 18+, https://dolarkac.com/api/history-csv uç noktasından indirir
```

Tek bir seri ve tarih aralığı için doğrudan / for a single series and range: `https://dolarkac.com/api/history-csv?id=USD&from=2024-01-01&to=2024-12-31` (Excel uyumlu, `;` ayraçlı) veya `&format=json`. Canlı fiyat API'si: [dolarkac.com/gelistirici-api](https://dolarkac.com/gelistirici-api).
