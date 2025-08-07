npm init -y

{
  "name": "chatapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


Prataps-Air:chatApp pratapdas$ npm i -D typescript ts-node @types/node

added 20 packages, and audited 21 packages in 5s

found 0 vulnerabilities
Prataps-Air:chatApp pratapdas$ npx tsc -init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig

tsc -w // like nodemon