// creating and writing to files through fs
const fs = require("fs")

// fs.writeFileSync("text.txt", "Jai Siya Ram")
// fs.writeFile("vanshika.txt", "jai bajrangbali", (err)=>{})

//const result = fs.readFileSync("vanshika.txt", "utf-8")
//console.log(result)

fs.readFile("vanshik.txt", "utf-8", (err, answer)=>{
    if(err) console.log("Error")
    else console.log(answer)
})

