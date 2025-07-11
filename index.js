const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const urlRoutes = require('./routes/urlRoutes');
dotenv.config();
// return sequelize.sync({ force: true });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

app.use('/', urlRoutes);
sequelize.authenticate().then(()=> {
    console.log("PostgresQl connected");
    return sequelize.sync();
})
.then(()=> {
    console.log("Models synced");
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.log('Connection failed', err);
  });
  

// app.listen(PORT,()=>{
//     console.log("server running");
// });