var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        favoriteColor: 'Color',
        message: 'What is your favorite color?'
    }
]).then(function(data) {
    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
            return console.log(err);
        }
        console.log("success!");
    });
});


