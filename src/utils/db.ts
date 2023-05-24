import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config.js';
import Heroes from '../models/super_hero';

const { DB_URL = '' } = process.env;

export const initDb = async () => {
  const sequelize = new Sequelize(DB_URL, {
    models: [Heroes],
    dialectOptions: {
      ssl: true,
    },
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  return sequelize;
};
