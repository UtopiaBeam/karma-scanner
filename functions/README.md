# karma-scanner backend
Make sure to run these commands in `./functions` directory.
## Install dependencies
```
yarn install
```
## Build Project
```
yarn build
```
## Deploy to Google Cloud Functions
```
gcloud functions deploy karma --runtime nodejs6 --trigger-http
```
Note: You must login to GCP account by running ```gcloud auth login``` and set project by running ```gcloud config set project [PROJECT_ID]```