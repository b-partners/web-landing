#!/bin/bash

APP_FILE="src/App.tsx"

NEW_PATH="$1"

IMPORT_LINE="import $NEW_PATH from \"./pages/template/json-data/$NEW_PATH\""
sed -i "1s|^|$IMPORT_LINE\n\n|" "$APP_FILE"

MARKER="{/* ======== NEW TEMPLATE ROUTE REF ======== */}"
lineToInsert="<Route path=\"/$NEW_PATH\" element={<Template jsonData={$NEW_PATH} />} />"
awk -v insert="$lineToInsert" '/======== NEW TEMPLATE ROUTE REF ========/ { print; print insert; next } 1' "$APP_FILE" > tmp && mv tmp "$APP_FILE"
