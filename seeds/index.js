// importing seed functions from their respective files 
const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
// importing sequelize 
const sequelize = require('sequelize');

const seedAll = async () =>{
    await sequelize.sync({force:true});
    console.log('....DATABASE SYNCED....');
    // place seed functions here in order of what is needed to be created first,
    //  in order to have the next aka comments would be after post, bc u need posts for comments to occur
    process.exit(0);
};
// invoke function to seedall and sync the database
seedAll();