const fs = require("fs")
const path = require("path")




fs.mkdir("./main", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
})
fs.mkdir("./main/inPerson", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
})
fs.mkdir("./main/online", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
})

// fs.open('./main/inPerson/inPersonUsers.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('File is opened in write mode.');
// });
// fs.open('./main/online/onlineUsers.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('File is opened in write mode.');
// });

const  onlineUsers = [
    {name: 'Kuziv V', age: 43,city: 'Praga'},
    {name: 'Opus Y', age: 21,city: 'I-Fr'},
    {name: 'Gerald', age: 413,city: 'Riviya'},
    {name: 'Nemo', age: 89,city: 'Praga'},
    {name: 'Misha', age: 29,city: 'Lviv'}
]
const  inPersonUsers = [
    {name: 'Leto', age: 43,city: 'Boston'},
    {name: 'Oleg', age: 21,city: 'Hrushka'},
    {name: 'Taras', age: 13,city: 'Rohan'},
    {name: 'Olga', age: 126,city: 'minas Tirit'},
    {name: 'Igor', age: 25,city: 'Isengard'}
]


for (let i = 0; i < inPersonUsers.length; i++) {
    for (const key in inPersonUsers[i]) {
        fs.writeFile(
            path.join(__dirname, "main", "inPerson", `${inPersonUsers[i].name}`),
            `${key}  ${inPersonUsers[i][key]}  \n`,
            {flag: "a"},
            (err) => {
                if (err) {
                    console.log(err)
                }
            }
        )
    }
}
    for (let i = 0; i < onlineUsers.length; i++) {
        for (const key in onlineUsers[i]) {
            fs.writeFile(
                path.join(__dirname, "main", "online",`${onlineUsers[i].name}`),
                `${key}  ${onlineUsers[i][key]}  \n`,
                {flag: "a"},
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }
    // fs.writeFile(
    //     path.join(__dirname,"main","online","onlineUsers.txt"),
    //     `\n`,
    //     {flag :"a"},
    //     (err) => {
    //         if (err){
    //             console.log(err)
    //         }
    //     }
    // )
// function replaceData (file1,file2){
//         let testFile = "./testFile.txt";
//         //Create testFile
//     fs.open(testFile, 'w', function (err, file) {
//         if (err) throw err;
//         console.log('File is opened in write mode.');
//     });
//     // copy from file1 to testFile
//     fs.copyFile(file1, testFile, (error) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//     });
//     // copy from file2 to file1
//     fs.copyFile(file2, file1, (error) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//     });
//     // copy from testFile to file2
//     fs.copyFile(testFile, file2, (error) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//     });
//     //fs.unlinkSync(filePath);
// }
//     replaceData(fileOnline,fileInPersonUsers)