#!/bin/bash

# Change directory to script's directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR

# Select project to build
printf "Please select project:\n"
select d in */; do test -n "$d" && break; echo ">>> Invalid Selection"; done
cd "$d"

# Combine all to one file
OUTPUT_DIR=${SCRIPT_DIR}/main.html
cat sketch.html > $OUTPUT_DIR
printf "\n<script>\n" >> $OUTPUT_DIR
cat sketch.js >> $OUTPUT_DIR
printf "\n</script>" >> $OUTPUT_DIR