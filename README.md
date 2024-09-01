# MA UI Online Status Checker

This project provides a simple status checker for the Massachusetts Unemployment Insurance Online system. It displays a status badge indicating whether the UI Online website is up or down.

## Status Badge

![MA UI Online Status](https://img.shields.io/badge/dynamic/json?label=MA%20UI%20Online&query=$.status&url=https://your-api-endpoint.com/status&color=brightgreen)

Note: The badge above is a placeholder. You'll need to set up a backend API to update the status dynamically.

## Features

- Real-time status checking of the MA UI Online website
- Visual indicator (green for up, red for down)
- Automatic refresh every 60 seconds (configurable)

## Getting Started

1. Clone this repository
2. Install dependencies:

