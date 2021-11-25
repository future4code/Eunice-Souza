
import cors from "cors"
import express, { Request, response } from "express";
import { countries, country } from "./cuntries";




const app: Express = express()

app.use(express.json())
app.use(cors())

// endpoint 1 - busccar todos os paises

app.get("/coutries", (req: Request, res: Response) => {
    const result = countries.map((coutry: country) => {
        return { id: countries.id, name: country.name }
    })
    res.status(200).send(result)
})

// [ 
// 	{
// 		"id":0,
// 		"name":"África do Sul"
// 	},{
// 		"id":1,
// 		"name":"Angola"
// 	}

// ]

// endpoint 2 - buscar paises por id:

app.get('/coutries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const result: country | undefined = countries.find(
            (country) => country.id === Number(req.params.id)
        );

        if (!result) {
            errorCode = 404;
            throw new Error();
        }
        // deu tudo certo
        res.status(errorCode).send(error.massge)

    }
})

// endpoint 3 buscar com filtros

app.get('/coutries/search', (req: Request, res: Response) => {
    let result: country[] = countries;
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error('Invalid Parameters')
        }
        if (!req.query.name) {
            result = result.filter((country) =>
                country.name.includes(req.query.name as string)
            )
        }
        if (req.query.continent) {
            result = result.filter((country) =>
                country.contnent.includes(req.query.contnent as string)
            )
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// endpoint 4

app.post('/coutries/:id', (req: Request, res: Response) => {
    let errorCode: Number = 400// inicio de um sonho 
    try {
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === - 1) {
            errorCode = 404
            throw new Error()
        }

        if (!req.body.name) {
            countries[countryIndex].name = req.body.capital
        }

        // deu certo
        res.status(200).send('Country successfully updated')
    } catch (error) {
        // deu errado
        console.log(error);
        res.status(errorCode).send(error.message)
    }

}

//endpoint 5 -Deletar País

app.delete('/coutries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400 
    //inicio de um sonho
    try {
        const authorization = req.headers.authorization as string
        if(!authorization || authorization.length < 10) {
            errorCode = 401;
            throw new Error ('Unauthorized');
        };
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id) 
        );

        if (countryIndex === - 1) {
            errorCode = 404;
            throw new Error()
        };
        countries.splice(countryIndex, 1)

        // deu certo
        res.status(200).send('Delete Country successfully')
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

// // endpoint 6 - Criar País

// app.post('/coutries', (req: Request, res: Response) => {
//     let errorCode: number = 400
//     // inicio de um sonho
//     try {
//         const countryIndex: number = countries.findIndex (
//             (country) => country:id === Number(req.params.id)
//         );

//         if (countryIndex === -1) {
//             errorCode = 404;
//             throw new Error()
//         };

//         if (!req.body.name && !req.body.capital) {
//             throw new Error('Invalid Parameters')
//         };

//         if (req.body.name) {
//             countries[countryIndex].name = req.body.name
//         };

//         if (req.query.capital) {
//             countries[countryIndex].capital = req.body.capital
//         };


//     }
// })