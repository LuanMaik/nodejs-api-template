# NodeJs API Template

<a href="https://www.docker.com/" title="docker"><img src="https://github.com/get-icon/geticon/raw/master/icons/docker-icon.svg" alt="docker" width="21px" height="21px"></a>
<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a>

![Tests](https://github.com/LuanMaik/nodejs-api-template/actions/workflows/node.js.yml/badge.svg)
___
### Structure folder tree:
    .
    ├── src
    │   ├── di                  # Container dependency injection definition
    │   ├── domain              # Entities, UseCases and repositories interfaces
    │   ├── infrastructure      # External access as Queue, Mail, Database repositories implementation
    │   ├── webapi              # Express web api
    │   └── main.js             # Entrypoint file
    └── test                    # Test files
        └── ...

___
### Running application:
NPM: `npm run dev`

or

Docker: `docker-compose up -d`

___
### Running tests:
NPM: `npm run test`