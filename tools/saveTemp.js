const fs = require('fs');

function saveTemp(arr) {
    const jsonified = JSON.stringify(arr, null, 4);

    fs.writeFileSync('ast-temp.json', jsonified, 'utf8', null);
}

module.exports = saveTemp;