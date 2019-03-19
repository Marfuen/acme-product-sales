const app = require("./server/api/app");
const port = process.env.PORT || 3000;
const path = require('path');
const { syncAndSeed } = require("./server/db/index");

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));


syncAndSeed(true)
  .then(() => {
    app.listen(port, ()=> console.log(`listening on port ${port}`))
  })

