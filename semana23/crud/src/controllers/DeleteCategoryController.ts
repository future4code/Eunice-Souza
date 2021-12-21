import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategogryService";


export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeleteCategoryService()

        const result = await service.execute(id)

        if (result instanceof Error) {
            return response.status(400).json
        }
        return response.status(400).end()
    }
}