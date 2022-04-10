<div align="center">
  <h1>FindABud</h1>
  <p>A web application that helps you find a buddy</p>
  
  <a>
    <img src="https://img.shields.io/github/last-commit/marcelherd/FindABud" alt="Last commit" />
  </a>
  <a href="https://github.com/marcelherd/FindABud/issues/">
    <img src="https://img.shields.io/github/issues/marcelherd/FindABud" alt="Issues" />
  </a>
  <a>
    <img src="https://img.shields.io/github/license/marcelherd/FindABud" alt="License" />
  </a>
   
<h4>
    <a href="#">View Demo</a>
  <span> · </span>
    <a href="https://github.com/marcelherd/FindABud/issues/">Report Bug</a>
  </h4>
</div>

<br />

# Table of Contents

- [About the Project](#about-the-project)
- [Development](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
  - [Run Locally](#run-locally)
  - [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project

TODO

### Screenshots

<img src="https://placehold.co/600x400?text=Working+on+it" alt="screenshot" />

## Development

### Prerequisites

A PostgreSQL database is required to run the application. You can start it up using Docker with minimal effort:

```sh
docker volume create postgres
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=secret -v postgres:/var/lib/postgresql/data -d postgres
```

Make sure to copy the file `.env.example` in the root folder and rename it to `.env` and fill it in. When using Docker as mentioned above, the variable `DATABASE_URL` can be set like so:

```
DATABASE_URL="postgresql://postgres:secret@localhost:5432/postgres?schema=public"
```

If you are developing on Windows, ensure that you're not accidentally converting the file's line endings to CRLF as it will show up as error in ESLint:

```
git config core.autocrlf false
```

If Visual Studio Code is saving your files with the wrong line endings, consider using the following settings:

```json
{
  "files.eol": "\n",
  "prettier.endOfLine": "auto"
}
```

### Installation

```sh
yarn install
npx prisma migrate dev
```

### Running Tests

```sh
yarn test
```

### Run Locally

```sh
yarn dev
```

### Deployment

TODO

## License

Distributed under the [GNU GPLv3](https://choosealicense.com/licenses/mit/) License. See LICENSE.txt for more information.

## Contact

Marcel Herd - me@marcelherd.com

## Acknowledgements

- [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template)
