const { MongoClient: client } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:3000/Ebytr';

const DB_NAME = 'Ebytr';
let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : client.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;