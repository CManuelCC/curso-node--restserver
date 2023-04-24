
const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {

  const {name="no hay nombre", edad, id} = req.query;

    res.json({
        msg: 'get Api - controlador',
        name,
        edad,
        id
    });
  }

  const usuariosPost = (req, res = response) => {

    const {name,edad} = req.body;
    res.json({
        msg: 'Post Api - controlador- sapos como estamos ',
        name,
        edad
    });
  }

  const usuariosPut = (req, res = response) => {

    const {id} = req.params.id;
    res.json({
        msg: 'Put Api - controlador- ',
        id
    });
  }



  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api - controlador'
    });
  }

  const usuariosPatch= (req, res = response) => {
    res.json({
        msg: 'patch Api - controlador'
    });
  }







module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
   
}

