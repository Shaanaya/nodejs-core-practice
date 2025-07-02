// import fs from 'fs';


// //readFile() - callback or async 

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err; // Handle error if any
//     console.log('File content:', data);



// });


// //readFileSync() - synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log('File content (sync):', data);







// import fs from 'fs/promises';


// //readFile() - using promises- .then() method

// fs.readFile('./test.txt', 'utf8')
//     .then(data => {
//         console.log('File content (promise):', data);
//     })
//     .catch(err => {
//         console.error('Error reading file:', err);
//     });




//readFile() - using promises - async/await syntax

import fs from 'fs/promises';
const readFileAsync = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log('File content (async/await):', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
};



// writeFile() 

const writeFileAsync = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, Im writing to this file');
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing file:', err);
    }
};




//appendFile() - appending content to a file

const appendFileAsync = async () => {
    try {
        await fs.appendFile('./test.txt', '\n This is the Appended content!');
        console.log('Content appended successfully');
    } catch (err) {
        console.error('Error appending file:', err);
    }
};





// Call the async function to write to the file
writeFileAsync();

appendFileAsync();


// Call the async function to read the file
readFileAsync();


