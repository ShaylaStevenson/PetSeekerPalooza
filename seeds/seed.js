const sequelize = require('../config/connection');


const seedPet = require('./pet-seeds');
const seedUser = require('./user-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPet();
  console.log('\n----- PETS SEEDED -----\n');

  await seedComments();
  console.log('\n-------- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();