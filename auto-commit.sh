#!/bin/bash

TODAY=$(date +"%B %d, %Y")
git add .
git commit -m "Daily auto-commit for $TODAY"
git push
/