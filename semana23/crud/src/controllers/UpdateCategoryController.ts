import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";


export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const {id} = request.params
        const {name, description} = request.body

        const servece = new UpdateCategoryService()

        const result = await servece.execute({id, name, description})

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}