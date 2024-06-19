import { Router } from 'express';
import db from '../../db';

const router = Router();


router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [order] = await db.orders.getOne(id);


        if(!order) {
            return res.status(404).json({ message: 
                'No orders found at this id'
            })
        }

        res.json(order);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;