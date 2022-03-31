// importing post table/model from models folder 
const { Post } = require('../models');
// creating variable, an array ,  to store user seeds 
const postData = [
{
    title: 'Hello World 1',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 6, 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 2',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 4, 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 3',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 2, 
    user_id: 0,
    // channel_id: 0
},
{
    title: 'Hello World 4',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 1, 
    user_id: 0,
    // channel_id: 0
},
{
    title: 'Hello World 5',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 3, 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 6',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 9, 
    user_id: 3,
    // channel_id: 3
},
{
    title: 'Hello World 7',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 1, 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 8',
    preview:  'alsdhflakjshf;lasjdf;laskjfl; lasjf;laksjdf aserlkjafdda;lksdjf asfdlkjasdf alskdjf asdf;lkjasdf ',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_id: 4, 
    user_id: 2,
    // channel_id: 2
},
];
// function to import seeds into the db upon command 'npm run seed'
const seedPosts = () => Post.bulkCreate(postData);
// exporting the function that creates and inserts the seeds into db 
module.exports = seedPosts;