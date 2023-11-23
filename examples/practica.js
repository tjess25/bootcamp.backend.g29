const fs = require('fs')

let path = process.argv[2]

fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    data = JSON.parse(data)
    console.log(data)
    //data['data'] = true
    data.read = false
    console.log(JSON.stringify(data))
   fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) throw err
        console.log("Archivo guardado correctamente")
    })
})