const express = require('express');
const connectDB = require('../config/db');
const router = express.Router();

const aboutRoutes = require('./about.routes');
const projectRoutes = require('./project.routes');
const skillsRoutes = require('./skills.routes');
const skillsCategoryRoutes = require('./skillsCategory.routes');

router.use('/about', aboutRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillsRoutes);
router.use('/skills-category', skillsCategoryRoutes);

module.exports = router;