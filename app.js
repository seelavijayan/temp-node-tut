// const amount = 9;
// if (amount < 10) {
//     console.log('small number');
// }
// else {
//     console.log('large number');
// }

// console.log(`hey its my first app`);
// GLOBALS - NO WINDOW
// __dirname - path to current directory
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current module (file)
// process - info about env where the progress is being executed

// console.log(__dirname);
// setInterval(() => {
//     console.log('hello world');
// }, 1000)
// const os = require('os');

// //info about current user 
// const user = os.userInfo();
// console.log(user); 

// //method returns the system uptime in seconds

// console.log(`The System Uptime is ${os.uptime}`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);

// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('/content','subfolder','test.txt');
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');

// console.log(first, second);

// writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag:'a'});

// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // console.log(result);
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         })
//     })
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
// // console.log(req);
// if(req.url === '/'){
//     res.end('Welcome to our home page');
// }
// if(req.url === '/about'){
//     res.end('Here is our short history');
// }
// // res.write('Welcome to our home page');
// res.end(`
// <h1>Oops!</h1>
// <p>We Can't seem to find the page you are looking for</p> 
// <a href="/">back home</a>
// `);
// })

// server.listen(5000);

//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (maC)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);