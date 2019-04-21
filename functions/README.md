# karma-scanner backend

### Note: This is not the code that run in Cloud Functions. To explore the code deployed to GCF please check this [commit](https://github.com/UtopiaBeam/karma-scanner/tree/0953b1e06d8de0d5fea73ae3ed620ada772b6284).

## How to use API
Send POST request to https://us-central1-karmascanner.cloudfunctions.net/karma with body:
```
{
    "birthday": [YOUR_BIRTHDAY],
    "firstName": [YOUR_FIRSTNAME],
    "lastName": [YOUR_LASTNAME]
}
```
The response is in format:
```
{
    "deathday": [YOUR_DEATHDAY],
    "realm": {  // Where will you reborn.
        "name": [REALM_NAME],
        "detail": [REALM_DETAIL]
    }
}
```
## How to run functions
Make sure to run these commands in `./functions` directory.
## Install dependencies
```
yarn
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