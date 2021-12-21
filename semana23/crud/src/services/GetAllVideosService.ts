import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";



export class GetAllVideosService {
    async execute() {
        // console.log('Implementation')
        const repo = getRepository(Video)

        const videos = await repo.find({
            relations: ["category"]
        })

        return videos
    }
}