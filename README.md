# Demo Monorepo

This is a demo monorepo.

## Setup

Once you clone the repository go to the root directory and run the following command to setup the dependencies and make the repository ready for development. Refrain from running any other commands before you setup the repository as it can lead to unwanted errors.

```bash
yarn setup
```

## Running the project

### Dev

To run the dev environment we can run the following commands on **separate terminals** to start the frontend and backend

#### Backend Node

This will start the backend based on node and express server as the backend with all the routes.

```bash
yarn dev-backend
```

#### Frontend

This will start the frontend based on nextJs.

```bash
yarn dev-frontend
```