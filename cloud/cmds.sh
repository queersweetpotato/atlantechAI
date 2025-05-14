#!/bin/bash

docker image build --file Dockerfile --tag predict:latest .
docker tag predict:latest us-central1-docker.pkg.dev/forward-alchemy-459719-j4/testrepo/predict:latest
docker push us-central1-docker.pkg.dev/forward-alchemy-459719-j4/testrepo/predict:latest
