#!/bin/bash
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i -E \
  -e 's/\btext-7xl\b/text-8xl/g' \
  -e 's/\btext-6xl\b/text-7xl/g' \
  -e 's/\btext-5xl\b/text-6xl/g' \
  -e 's/\btext-4xl\b/text-5xl/g' \
  -e 's/\btext-3xl\b/text-4xl/g' \
  -e 's/\btext-2xl\b/text-3xl/g' \
  -e 's/\btext-xl\b/text-2xl/g' \
  -e 's/\btext-lg\b/text-xl/g' \
  -e 's/\btext-sm\b/text-base/g' \
  -e 's/\btext-xs\b/text-sm/g' \
  -e 's/text-gray-400 text-sm/text-gray-400 text-base/g' 
