import { Router } from 'express';
import { Request, Response } from 'express';
const {
    newUser,
    getAllUsers,
    findUserByEmail,
    updateUser,
    deleteUser
} = require('../controllers/userController')

const userRoutes = Router();

userRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (error: unknown) {
        const { message } = error as { message: string };
        res.status(400).send(message);
    }
});


export default userRoutes;