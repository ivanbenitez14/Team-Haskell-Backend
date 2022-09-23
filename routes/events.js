/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validacionJwt');
const { getInfo, guardarInfo, actualizarInfo, eliminarInfo } = require('../controllers/events');




const router = Router();
router.use( validarJWT );



router.get('/', getInfo );

router.post('/', guardarInfo );

router.put('/:id', actualizarInfo );

router.delete('/:id', eliminarInfo );





module.exports = router;