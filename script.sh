#!/usr/bin/env bash

npm i &> /dev/null
rm -rf spec
mv ./__answerBranch/spec ./spec
npm test
