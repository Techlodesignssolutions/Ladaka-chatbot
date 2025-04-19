#!/bin/bash

# Build Next.js app
npm run build

# Check if build was successful
if [ ! -d "out/_next/static" ]; then
    echo "Build failed - static directory not found"
    exit 1
fi

echo "Build complete - check files in out/ directory" 