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
export const login=async(req,res)=>{
    const sql = 'SELECT * FROM User WHERE  email= ?';
    db.query(sql, [req.body.email], (err, result) => {
      
        if (err) {
          console.error('Erreur lors de la recherche de l\'utilisateur:', err);
          res.status(500).send('Erreur serveur');


        } else {
          if (result.length > 0) {
          
            const user=result[0];
            const isvalid=comparepassword(req.body.password, user?.password)
            if(!isvalid){
            res.status(401)
            res.send('nope')
            return
            }
            res.status(200)
            const token=createtoken(user)
res.cookie('token',token)
res.json("Success")
          } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
          }
        }
      });
  

}