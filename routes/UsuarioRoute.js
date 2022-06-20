const express = require('express');
const router = express.Router();
const usuarioController = require("../controller/UsuarioController");

router.get('/add', usuarioController.opadd);
router.post('/add', usuarioController.add);

router.get('/lst', usuarioController.lst);
router.post('/lst', usuarioController.filter);

router.get('/edt', usuarioController.opedt);
router.post('/edt', usuarioController.edt);

router.get('/del', usuarioController.del);

module.exports = router;