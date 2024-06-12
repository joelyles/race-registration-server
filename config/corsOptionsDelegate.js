const allowList = require('./allowList');

// CORS attemp by using CORS docs on expressjs.com

/* const corsOptionsDelegate = (origin, callback) =>  {
  let corsOptions;
  if (allowList.indexOf(origin) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
} */

// CORS configured below by using node.js-course-server repo which was created through Dave Gray's node course

const corsOptionsDelegate = {
  origin: (origin, callback) => {
    if (allowList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('CORS - not allowed'));
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptionsDelegate
