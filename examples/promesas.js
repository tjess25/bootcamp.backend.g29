const { log } = require('console')
const fs = require('fs')

let example = new Promise((resolve, reject) => {
    fs.readFile('./practicaFileSystem.json', 'utf-8', (err, data) => {
        if (false) reject("Mensaje de error en promesa")
        resolve(data)
    })
})

/*setTimeout(() => {
    console.log(example);
}, 1000);*/


/*example.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}).finally( () => {
    console.log("Esto siempre se ejecuta");
})*/

async function getData() {
    return ['data1', 'data2', 'data3']
}

function name() {
    async function example(params) {
        let result = await getData()
        if (!result) {
            console.log("se genero un error");
        }
        console.log(result);
    }
    example() 
}
name()



