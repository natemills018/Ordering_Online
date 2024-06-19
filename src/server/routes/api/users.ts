import { Router } from 'express';
import db from '../../db';

const router = Router();


// here's where I need to write my GET, POST, PUT, AND DELETE REQUEST, that I want to respond 


router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [user] = await db.users.getOne(id);


        if(!user) {
            return res.status(404).json({ message: 
                'No users found at this id'
            })
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})


router.get('/', async (req, res) => {
    try {
        const author = await db.users.getAll();
        res.json(author);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;