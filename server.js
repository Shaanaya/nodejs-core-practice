// import dotenv from 'dotenv';
// dotenv.config(); // This reads .env and puts variables into process.env
// import http from 'http';
// const PORT= process.env.PORT || 8000;
// const server= http.createServer((req,res)=>{
//     // res.write("HIIIIIIII");
//     // res.setHeader('Content-Type','text/html');
//     // res.statusCode=404
//     console.log(req.url);
//     console.log(req.method);



//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end('<h1>Hello world</h1>')

//     // res.end('<h1>Hello Sayani</h1>');
    


// });

// server.listen(PORT, ()=>{
//     console.log(`server is running on port ${PORT}`);

// });











// import dotenv from 'dotenv';
// dotenv.config(); 

// import http from 'http';

// const PORT = process.env.PORT || 8000;

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>Hello world</h1>'); 
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });







import dotenv from 'dotenv';
dotenv.config();


import http from 'http';
import fs from 'fs/promises'; // Using promises version of fs for better async handling
import url from 'url';
import path from 'path';
const PORT = process.env.PORT || 8000;


const __filename = url.fileURLToPath(import.meta.url); // Get the current file name
const __dirname = path.dirname(__filename); // Get the current directory name

console.log(__filename, __dirname);


const server = http.createServer(async(req, res) => {
    // try{
    //     if (req.method === 'GET') {
    //          if( req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>Homepage</h1>');
    // }else if (req.url === '/about') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>About Page</h1>');
    // }else{
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.end('<h1>Page Not Found</h1>');
    // }
            
    //     }else{
    //         throw new Error('Method not allowed');
    //     }

    // }
    try{
        if(req.method === 'GET') {
            let filePath;
            if(req.url === '/') {
                filePath = path.join(__dirname,'public', 'index.html'); // Serve index.html for root
                
            } else if(req.url === '/about') {
                filePath = path.join(__dirname,'public', 'about.html'); // Serve about.html for /about
                
            } else {
                throw new Error('Page Not Found'); // Throw error for any other route
                
            }
            const data= await fs.readFile(filePath); 
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end(); // End the response
        }else{
            throw new Error('Method Not Allowed'); // Throw error for unsupported methods
        }
    }
    catch(err){
        console.error("Error occurred:", err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');


    }
    





    // console.log(req.url);
    // console.log(req.method);
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.end('<h1>Hello world</h1>');


    // res.writeHead(500, { 'Content-Type': 'application/json' });
    

    // res.end(JSON.stringify({ message: "Server Error" })); 





    
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    

    // res.end('<h1>Hello Sayani</h1>');



});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

















// // server.js
// import http from 'http';

// const PORT = 8000;

// const server = http.createServer((req, res) => {
//   try {
//     if (req.url === '/favicon.ico') {
//       res.writeHead(204); // No Content
//       res.end();
//       return;
//     }

//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>Hello Sayani</h1>');
//   } catch (err) {
//     console.error("Error occurred:", err);
//     res.writeHead(500, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: "Server Error" }));
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running at :${PORT}`);
// });
