const express = require('express');
const router = express.Router();
const SkillsCategory = require('../models/skillscategory');

router.post('/', async (req, res) => {
    const myCategory = await SkillsCategory.create(req.body);
    res.status(201).json(myCategory);
});

router.get('/', async (req, res) => {
    const myCategories = await SkillsCategory.find();
    res.json({ message: 'skills category data', data: myCategories });
});

router.put('/:id', async (req, res) => {
    const { name } = req.body;
    const myCategory = await SkillsCategory.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.json({ message: 'skills category updated', data: myCategory });
});

router.delete('/:id', async (req, res) => {
    const myCategory = await SkillsCategory.findByIdAndDelete(req.params.id);
    res.json({ message: 'skills category deleted', data: myCategory });
});

module.exports = router;