// moment package we have to download from npm

const moment = require('moment');
console.log("current date and time is:" , moment().format('YYYY-MM-DD HH:mm:ss'));

// lodash package we have to download from npm

const lodash = require('lodash');
const arr = [1, 2, 3, 4, 5 ,5 ,4 ,2];
console.log("Unique array is:", lodash.uniq(arr));

