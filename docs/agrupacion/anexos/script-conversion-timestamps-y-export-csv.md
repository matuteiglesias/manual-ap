---
title: "Script de conversión de timestamps y exportación CSV"
description: "This message details a script that converts timestamps to a readable format, replaces NaN values, extracts the last four digits of sender handles, and saves ..."
tags:
  - python
  - data processing
  - csv
  - pandas
doc_type: "guide"
source_file: "script-conversion-timestamps-y-export-csv.md"
source_id: "0ef645da-1fb8-4e70-80d5-d0f2328adfaa"
summary_day: "2025-11-05"
confidence: 5
status: "curated"
area: "anexos"
---
## Síntesis

Documento curado para consulta interna, con foco en lectura operativa, trazabilidad y reutilización de hallazgos.

## Posibles desarrollos

- Run the script on the user's CSV data or adjust the format as requested.

## Desarrollo

```python
Listo — te armé y ejecuté un script de ejemplo que hace exactamente lo que pediste: convierte timestamps a una versión corta y legible, reemplaza NaN por `''`, toma los últimos 4 dígitos del número y guarda los mensajes en archivos CSV por bloques de 100. Ejecuté el ejemplo con una mini-muestra (igual a la que pegaste) y guardé `part_001.csv` en el entorno de la demo.

Qué hizo el script (resumen técnico rápido)
- `sent_at_utc` → parseo con `pd.to_datetime(..., utc=True)`.
- Conversión a zona horaria `America/Argentina/Buenos_Aires` y formateo `YYYY-MM-DD HH:MM` (si falla, queda en `YYYY-MM-DD HH:MM UTC`).
- `body`: `NaN` → `''` y forzado a `str`.
- `sender_handle`: toma `str[-4:]` (seguro si tiene menos de 4 caracteres).
- Agrupa en partes de 100 y escribe `part_001.csv, part_002.csv, ...` (nombre con padding `part_001.csv`).

Salida de la demo (preview):
sender_last4 | sent_at_short | body
-------------|---------------------|-----------------------------------------
3867 | 2021-09-20 16:00 | 💜 PARTICIPACIÓN 2024 💜
3867 | 2024-07-10 13:22 |
0428 | 2024-07-10 13:22 | Lo agrego a Mati al grupo!
3867 | 2024-07-10 13:22 |
6269 | 2024-07-10 13:24 | Buenas! Nos juntamos mañana a las 13 30 en ext...

Archivo generado en esta sesión de demo:
[Descargar part_001.csv](sandbox:/mnt/data/wp_msg_dump/part_001.csv)

Código completo (lista para pegar en tu entorno)
```

## Notas de fuente

<details>
<summary>Ver procedencia</summary>

- Archivo original: `script-conversion-timestamps-y-export-csv.md`
- ID de fuente: `0ef645da-1fb8-4e70-80d5-d0f2328adfaa`
- Fecha de resumen: `2025-11-05`
</details>