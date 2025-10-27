const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/books'); 
const app = express();
const PORT = 3000;

// 2. Middleware
app.use(cors());
app.use(express.json()); 

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('Home Page for API');
});

app.use('/api/books', bookRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});