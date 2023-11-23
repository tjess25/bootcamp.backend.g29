const fs = require('fs')

/*fs.writeFile('./test.txt', '<h1> Hola </h1>', (err) => {
    if (err) throw err
    console.log("Archivo creado correctamente")
})*/

/*fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})*/

/*fs.appendFile('./test.txt', ' append', (err) => {
    if (err) throw err
    console.log("Archivo modificado correctamente")
    fs.readFile('./test.txt', 'utf-8', (err, data) => {
        if (err) throw err
        console.log(data)
    })
})*/

/*fs.unlink('./test.txt', (err) => {
    if (err) throw err
    console.log("Archivo eliminado correctamente") 
})*/

// Carpetas

fs.mkdir('./newFolder', (err) => {
    if (err) throw err
    console.log("Carpeta creada correctamente") 
    fs.writeFile('./newFolder/test.txt', 'Hola Koders!', (err) => {
        if (err) throw err
        console.log("Archivo creado correctamente")
        fs.readdir('./newFolder', {withFileTypes: false}, (err, files) => {
            if (err) throw err
            files.forEach(f => {
                console.log(f)
            });
        })
    })
})

/*fs.rmdir('./newFolder', {recursive: false}, (err) => {
    if (err) throw err
    console.log("Carpeta eliminada correctamente") 
})*/

/*fs.readdir('./newFolder', {withFileTypes: false}, (err, files) => {
    if (err) throw err
    files.forEach(f => {
        console.log(f)
    });
})*/
