import express, { Router } from "express";
import {getUsers} from "../Controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);


export default router;