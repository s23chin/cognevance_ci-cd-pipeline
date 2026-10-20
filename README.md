# Cognevance Project 2: CI/CD Pipeline Automation System

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions, Docker, and Docker Hub.

The pipeline automatically installs dependencies, runs application tests, builds a Docker image, and pushes the image to Docker Hub when code is pushed to the `main` branch.

## Technologies Used

- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub
- YAML

## Application Features

- Lightweight Node.js HTTP web server
- Automated HTTP response test
- Docker containerization
- Automated CI workflow
- Docker image publishing to Docker Hub

## Project Structure

```text
cognevance_ci-cd-pipeline/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── Dockerfile
├── .dockerignore
├── package.json
├── server.js
├── server.test.js
└── README.md
```

## Run Locally

Install Node.js, then run:

```bash
npm test
npm start
```

Open http://localhost:3000 in your browser.

## Build and Run with Docker

Build the image:

```bash
docker build -t cognevance-ci-cd-app:1.0 .
```

Run the container:

```bash
docker run -d --name cognevance-app -p 3000:3000 cognevance-ci-cd-app:1.0
```

Open http://localhost:3000.

## CI/CD Workflow

On pushes to `main`, GitHub Actions:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs automated tests.
5. Sets up Docker Buildx.
6. Authenticates to Docker Hub using GitHub Actions secrets.
7. Builds and pushes the Docker image with `latest` and commit-SHA tags.

Docker Hub credentials are stored as GitHub repository secrets and are not committed to the repository.

## Docker Hub Image

Repository: https://hub.docker.com/r/walkwithsachin/cognevance-ci-cd-app

Pull the published image:

```bash
docker pull walkwithsachin/cognevance-ci-cd-app:latest
```

Run it on local port 3001:

```bash
docker run -d --name cognevance-verify -p 3001:3000 walkwithsachin/cognevance-ci-cd-app:latest
```

Open http://localhost:3001.

## Verification and Evidence

Capture screenshots of:

- Successful automated test output (`npm test`)
- Running Docker container and application in the browser
- Successful GitHub Actions workflow run
- Docker Hub repository showing `latest` and commit-SHA tags
- Container logs

## Security

Docker Hub credentials are stored in GitHub repository secrets. Never commit access tokens or passwords to source control. Revoke any token that was accidentally committed or exposed.

## Project Status

The automated test, GitHub Actions workflow, and Docker Hub image publishing have been verified. Local execution of the published image should be confirmed before marking deployment verification complete.
