const router = require('express').Router();
const Ride = require('../models/Ride');

router.post('/create', async (req, res) => {
    try {
        const ride = new Ride(req.body);
        await ride.save();

        res.status(201).json({ message: 'Ride Created' });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const rides = await Ride.find();
        res.json(rides);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
