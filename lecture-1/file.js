const fs = require('fs')

// Write the file asynchronously
fs.writeFile('../lecture-1/file1.txt' , 'Hello world! , I am from asynchronously method' , (err) =>{
    if (err) throw err
    else{
        console.log('File written successfully by asynchronously method')
    }
})

// Write the file synchronously (they dont accept callback function)
fs.writeFileSync('../lecture-1/file2.txt' , 'Hello world , I am written by synchronoulsy method')

// Read the file asynchronously
const result1 = fs.readFile('../lecture-1/file1.txt' , 'utf-8' , (err , data) =>{
    if (err) throw err;
    else{
        console.log(data)
    }
})

// Read the file synchronously (they dont accept callback function)
const result2 = fs.readFileSync('../lecture-1/file2.txt' , 'utf-8')
console.log(result2)

// copying the file
fs.copyFileSync('../lecture-1/file2.txt' , '../lecture-1/file2-copy.txt')

// deleting the file
fs.unlinkSync('../lecture-1/file2-copy.txt')

// info about the file
console.log(fs.statSync('../lecture-1/file1.txt'))

// file2-copy.txt will be created and deletd after the execution of above code