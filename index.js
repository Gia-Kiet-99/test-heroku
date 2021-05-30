const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json({
    message: 'Hello from gia kiet'
  });
})

app.get('/user', (req, res, next) => {
  res.json({
    name: "Dinh Gia Kiet",
    age: 22,
    gender: "Male"
  })
})

app.use(function (req, res, next) {
  res.status(404).json({
    error_message: "Endpoint not found!"
  });
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({ error_message: "Something broke!" })
})

app.listen(3000, () => {
  console.log("api server is running at port 3000");
})