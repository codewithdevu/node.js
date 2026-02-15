const { log } = require("console");
const fs = require("fs");


// // sync 
// fs.writeFileSync("./test.txt", "hey i am divyansh");

// async 
// fs.writeFile("./test.txt" , "hey i am divyansh async" , (err) => {});

// read file sync
// const result = fs.readFileSync('./contact.txt' , "utf-8")
// console.log(result);

// read file async
fs.readFile('./contact.txt', "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    }
    else {
        console.log(result);

    }
})

// apppend
fs.appendFileSync('./test.txt', `hey there\n`);

//append async
// fs.appendFile("./test.txt", "hey there\n", (err) => {
//     if (err) console.log(err);
//     else console.log("data added");
// });

// copy
// fs.cpSync("./test.txt" , "./copy.txt);

// delete
// fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));

