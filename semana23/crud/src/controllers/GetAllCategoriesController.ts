import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


export class GetAllCategoriesController {
    async handle(ruequest: Request, response: Response) {
        const service = new GetAllCategoriesService()

        const categories = await service.execute()

        return response.json(categories)
    }
}