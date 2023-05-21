const express = require("express");
const components = require("../controller/component.js")

const router = express.Router();

router.get('/components', components.index);
router.get('/components/:component_id', components.showDetail);
router.post('/components', components.store);
router.put('/components/:component_id', components.update);
router.delete('/components/:component_id', components.destroy);

module.exports = router;