const express = require('express');
const router = express.Router();
const About = require('../models/about');

// POST route to create a new about entry
router.post('/', async (req,res)=>{
    const myabout = await About.create(req.body);
    res.status(201).json(myabout);
});

// GET route to fetch all about entries
router.get('/', async (req,res)=>{
    const myabout = await About.find();
    res.status(200).json(myabout);
});

// PUT route to update an existing about entry by ID
router.put('/:id', async (req,res)=>{
    const myabout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(myabout);
});

// DELETE route to remove an about entry by ID
router.delete('/:id', async (req,res)=>{
    const myabout = await About.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'about deleted', data: myabout });
});

module.exports = router;