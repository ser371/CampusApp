require('dotenv').config(); 
const app = require('./app');
const PORT = process.env.PORT;

console.log("faf",PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`api documentaion aailable at http://localhost:${PORT}/api-docs`);
});