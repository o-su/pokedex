# Pokédex

## Installation

### Server

```shell
cd backend
docker-compose up # starts postgres db
npm install
npm run start
```

### Client

```shell
cd frontend
npm install
npm run codegen:compile # generates types from graphql
npm run dev
```

## Features

- responsive, mobile-first design
- top menu
  - logo - go to homepage link
  - light / dark theme switch
- homepage
  - animated logo, call to action
- pokemons list
  - advanced filters
    - all / favorites
    - pokemon type
    - search
  - layout selection - grid (default) / list
  - unmark / mark as favorite
  - pokemon preview
  - link to detail
  - infinite scroll
- pokemon detail
  - breadcrumbs
  - information from database
  - play pokemon sound
  - evolutions

## Technologies

- Next.js (https://nextjs.org/)
- Carbon Design System (https://carbondesignsystem.com/)
- Apollo Client (https://www.apollographql.com/docs/react/get-started/)

## Supported Browsers

- Google Chrome
- Mozilla Firefox
