#!/bin/sh

# Replace the placeholder values in the Angular configuration file
sed -i "s#http://127.0.0.1:8000/api#http://localhost:8000/api#g" /usr/share/nginx/html/assets/config/app-config.json

exec "$@"
