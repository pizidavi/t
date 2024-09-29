#! /bin/sh

rm -rf dist > /dev/null || true
npx rollup -c
