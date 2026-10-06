const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const upload = require("../middlewares/upload.middleware");

// POST route to create a new project entry
router.post('/', upload.single('imageUrl'), async (req, res) => {
    const { name, category, liveUrl } = req.body;

    const myproject = await Project.create({
        name,
        category,
        liveUrl,
        imageUrl: '/uploads/' + req.file.filename
    });

    res.status(201).json({ message: 'Project created successfully', data: myproject });
});


//GET route to fetch all project entries
router.get('/', async (req,res)=>{
    const myproject = await Project.find();
    res.status(200).json({message: 'Projects fetched successfully', data: myproject});
})

router.get('/:id', async (req, res) => {
    try {
        const myproject = await Project.findById(req.params.id);
        if (!myproject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project fetched successfully', data: myproject });
    } catch (err) {
        res.status(400).json({ message: 'Invalid project ID' });
    }
})

// PUT route to update an existing project entry by ID
router.put('/:id', async (req,res)=>{
    const myproject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({message: 'Project updated successfully', data: myproject});
})

// DELETE route to remove a project entry by ID
router.delete('/:id', async (req,res)=>{
    const myproject = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted successfully', data: myproject });
})

module.exports = router;