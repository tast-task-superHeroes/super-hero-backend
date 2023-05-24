'use strict';

import express from 'express';
import heroController from '../controllers/super_hero'

export const router = express.Router();

router.get('/', heroController.getAll);

router.get('/:heroId', heroController.getOne);

router.post('/', heroController.addHero);

router.delete('/:heroId', heroController.removeHero);

router.patch('/:heroId', heroController.updateHero);

