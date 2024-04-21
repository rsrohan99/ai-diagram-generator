In this tutorial, we'll see how to use LlamaIndex Pydantic Program mode and partial object parsing to send intermediate pydantic objects from incomplete JSONs to the frontend for an intuitive user experience.

![diagram](https://github.com/rsrohan99/ai-diagram-generator/assets/62835870/6e562383-eba2-4770-8c84-b8d0603d5ca1)

We use LlamaIndex Pydantic Program mode for structured output generation and we use partial object parsing to send intermediate objects that are validated using Pydantic models to the frontend.

## Getting Started

First clone the repo:

```bash
git clone https://github.com/rsrohan99/rag-stream-intermediate-events-tutorial.git

cd rag-stream-intermediate-events-tutorial
```

## Start the Backend

`cd` into the `backend` directory

```bash
cd backend
```

### First create `.env` from `.env.example`

```bash
cp .env.example .env
```

### Set the OpenAI key in .env

```bash
OPENAI_API_KEY=****
```

### Install the dependencies

```bash
poetry install
```

### Start the backend server

```bash
poetry run python main.py
```

## Start the Frontend

`cd` into the `frontend` directory

```bash
cd frontend
```

### First create `.env` from `.env.example`

```bash
cp .env.example .env
```

### Install the dependencies

```bash
npm i
```

### Start the frontend server

```bash
npm run dev
```
