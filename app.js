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

// const _ = require('lodash');

// const items = [1,[2,[3,4]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello world");

// console.log('first task');
// console.time()
// for(let i=0; i<10000000;i++){
//     const h3 = document.querySelector('h3')
//     h3.textContent = `hey, everyone is waiting on me`
// }
// console.timeEnd()
// console.log('next task');

// console.log('first task');
// setTimeout(()=>{
// console.log('second task');
// },0)

// console.log('next task');

// const {readFile} = require('fs');
// console.log('started a first task');
// //CHECK FILE PATH
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('Completed first task');
// })
// console.log('starting next task');

// //started operating system process
// console.log('first');
// setTimeout(()=>{
//     console.log('second');
// },0)
// console.log('third');
// //completed and exited operating system process

// setInterval(()=>{
//     console.log('hello world');
// },2000)
// console.log(`I will run first`);
// //process stays alive unless
// //kill process CONTROL + C
// //unexpected error
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('request event');
//     res.end('Hello world');
// })

// server.listen(5000,()=>{
//     console.log('Server listening on port : 5000....');
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page')
//     }
//     if(req.url === '/about'){
//         //BLOCKING CODE
//         for(let i =0;i<1000;i++){
//             for(let j =0;j<1000;j++){
//                 console.log(`${i} ${j}`);
//             } 
//         }
//         res.end('About Page')
//     }
//     res.end('Error Page')
// })

// server.listen(5000,()=>{
//     console.log('Server is listening on port : 5000');
// })

// const { readFile, writeFile } = require('fs').promises

// // const util = require('util');
// // const readFilePromise =util.promisify(readFile)
// // const writeFilePromise =util.promisify(writeFile)

// // const getText = (path)=>{
// //     return new Promise((resolve,reject)=>{
// //         readFile(path,'utf8',(err,data)=>{
// //             if(err){
// //                 reject(err);

// //             }
// //             else{
// //                 resolve(data);
// //             }
// //         })
// //     })  
// // }

// // getText('./content/first.txt')
// // .then(result=> console.log(result))
// // .catch(err => console.log(err))

// const start = async () => {
//     try {
//         const first = await readFile('./content/first.txt', 'utf8')
//         const second = await readFile('./content/second.txt', 'utf8')
//         await writeFile(
//             './content/result-mind-grenade.txt',
//             `THIS IS AWESOME : ${first} ${second}`,
//             { flag: 'a' }
//         )
//         console.log(first);
//         console.log(second);
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()
// // getText('./content/first.txt')
// // .then(result=> console.log(result))
// // .catch(err => console.log(err))
// // const getText = (path)=>{
// //     return new Promise((resolve,reject)=>{
// //         readFile(path,'utf8',(err,data)=>{
// //             if(err){
// //                 reject(err);

// //             }
// //             else{
// //                 resolve(data);
// //             }
// //         })
// //     })  
// // }

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved ${name} with id : ${id}`);
// });

// customEmitter.on('response',()=>{
//     console.log(`some other logic here`);
// });

// customEmitter.emit('response','seela',28);

// const http = require('http');

// // const server = http.createServer((req,res)=>{
// //     res.end('Welcome')
// // })

// //Using Event Emitter API
// const server = http.createServer();
// //emits request event
// //subcribe to it / listen for it /respond to it
// server.on('request', (req, res) => {
//     res.end('Welcome');
// })
// server.listen(5000);
// const {createReadStream}= require('fs');

// const stream = createReadStream('./content/big.txt',{highWaterMark:90000, encoding:'utf8'});

// //default 64kb
// //last buffer - remainder
// //highWaterMark = control size
// //const stream = createReadStream('./content/big.txt',{highWaterMark:90000})
// // const stream = createReadStream('../content/big.txt',{encoding:'utf8'})
// stream.on('data',(result)=>{
// console.log(result);
// })
// stream.on('error',(err)=>console.log(err))
console.log('stream example');
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})
.listen(5000)