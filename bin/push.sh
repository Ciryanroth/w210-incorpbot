#!/usr/bin/env bash
set -ex

tag=930446191589.dkr.ecr.us-west-2.amazonaws.com/w210-incorpbot/$1
docker push ${tag}
