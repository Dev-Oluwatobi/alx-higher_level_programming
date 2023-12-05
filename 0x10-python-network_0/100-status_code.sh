#!/bin/bash
# Transfers a GET request to a given URL and display a response status code.
curl -s -o /dev/null -w "%{http_code}" "$1"i
