const mysql2 = require('mysql2');
const conexion = mysql2.createConnection({
    host: '3.230.142.118',
    user: 'admin',
    password: 'javier123',
    port:3306,
    database: `Prueba_Integracion`
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: '+ err)
    }
    else{
        console.log('Base de datos conectada correctamente!')
    }
});

module.exports= conexion;