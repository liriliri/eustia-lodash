var glob = require('glob'),
    path = require('path'),
    fs = require('fs');

var util = require('./util');

glob('node_modules/lodash/*.js', {}, function (err, files)
{
    if (err) return console.log(err);

    start(files);
});

function start(files)
{
    util.each(files, function (file)
    {
        fs.readFile(file, 'utf-8', function (err, data)
        {
            if (err) return console.log(err);

            processFile(path.basename(file), data);
        });
    });
}

function processFile(fileName, data)
{
    var modName = fileName.slice(0, -3);

    var regRequire = /require\(['"]([./_\w]*)['"]\)/;

    var requireName;

    while ((requireName = regRequire.exec(data)) !== null)
    {
        var msg = 'Found ' + myArray[0] + '. ';
        msg += 'Next match starts at ' + myRe.lastIndex;
        console.log(msg);
    }

    var requires = data.match(g);

    console.log(requires);

    data = data.replace(/\bmodule.exports\b/, modName);

    writeFile(fileName, data);
}

function writeFile(fileName, data)
{
    fs.writeFile(path.resolve(__dirname, 'eustia', fileName), data, 'utf8');
}