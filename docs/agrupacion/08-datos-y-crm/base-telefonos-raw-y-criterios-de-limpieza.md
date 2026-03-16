---
title: "CSV File Creation for Phone and Name Data"
description: "A CSV file named 'phones_raw.csv' has been created containing cleaned phone numbers and names. The user is offered options for further modifications, such as..."
tags:
  - csv
  - data cleaning
  - phone numbers
  - data export
doc_type: "guide"
source_file: "base-telefonos-raw-y-criterios-de-limpieza.md"
source_id: "ac952938-926a-44d2-9f49-fc3fe0bd8c9c"
summary_day: "2025-11-05"
confidence: 4
status: "curated"
area: "datos-y-crm"
---
## Síntesis

A CSV file named 'phones_raw.csv' has been created containing cleaned phone numbers and names. The user is offered options for further modifications, such as removing dashes or limiting phone numbers to the last 10 or 11 digits.

## Acciones sugeridas

- Download the provided CSV and review the phone and name data. Confirm if additional formatting or cleaning is needed, such as removing dashes or normalizing phone numbers.

## Desarrollo

He creado un CSV “raw” con dos columnas `phone,name`, sin espacios en los teléfonos y con nombres limpios (se removió el `~` inicial si existía). Puedes descargarlo aquí:

[Descargar phones_raw.csv](sandbox:/mnt/data/phones_raw.csv)

Contenido (preview)
phone, name
+549114448-3999, Axel Iglesias FCEN 
+549113062-0432, Facundo Niklison 
+549115629-5712, Lucía Pedraza FCEN 
+549115904-6269, Santi Sosa FCEN 
+549116226-3159, Tobias Carreira Munich 
+549115325-5146, Caterina 
+549113943-8899, Guido Schifani 
+549113110-4974, Laris Paticipacion 
+549116683-5991, Leonard Erhhorn 
+549115889-3867, Matías Iglesias

Notas rápidas
- He dejado los guiones `-` tal como estaban; si preferís remover también guiones y paréntesis (dejando sólo `+` y dígitos), lo hago rápido.
- Si querés que la columna `phone` tenga sólo los últimos 10 ó 11 dígitos (útil para merges locales) lo normalizo sin problema.
- Si querés incluir también las entradas que aparecen en las capturas pero no en el texto (por ejemplo contactos con emojis o entradas vacías), puedo extraerlos si subís el CSV o me pedís que parseé la imagen vía OCR.

Dime si prefieres otro formato (parquet, TSV) o una limpieza distinta para los teléfonos.

## Notas de fuente

<details>
<summary>Ver procedencia</summary>

- Archivo original: `base-telefonos-raw-y-criterios-de-limpieza.md`
- ID de fuente: `ac952938-926a-44d2-9f49-fc3fe0bd8c9c`
- Fecha de resumen: `2025-11-05`
</details>
