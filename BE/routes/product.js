import express from 'express';
import { creat, id, list, product, remove, update } from '../controller/product';

const router = express.Router();

router.get("/products", list);
router.get("/product/:id", product);
router.post("/product/:id", creat);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

router.param("id", id);

module.exports = router;