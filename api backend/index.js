'use strict'

const mongoose = require ('mongoose')
const app = require('./app')



const conectarDB = require('./config/db');

conectarDB();






const port = process.env.PORT || 3001



app.listen(port,'0.0.0.0',()=>
     console.log(`El servidor esta funcionando en el puerto ${port}`)
);


// app.listen(port,() => {
//     console.log(`API REST corriendo en http://localhost:${port}`)
// })

/*mongoose.connect('mongodb:localhost:270717/shop', (err,res)=>{
    if(err) {
        return console.log(`error al conectar a la base de datos: ${err}`)
    }
    console.log('conexion a la base de datos establecida...')

   
})

*/