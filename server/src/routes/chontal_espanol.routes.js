import { Router } from "express";
import {getChontal_espanol} from "../controllers/chontal_espanol.controllers.js";

const router = Router();

router.get("/Chontal_espanol", getChontal_espanol);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
