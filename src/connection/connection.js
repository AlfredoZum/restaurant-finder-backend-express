const mongoose = require('mongoose');
// colocamos la url de conexión local y el nombre de la base de datos
/* mongoose.connect('mongodb://localhost:27017/restaurant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
// enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected'); // si esta todo ok, imprime esto
}); */

module.exports = async () => {
  let db = null;
  try {
    await mongoose.connect('mongodb://localhost:27017/restaurant_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = mongoose.connection;

    // eslint-disable-next-line no-console
    db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
    db.once('open', () => {
      // eslint-disable-next-line no-console
      console.log('connected'); // si esta todo ok, imprime esto
    });

    return db;
  } catch (err) {
    // eslint-disable-next-line no-unused-expressions
    (db) && db.close();
    // eslint-disable-next-line no-console
    console.log('Error at dbConnect ::', err);
    throw err;
  }
};
