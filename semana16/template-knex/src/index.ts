import express from "express";
import cors from "cors";
// import { AddressInfo } from "net";
import { connection } from "./connection";
import {Request, Response} from "express"

const app = express();

app.use(express.json());
app.use(cors())

app.get("/",async (req, res) => { 
   const result = await connection.raw ('SHOW TABLES')
   console.log(result)
    return res.send("Hello from Express!") 
})

app.post("/users", async(req, res )=>{
   try {
      await(connection.raw(`
      INSERT INTO Actor (name, salary, birth_date,gender)
      VALUES(
         "${req.body.name}",
         "${req.body.salary}",
         "${req.body.birthDate}",
         "${req.body.gender}",
      )
      `)

      )
   }
})

   
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
