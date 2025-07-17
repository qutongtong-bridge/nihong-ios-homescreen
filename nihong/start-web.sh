#!/bin/bash

echo "Starting Nihong iOS-style home screen..."
echo "Opening http://localhost:8080 in your browser..."

# Start Python HTTP server
python3 -m http.server 8080 --directory /workspaces/VSCodeTemplateOwanTest/nihong &

# Wait a moment for server to start
sleep 2

# Try to open in browser (works on most systems)
if command -v xdg-open > /dev/null; then
    xdg-open http://localhost:8080
elif command -v open > /dev/null; then
    open http://localhost:8080
else
    echo "Please open http://localhost:8080 in your browser"
fi

# Keep the script running
echo "Server running on http://localhost:8080"
echo "Press Ctrl+C to stop"
wait