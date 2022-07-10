const router = require('express').Router()
const conexion = require('./config/conexion')


//get registro
router.get('/',(req, res)=>{

    let sql ='select * from RESTAURANTE'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get producto
router.get('/menu',(req, res)=>{

    let sql ='select * from PRODUCTO'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//get un registro
router.get('/:id',(req, res)=>{
    const {id}= req.params
    let sql ='select * from RESTAURANTE where idRestaurante = ? '
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//agregar usuario
router.post('/',(req, res)=>{
    const{Correo, Telefono, Direccion, Nombre_Negocio, Nombre_client, Apellido_client, Contrasena, Tipo_empresa} = req.body

    let sql = `insert into RESTAURANTE(Correo, Telefono, Direccion, Nombre_Negocio, Nombre_client, Apellido_client, Contrasena, Tipo_empresa) values('${Correo}','${Telefono}','${Direccion}','${Nombre_Negocio}','${Nombre_client}','${Apellido_client}','${Contrasena}','${Tipo_empresa}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario registrado'})
        }
    })

});

//agregar producto
router.post('/agregarproducto',(req, res)=>{
    const{Nom_prod, Precio, Stock, Imagen, Restaurante_idRestaurante, Categoria} = req.body

    let sql = `insert into PRODUCTO(Nom_prod, Precio, Stock, Imagen, Restaurante_idRestaurante, Categoria) values('${Nom_prod}','${Precio}','${Stock}','${Imagen}','${Restaurante_idRestaurante}','${Categoria}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto Registrado'})
        }
    })

});


//IniciarSesion
router.post('/login',(req, res)=>{
    const{Correo}=req.body
    let sql = `select Correo, Contrasena FROM RESTAURANTE where Correo ="${Correo}" `
    conexion.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })

});


// Eliminar Producto
router.delete('/:id',(req, res)=>{
    const{id}=req.params

    let sql =`delete from PRODUCTO where idProducto ='${id}' `
    conexion.query(sql, (err, rows, fields)=>{
       if(err) throw err
       else{
           res.json({status: 'Producto Eliminado'})
       }
   })
});

//Modificar Usuario
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{Correo, Telefono, Direccion, Nombre_Negocio, Nombre_client, Apellido_client, Contrasena, Tipo_empresa}= req.body

    let sql =`update RESTAURANTE set
                  Correo='${Correo}',
                  Telefono='${Telefono}',
                  Direccion='${Direccion}',
                  Nombre_Negocio='${Nombre_Negocio}',
                  Nombre_client='${Nombre_client}',
                  Apellido_client='${Apellido_client}',
                  Contrasena='${Contrasena}',
                  Tipo_empresa='${Tipo_empresa}'
                  where idRestaurante = '${id}'`

     conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Restaurante modificado'})
        }
    })
})
module.exports= router