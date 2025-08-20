#!/bin/bash

APP_FILE="src/App.tsx"

to_camel_case() {
  local input="$1"

  input=$(echo "$input" | sed 's/[^a-zA-Z0-9]\+/ /g')

  local camel=""
  local word
  local first=true

  for word in $input; do
    if $first; then
      camel="${word,,}"
      first=false
    else
      camel+="${word^}"
    fi
  done

  echo "$camel"
}

NEW_PATH="$1"
IMPORT_NAME=$(to_camel_case "$NEW_PATH")

IMPORT_LINE="import $IMPORT_NAME from \"./pages/template/json-data/$NEW_PATH\""
sed -i "1s|^|$IMPORT_LINE\n\n|" "$APP_FILE"

MARKER="{/* ======== NEW TEMPLATE ROUTE REF ======== */}"
lineToInsert="<Route path=\"/$NEW_PATH\" element={<Template jsonData={$IMPORT_NAME} />} />"
awk -v insert="$lineToInsert" '/======== NEW TEMPLATE ROUTE REF ========/ { print; print insert; next } 1' "$APP_FILE" > tmp && mv tmp "$APP_FILE"
