import mysql from "mysql"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mohamed27562068',
    database: 'ecommerce-site'
  });
  
  // Établissement de la connexion à la base de données
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err);
    } else {
      console.log('Connexion à la base de données établie');
    }
  });
  export default db;