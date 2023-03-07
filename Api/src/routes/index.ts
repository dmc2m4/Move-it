const { Router } = require("express");
const router = Router();


// Importar todos los routers;
const userRouter = require("./userRouter.ts");


// Configurar los routers
router.use("/user", userRouter);

module.exports = router;