const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Gaming'
    },
    {
        category_name: 'Fitness'
    },
    {
        category_name: 'Beauty'
    },
    {
        category_name: 'Science'
    },
    {
        category_name: 'Music'
    },
    {
        category_name: 'Movies'
    },
    {
        category_name: 'Books'
    },
    {
        category_name: 'Sports'
    },
    {
        category_name: 'Education'
    },
    {
        category_name: 'Politics'
    },
    {
        category_name: 'Food'
    },
];
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;