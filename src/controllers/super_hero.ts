'use strict';

import HeroServices from '../services/super_hero';
import { Request, Response } from 'express';

const getAll = async(req: Request, res: Response) => {
  const heroes = await HeroServices.getAll();

  res.send(heroes);
};

const getOne = async(req: Request, res: Response) => {
  const heroId = +req.params.heroId;

  if (!heroId) {
    res.sendStatus(400);

    return;
  }

  const foundHero = await HeroServices.getHeroById(heroId);

  if (!foundHero) {
    res.sendStatus(404);

    return;
  }

  res.send(foundHero);
};

const addHero = async(req: Request, res: Response) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;

  if (!nickname || !real_name || !origin_description || !superpowers || !catch_phrase || !images) {
    res.sendStatus(400);

    return;
  }

  const newHero = await HeroServices.addHero(req.body);

  res.status(201);
  res.send(newHero);
};

const removeHero = async(req: Request, res: Response) => {
  const heroId = +req.params.heroId;
  const foundHero = await HeroServices.getHeroById(heroId);

  if (!foundHero) {
    res.sendStatus(404);

    return;
  }

  await HeroServices.removeHero(foundHero.id);

  res.sendStatus(204);
};

const updateHero = async(req: Request, res: Response) => {
  const heroId = +req.params.heroId;

  if (!heroId) {
    res.sendStatus(400);

    return;
  }

  const foundHero = await HeroServices.getHeroById(heroId);

  if (!foundHero) {
    res.sendStatus(404);

    return;
  }

  // const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;
  // const isCorrectValue = Object.values(req.body).every(x => typeof x === 'string' && x.length > 0);

  // if (!isCorrectValue) {
  //   res.sendStatus(422);

  //   return;
  // }

  const updatedHero = await HeroServices.updateHero(heroId, req.body);

  res.send(updatedHero);
};

export default {
  getAll,
  getOne,
  addHero,
  removeHero,
  updateHero,
};
