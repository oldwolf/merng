# Social App - MERNG Stack

MERNG stands for MongoDB, Express, React, Node.js & GraphQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have all requirements installed

```
- A MLab, Mongo Atlas or local Mongo instance is required
- Node.js installed
```

### Installing

Clone this git repo

```
# Open a terminal
git clone git@github.com:oldwolf/merng.git
yarn install

cd client
yarn install

```

Create a new 'config.js' under your root folder, paste the following code into it and change the MONGO_URI to whatever your mongo instance will be, and SECRET_KEY to whatever the key you want

```
module.exports = {
  MONGO_URI: 'mongodb://<db_user:<db_password>@<db_url>/merng',
  SECRET_KEY: 'TopSecret'
};
```

### Up and Running
```
# Open a terminal, at the root folder
yarn start

# Open another terminal
cd client
yarn start
```