#!/bin/bash

file_temp_id=$(uuidgen)

folder_path="./src/pages/template/json-data"
temp_file_path="${folder_path}/${file_temp_id}.json"
json_data_as_b64="$1"

# get the current file path
echo "${json_data_as_b64}" | base64 -d > "$temp_file_path"
route=$(jq -r '.route' "$temp_file_path")
page_name="$(echo "$route" | sed 's|^/||')"
route="${folder_path}${route}.ts"

# update the data file
rm -rf "$route"
mv "$temp_file_path" "$route"

# add the default export to the updated file
sed -i '1s/^/export default /' "$route"

# Format the edited file
npx prettier --write "$route" --config ".prettierrc.json"

BRANCH_NAME="update-page-${page_name}"
git checkout -b "$BRANCH_NAME"
git add .
git commit -m "Update page /${page_name} with JSON content"
git push -f origin "$BRANCH_NAME"