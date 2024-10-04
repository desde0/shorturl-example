// Importamos el módulo de sqlite3
// La función verbose permite que los posibles errores sean mucho más claros
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/file.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
db.run(`CREATE TABLE Personas(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT
);
`);
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
