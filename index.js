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
    if (fileName === 'fp.js') return;

    data = data.replace(/\bmodule.exports\b/, 'exports');

    var regRequire = /require\(['"]([./_\w]*)['"]\)/g,
        regAlias = /module\.exports\s*=\s*require\(/;

    var requireName, dependencies = [];

    while ((requireName = regRequire.exec(data)) !== null)
    {
        requireName = requireName[1].slice(2);
        dependencies.push(requireName);

        if (requireName[0] === '_')
        {
            requireName = requireName.slice(1);
            data = data.replace(new RegExp('\\b' + requireName, 'g'), '_' + requireName);
        }
    }

    if (!regAlias.test(data))
    {
        data = data.replace(/.*require\(.*\n/g, '');
    } else
    {
        data = data.replace('require(\'./', '').replace('\')', '');
    }

    if (dependencies.length > 0)
    {
        data = '_(\'' + dependencies.join(' ') + '\');\n\n' + util.trim(data);
    }

    writeFile(fileName, data);
}

function writeFile(fileName, data)
{
    fs.writeFile(path.resolve(__dirname, 'eustia', fileName), data, 'utf8');
}