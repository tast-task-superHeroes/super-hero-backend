'use strict';

import Heroes from '../models/super_hero';
import { Hero } from '../types/hero';

const getAll = () => {
  return Heroes.findAll({
    order: [
      ['id', 'ASC'],
    ],
  });
};

const getHeroById = (heroId: number) => {
  return Heroes.findByPk(heroId);
};

const addHero = (body: Hero) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = body;

  return Heroes.create({ nickname, real_name, origin_description, superpowers, catch_phrase, images });
};

const removeHero = (heroId: number) => {
  Heroes.destroy({
    where: {
      id: heroId,
    },
  });
}; 

const updateHero = async(heroId: number, body: Partial<Hero>) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = body;
  console.log(superpowers);
  

  const superHero = await getHeroById(heroId);
  let newSuperpowers = superpowers;
  let newImages = images;

  if (images?.length) {
    superHero?.images.push(images[0]);

    newImages = superHero?.images;
  }

  if (superpowers?.length) {
    superHero?.superpowers.push(superpowers[0]);

    newSuperpowers = superHero?.superpowers;
  }

  console.log(newSuperpowers);
  
  return Heroes.update({ nickname, real_name, origin_description, superpowers: newSuperpowers, catch_phrase, images: newImages }, {
    where: {
      id: heroId,
    },
  });
};

export default {
  getAll,
  getHeroById,
  addHero,
  removeHero,
  updateHero,
}
