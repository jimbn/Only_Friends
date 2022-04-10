const exphbs = require('express-handlebars');

exphbs.registerHelper('loud', function (astring) {
    return astring.toUpperCase()
})