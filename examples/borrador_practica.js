const fs = require('fs')

let command = process.argv[2]
let path = process.argv[3]

//  ./web_estatico/global

let fileName = path.split('/')[2]
let pathProject = path.split('/')[0] + '/' + path.split('/')[1]

switch (command) {
    case 'init':
        // crear proyecto
        // crear archivo html
        fs.mkdir(path, (err) => {
            if (err) throw err
            fs.writeFile(`${path}/index.html`, '<h1> Hola </h1>', (err) => {
                if (err) throw err
                console.log("Archivo creado correctamente")
            })
            fs.mkdir(`${path}/js`, (err) => {
                if (err) throw err
                console.log("Carpeta JS creada");
            })
            fs.mkdir(`${path}/css`, (err) => {
                if (err) throw err
                console.log("Carpeta CSS creada");
            })
        })
        break;
    case 'html':
        // crear archivo html
        fs.writeFile(`${path}.html`, '<h1> Hola </h1>', (err) => {
            if (err) throw err
            console.log("Archivo creado correctamente")
        })
        break;

    case 'css':
        // crear archivo css
        fs.writeFile(`${pathProject}/css/${fileName}.css`, '', (err) => {
            if (err) throw err
            console.log("Archivo creado correctamente")
        })
        break;

    case 'js':
        // crear archivo js
        fs.writeFile(`${pathProject}/js/${fileName}.js`, '', (err) => {
            if (err) throw err
            console.log("Archivo creado correctamente")
        })
        break;

    default:
        break;
}