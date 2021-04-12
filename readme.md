npm init -y creating a package.json
tsc --init creating a tsconfig.json file
npm install nodemon concurrently

tsconfig.json
"outDir": "./build", /_ Redirect output structure to the directory. _/
"rootDir": "./src", /_ Specify the root directory of input files. Use to control the output directory structure with --outDir. _/

package.json
"scripts": {
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start":"concurrently npm:start:\*"
},

npm start

http://nodejs.org/api fs.readFileSync

npm install @types/node install type defenition library

git init
git remote add origin https://github.com/Shelvadim/
git add -A
git commit -m "1st commit"
git push origin master
