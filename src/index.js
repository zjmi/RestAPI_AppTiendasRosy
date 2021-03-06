import 'dotenv/config';

import "@babel/polyfill";
import app from './app';

require('./database/databaseNoSql');

async function main() {
    await app.listen(process.env.PORT);
    console.log('RestAPI APP Rosy')
    console.log(`Server on port ${process.env.PORT}`);
}

main();