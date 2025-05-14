#!/bin/bash

docker image build --file Dockerfile --tag test:latest .
docker tag test:latest us-central1-docker.pkg.dev/forward-alchemy-459719-j4/testrepo/test:latest
docker push us-central1-docker.pkg.dev/forward-alchemy-459719-j4/testrepo/test:latest
