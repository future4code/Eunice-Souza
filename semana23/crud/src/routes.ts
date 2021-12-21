import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryControllers"
import { CreateVideoController } from "./controllers/CreateVideoController"
import { DeleteCategoryController } from "./controllers/DeleteCategoryController"
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController"
import { GetAllVideosControllers } from "./controllers/GetAllVideosController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"

const routes = Router()

/**
 *C - CREATE  - POST   - CRIAR
 *R - READ    - GET    - LEITURA
 *U - UPDATE  - PUT    - ALTERAR
 *D - DELETE  - DELETE - DELETAR
 */

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos", new GetAllVideosControllers().handle)

export { routes }
