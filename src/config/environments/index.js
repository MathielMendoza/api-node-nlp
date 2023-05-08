import 'dotenv/config'

import PRODUCTION from './production.js'
import DEVELOPMENT from './development.js'
import QA from './qa.js'

const {NODE_ENV} = process.env;

let currentEnV = DEVELOPMENT;

(NODE_ENV === 'production')
    ? currentEnV = PRODUCTION
    : (NODE_ENV === 'development')
        ? currentEnV = DEVELOPMENT
        : currentEnV = QA;

export default currentEnV;