import  express from 'express';
import cors from "cors";
import { getRate } from "./controllers/rate.js";
const app = express();
const port = 8080;

app.use(cors());
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(
//   express.urlencoded({
//     limit: "30mb",
//     extended: true,
//   })
// );

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/rates/:id', getRate);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});