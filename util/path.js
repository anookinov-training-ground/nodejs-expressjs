const path = require('path');

// module.exprts = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
