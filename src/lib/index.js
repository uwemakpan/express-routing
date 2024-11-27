const dotenv = require('dotenv')
dotenv.config()

// obtains evnironment variables as objects
const environmentVariables = { PORT: process.env.PORT }

// export the object
module.exports = environmentVariables
