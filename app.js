const express = require('express');
const multer = require('./moddleware/multer');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');

app.use(express.static(__dirname));
app.use(multer.single('avatar'));

app.get('/', (req, res) => {
  res.render('index')
});

app.post('/profile', (req, res) => {
  const {name, age} = req.body;
  let file = req.file
  console.log(file);
  if(!file) {
    res.send("Ошибка при загрузке файла");
  } else {
    res.render('profile', {
      path: file.path,
      filename: file.filename,
      name, age
    })
  }
    
});

app.listen(PORT, () => console.log("Port..."))