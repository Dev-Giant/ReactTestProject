const getRate = require('./controllers/rate');
const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Hello World!')
});

const router = express.Router();

router.get("/:id", getRate);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});