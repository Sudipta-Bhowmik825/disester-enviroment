import { Router } from "express";
import {dashboard,users,error,person} from '../controllers/main.controller.js'
const router = Router();

router.get("/",dashboard)
router.get("/users",users)
router.get("/e",error)
router.get("/person",person)

export default router;