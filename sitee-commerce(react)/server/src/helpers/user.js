import db from "../db.js";
import { hashmotdepasse,comparepassword, createtoken } from "../modules/auth.js"
export const createNewuser=async(req,res)=>{
 
    try {
        if(!req.body || !req.body.name || !req.body.email || !req.body.password){
            res.status(400).json({message:'Oops les donnees ne sont pas completes'})
        }
   const hash=hashmotdepasse(req.body.password.toString());
   const sql = 'INSERT INTO User (`username`,`email`,`password`) VALUES (?)';
   const user = [req.body.name,
  req.body.email,
hash]
  db.query(sql,[user], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
      res.status(500).send('Erreur serveur');
    } else {
      console.log('Utilisateur ajouté avec succès');
      res.status(201).json("Success");
    }
  });


   const token=createtoken(user)
   return(token)
    } catch (error) {
        console.error(error)
        req.status(404).json({message:'erreur'})
    }
}
import util from 'util';

const queryAsync = util.promisify(db.query).bind(db);

export const login = async (req, res) => {
  try {
    const sql = 'SELECT * FROM User WHERE email = ?';
    const results = await queryAsync(sql, [req.body.email]);

    if (results.length > 0) {
      const user = results[0];
      const isvalid = comparepassword(req.body.password, user?.password);

      if (!isvalid) {
        res.status(401).json({ message: 'Mot de passe incorrect' });
        return;
      }

      const token = createtoken(user);
      res.status(200).json({ token });
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  } catch (err) {
    console.error('Erreur lors de la recherche de l\'utilisateur:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
