const mongoose = require("mongoose")
const URI = process.env.URI

module.exports = {
    connect: async() => {
       let conection =  await mongoose.connect(URI);
       if (conection) console.log("DB Connected");
    },
    disconnect: (done) => {
        mongoose.disconnect(done)
    }
}