const mongoose = require("mongoose")

module.exports = {
    connect: async() => {
       let conection =  await mongoose.connect('mongodb+srv://newjess25:Weqf3KZ5CEQuThZM@cluster0.pnbezmh.mongodb.net/practica');
       if (conection) console.log("DB Connected");
    },
    disconnect: (done) => {
        mongoose.disconnect(done)
    }
}