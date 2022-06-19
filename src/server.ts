import express from "express";
import { sum } from "./functions/sum";
const app = express(); // create express app

app.use(express.json()); // parse JSON bodies (as sent by API clients)

app.get("/", (req, res) => {
  res.json({message: "Itinerario 2022 Enrico Marques"});
});

app.get("/sum/:a/:b", (req, res) => {


    let a = req.params.a
    let b = req.params.b
    const a_number = parseInt(a);
    const b_number = parseInt(b);
  if (isNaN(a_number) || isNaN(b_number)) {
    return res.status(400).json({ error: "Invalid parameters" });
  }

   const response_sum =  sum(a_number, b_number);
    res.json({
      a: a,
      b: b,
      sum: response_sum
    });


})

app.listen(3333, () => {
  console.log("Server started on port 3333");
});


