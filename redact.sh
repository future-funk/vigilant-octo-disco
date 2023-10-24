#!/bin/bash

# Loop through all files and folders in the current directory and its subdirectories
find . -depth -not -path './.git/*' -not -path './.github/*' -not -name 'redact.sh' -not -name 'package.json' -not -name 'package-lock.json' -print0 | while read -d '' file; do
  # Generate a random name for the file or folder
  newname=$(openssl rand -hex 8)

  # Rename the file or folder
  echo "Renaming $file to $newname"
  mv "$file" "$(dirname "$file")/$newname"

  # If the file is a regular file, replace its contents with random text
  if [ -f "$newname" ]; then
    # Get the original file size
    size=$(stat -c %s "$newname")

    # Generate random text of the same size
    random=$(openssl rand -base64 "$size" | head -c "$size")

    # Replace the file contents with the random text
    echo "Replacing contents of $newname with random text"
    echo "$random" > "$newname"
  fi
done