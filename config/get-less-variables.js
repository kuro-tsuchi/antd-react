const fs = require('fs');
module.exports = function getLessVariables(file) {
    let themeContent = fs.readFileSync(file, 'utf-8');
    let variables = {};

    themeContent.split('\n').forEach(function(item) {
        if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
            return;
        }
        
        let _pair = item.split(':');
        if (_pair.length < 2) return;

        let key = _pair[0].replace('\r', '').replace('@', '');
        if (!key) return;

        let value = _pair[1].replace(';', '').replace('\r', '').replace(/^\s+|\s+$/g, '')
        variables[key] = value;
    });

    return variables;
}
