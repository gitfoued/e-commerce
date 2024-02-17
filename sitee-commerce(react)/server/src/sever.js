import express from "express"
import cors from "cors"
import db from "./db.js";
import * as dotenv from "dotenv"

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createNewuser, login } from "./helpers/user.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {OpenAI } from "openai";
dotenv.config();
const apiKey=process.env.OPENAI_API_KEY;
const client = new OpenAI({ key: apiKey });
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}
));
const currentModulePath = dirname(fileURLToPath(import.meta.url));
const imagePath = join(currentModulePath, '.', 'images');
app.use('/images', express.static(imagePath));
app.post('/chat',async(req,res)=>{
  const { prompt }=req.body;
  const completion=await client.chat.completions.create({
    model:"",
    max_tokens: 512,
    temperature:0,
    prompt:prompt,
  })
  res.send(completion.data.choices[0].text)
})
const imagehome=['image1.jpg','image10.jpg']
app.get('/', (req, res) => {
  console.log("Requête reçue pour /");
  const imageUrls = imagehome.map(file => `images/${file}`);
  console.log("Envoi des URLs d'images :", imageUrls);
  res.json(imageUrls);
})
app.get('/produits/:id', (req, res) => {
    const produitId = req.params.id;
  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM produits WHERE id = ?`;
  
    // Exécution de la requête avec le produitId comme paramètre
    db.query(sql, [produitId], (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifier si le produit a été trouvé
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
  
      // Récupération du premier résultat (supposant que l'ID est unique)
      const produit = results[0];
  
      // Envoi des données du produit au client
      res.json(produit);
    });
  });
  

  app.get('/Men', (req, res) => {
   
  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM produit WHERE type='Men'`;
  
    // Exécution de la requête avec le produitId comme paramètre
    db.query(sql,  (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifier si le produit a été trouvé
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
  
      // Récupération du premier résultat (supposant que l'ID est unique)
      
      const dataArray = Array.isArray(results) ? results : [results];
  
      // Envoi des données du produit au client
      res.json(dataArray);
      
    });
  });
  app.get('/Women', (req, res) => {

  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM produit WHERE type = 'Women'`;
  
    // Exécution de la requête avec le produitId comme paramètre
    db.query(sql, (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifier si le produit a été trouvé
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
  
      // Récupération du premier résultat (supposant que l'ID est unique)
      const produit = results[0];
      const dataArray = Array.isArray(results) ? results : [results];
  
      // Envoi des données du produit au client
      res.json(dataArray);
    });
  });
  app.get('/home', (req, res) => {

  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM produit `;
  
    // Exécution de la requête avec le produitId comme paramètre
    db.query(sql, (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifier si le produit a été trouvé
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
  
      // Récupération du premier résultat (supposant que l'ID est unique)
      const dataArray = Array.isArray(results) ? results : [results];
  
      // Envoi des données du produit au client
      res.json(dataArray);
    });
  });
  app.get('/piece', (req, res) => {

  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM produit WHERE idProduit=''`;
  
    // Exécution de la requête avec le produitId comme paramètre
    db.query(sql, (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifier si le produit a été trouvé
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
  
      // Récupération du premier résultat (supposant que l'ID est unique)
      const produit = results[0];
      const dataArray = Array.isArray(results) ? results : [results];
  
      // Envoi des données du produit au client
      res.json(dataArray);
    });
  });
  app.get('/Blog', (req, res) => {
    
  
    // Requête SQL pour récupérer les détails du produit
    const sql = `SELECT * FROM blog `;
  
    
    db.query(sql, (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
        return;
      }
      const dataArray = Array.isArray(results) ? results : [results];
  
      // Envoi des données du produit au client
      res.json(dataArray);
    });
  });
  
  
  


app.post('/Login',login)
app.post('/Signup',createNewuser)
app.use(cookieParser());
export default app;