In this tutorial, we'll see how to use LlamaIndex Pydantic Program mode and partial object parsing to send intermediate pydantic objects from incomplete JSONs to the frontend for an intuitive user experience.

Full video tutorial under 2.5 minutes below 👇 🔥🔥

[![AI Diagram Generator](https://img.youtube.com/vi/Z0l2WaFYQ88/maxresdefault.jpg)](https://www.youtube.com/watch?v=Z0l2WaFYQ88)

We use LlamaIndex Pydantic Program mode for structured output generation and we use partial object parsing to send intermediate objects that are validated using Pydantic models to the frontend.

Click the above thumbnail for the detailed video tutorial.

## Getting Started

First clone the repo:

```bash
git clone https://github.com/rsrohan99/ai-diagram-generator.git
cd ai-diagram-generator
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
