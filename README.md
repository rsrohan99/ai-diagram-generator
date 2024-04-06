In this tutorial, we'll see how to use LlamaIndex Instrumentation module to send intermediate steps in a RAG pipeline to the frontend for an intuitive user experience.


![arch](https://github.com/rsrohan99/rag-stream-intermediate-events-tutorial/assets/62835870/46aecce8-3fdb-46b3-8e33-5bad089c9371)


We use Server-Sent Events which will be recieved by Vercel AI SDK on the frontend.

## Getting Started

First clone the repo:

```bash
$ git clone https://github.com/rsrohan99/rag-stream-intermediate-events-tutorial.git

$ cd rag-stream-intermediate-events-tutorial
```

## Start the Backend

`cd` into the `backend` directory

```bash
$ cd backend
```

### First set the OpenAI key in .env

```bash
OPENAI_API_KEY=****
```

### Install the dependencies

```bash
$ poetry install
```

### Generate the Index for the first time

```bash
$ poetry run python app/engine/generate.py
```

### Start the backend server

```bash
$ poetry run python main.py
```

## Start the Frontend

`cd` into the `frontend` directory

```bash
$ cd frontend
```

### Install the dependencies

```bash
$ bun i
```

### Start the frontend server

```bash
$ bun run dev
```
