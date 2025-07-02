// import {createServer} from 'http';
// const PORT = process.env.PORT || 8000;


// const users=[
//     {id:1,name:'Sayani'}, 
//     {id:2,name:'Sayan'},
//      {id:3,name:'Shanaya'}
//     ];

// const server = createServer((req, res) => {
//     if(req.url === '/api/users' && req.method === 'GET') {
//         res.setHeader('Content-Type', 'application/json');

//         res.write(JSON.stringify(users));
//         res.end();
//     }
//     else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') 
//  {
//     const id= req.url.split('/')[3];
//     console.log(id); 
//         const user = users.find(u => u.id === parseInt(id));

//         if(user) {
//             res.setHeader('Content-Type', 'application/json');
//             res.write(JSON.stringify(user));
//             res.end();
//         } else {
//             res.setHeader('Content-Type', 'application/json');
//             res.statusCode = 404;
//             res.write(JSON.stringify({message: "User not found"}));
//             res.end();
//         }
//     }

//     res.setHeader('Content-Type', 'application/json');

//         res.write(JSON.stringify({id:1, name:'Sayani'}));
//         res.end();
        




//     }
//     else{
//         res.setHeader('Content-Type', 'application/json');
//         res.statusCode = 404;

//         res.write(JSON.stringify({
//             message: "Not Found"}));
//         res.end();

//     }
// );

// server.listen(8000, () => {
//     console.log(`Server is running on port ${PORT}`);
// });















// import {createServer} from 'http';
// const PORT = process.env.PORT || 8000;

// const users=[
//     {id:1,name:'Sayani'}, 
//     {id:2,name:'Sayan'},
//     {id:3,name:'Shanaya'}
// ];



// // logger middleware function
// // This function logs the request method and URL to the console

// const logger = (req, res, next)    => {
//     console.log(`${req.method} ${req.url}`);
//     next();



// }


// //json middleware


// const jsonMiddleware= (req,res,next) => {

//     res.setHeader('Content-Type', 'application/json');
//     next();
// }


// // route handler for GET/api/users

// const getUsersHandler = (req,res)=>{
//     res.write(JSON.stringify(users));
//     res.end();
// }


// //Route handler for GET/api/users/:id

// const getUserbyIdHandler = (req, res) => {
//     const id = req.url.split('/')[3];
//     const user = users.find((user) => user.id === parseInt(id));
//     if(user) {
//         res.write(JSON.stringify(user));
//     }
//     else {
//         res.statusCode = 404;
//         res.write(JSON.stringify({message: "User not found"}));
//     }
//     res.end();



// }



// //No found handler


// const notFoundHandler = (req, res) => {

//     res.statusCode = 404;
//         res.write(JSON.stringify({
//             message: "Not Found"
//         }));
//         res.end();
// }

// const server = createServer((req, res) => {
//     logger(req, res, () => {

//         jsonMiddleware(req, res, () => {
//             if(req.url === '/api/users' && req.method === 'GET') {
//                 getUsersHandler(req, res);
//             }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
//                 getUserbyIdHandler(req, res);
//             }else {
//                 notFoundHandler(req, res);
//             }


















//     //     if(req.url === '/api/users' && req.method === 'GET') {
//     //     res.setHeader('Content-Type', 'application/json');
//     //     res.write(JSON.stringify(users));
//     //     res.end();
//     // }






//     // else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
//     //     const id = req.url.split('/')[3];
//     //     console.log(id); 
//     //     const user = users.find((user) => user.id === parseInt(id));
//     //     if(user) {
//     //         res.setHeader('Content-Type', 'application/json');
//     //         res.write(JSON.stringify(user));
//     //         // res.end();
//     //     } else {
//     //         res.setHeader('Content-Type', 'application/json');
//     //         res.statusCode = 404;
//     //         res.write(JSON.stringify({message: "User not found"}));
//     //         // res.end();
//     //     }
//     //     res.end();
      

        
//     // }





//     // else {
//     //     res.setHeader('Content-Type', 'application/json');
//     //     res.statusCode = 404;
//     //     res.write(JSON.stringify({
//     //         message: "Not Found"
//     //     }));
//     //     res.end();
//     // }





//     });



// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });















import {createServer} from 'http';
const PORT = process.env.PORT || 8000;

const users=[
    {id:1,name:'Sayani'}, 
    {id:2,name:'Sayan'},
    {id:3,name:'Shanaya'}
];

// logger middleware function
// This function logs the request method and URL to the console

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// route handler for GET/api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET/api/users/:id
const getUserbyIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user) {
        res.write(JSON.stringify(user));
    }
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: "User not found"}));
    }
    res.end();
}



//Route handler for POST/api/users

const createUserHandler = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString(); // Convert Buffer to string
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        // newUser.id = users.length + 1; // Assign a new ID
        users.push(newUser);
        res.statusCode = 201; // Created
        res.write(JSON.stringify(newUser));
        res.end();
    });



}




// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({
        message: "Not Found"
    }));
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserbyIdHandler(req, res);
            } else if(req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            }
            else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
