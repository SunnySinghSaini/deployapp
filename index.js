import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Define __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {

  //Program to calculate the no. of characters in User name 
   //in future i will complete it...
  

  // Program to calculate the no. of characters in User name End here.
  
  res.send('<div> <h1>This home page is developed by Sunny !!!</h1> <button> <a href="https://sunny-app.onrender.com/youtube">Youtube </a> </button><br> <br> </div> <div> <button> <a href="https://sunny-app.onrender.com/login">Login </a> </button> </div>');
});

app.get('/login', (req, res) => {
  res.send('<div> <h2> Please Login here for more details...</h2> <button> <a href="https://sunny-app.onrender.com">Home </a> </button></div>');
});

app.get('/youtube', (req, res) => {
  res.send('<div> <h2> Watch and download youtube videos here for free </h2><button> <a href="https://sunny-app.onrender.com">Home </a> </button></div>');
});

app.get('/github', (req, res) => {
  res.json(getGithubData);
});

// Serve the portfolio.html file
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
