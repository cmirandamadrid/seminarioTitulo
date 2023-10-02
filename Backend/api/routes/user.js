const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/', (req,res)=>{
    mysqlConnection.query('select * from examen.usuario', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.post('/singin', (req,res) => {
    const {username,password,perfil} = req.body;
    mysqlConnection.query('select username,password from examen.usuario where username=? and password =? and perfil =?',
    [username,password,perfil],
    (err,rows,fields) => {
        if(!err){
            if(rows.length >0){
                let data = JSON.stringify(rows[0]);
                const encrip = jwt.sign(data, 'clave');
                res.json({encrip});
            }else{
                res.json('Usuario o contraseña son incorrectos....');
            }
        }else{
            console.log(err);
        }
    })
})

router.post('/test',verificaEncrip,  (req,res) =>{
    res.json('Informacion secreta');
})

function verificaEncrip (req, res, next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');

    const encrip = req.headers.authorization.substr(7);
    if(encrip!==''){
        const content =jwt.verify(encrip,'clave');
        req.data = content;
        next();
    }else{
        res.status(401).json('Encriptacion vacía');
    }
}

router.get('/ayudas/construccion', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Construccion"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/terceraEdad', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Tercera Edad"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/comidas', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Comidas"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/deportes', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Deportes"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/reciclaje', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Reciclaje"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/jardines', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Jardines"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/viajes', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Viajes"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/ayudas/otros', (req,res)=>{
    mysqlConnection.query('select a.nombre, a.descripcion, c.nombre as nombreCategoria, a.estado, a.fecha from ayudas a, categoria c where c.idCategoria = a.idCategoria and a.estado = "Activo" and c.nombre = "Otros"', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.post('/insert/mensaje', (req,res)=>{
   const {titulo,descripcion} = req.body;
    mysqlConnection.query('INSERT INTO examen.mensaje (titulo, descripcion) VALUES ( ?, ?)', [titulo,descripcion],
    (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});
router.post('/insert/Informacion', (req,res)=>{
    const {titulo,descripcion} = req.body;
     mysqlConnection.query('INSERT INTO examen.informacion (titulo, descripcion) VALUES ( ?, ?)', [titulo,descripcion],
     (err,rows,fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
 });

 router.post('/insert/Ayudas', (req,res)=>{
    const {nombre, descripcion, idCategoria, cantidad, estado, fecha} = req.body;
     mysqlConnection.query('INSERT INTO examen.ayudas (nombre, descripcion, idCategoria, cantidad, estado, fecha) VALUES ( ?, ?, ?, ?, ?, ?)', [nombre, descripcion, idCategoria, cantidad, estado, fecha],
     (err,rows,fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
 });

 router.get('/consulta/mensaje', (req,res)=>{
    mysqlConnection.query('select descripcion from informacion where idinformacion = (select last_insert_id())', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});


module.exports = router;