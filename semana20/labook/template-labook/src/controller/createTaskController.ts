export const createTaskController = async (
    req: Request,
    res: Response
) => {
    try {
        const { title, description, deadline, authorId } = req.body

        if (
            !title ||
            !description ||
            !deadline ||
            !authorId
        ) {
            throw new Error("'title', 'description', 'deadeline' e authoreId são obrigatórios")
        }

        const id: string = generateId()

        await insertTask({
            id,
            title,
            deadline,
            authorId
        })
    }
}