# Pokédex

## Installation

### Server

```shell
cd backend
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
  - link to detail
- pokemon detail
  - breadcrumbs
  - information from database
  - evolutions

## Technologies

- Next.js (https://nextjs.org/)
- Carbon Design System (https://carbondesignsystem.com/)
- Apollo Client (https://www.apollographql.com/docs/react/get-started/)
