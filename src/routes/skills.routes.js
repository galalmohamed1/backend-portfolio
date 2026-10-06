const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');
const upload = require('../middlewares/upload.middleware');

// POST 
router.post('/', upload.single('image'), async (req, res) => {
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const mySkill = await Skill.create({ ...req.body, image });
    res.status(201).json(mySkill);
});


router.get('/', async (req, res) => {
    const mySkills = await Skill.find().populate('category');
    res.json({ message: 'skill data', data: mySkills });
});

router.put('/:id', upload.single('image'), async (req, res) => {
    const { title, category } = req.body;
    const updateData = { title, category };

    if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
    }

    const mySkill = await Skill.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ message: 'skill data updated', data: mySkill });
});

router.delete('/:id', async (req, res) => {
    const mySkill = await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'skill deleted', data: mySkill });
});

module.exports = router;