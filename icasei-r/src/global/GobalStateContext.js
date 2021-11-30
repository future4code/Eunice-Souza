import { useEffect, useState } from "react"
import {BASE_URL} from "../constats/Url"
import {useRequestData} from "../hooks/useRequestData"
import GlobalContext from "./GlobalContex"

const GlobalStateContext = (props) => {
    const [listFilme, setListFilme] = useState([])     // name, url-filme 
    const [listVideo, setListVideo] = useState([])     // name, url_front_deful
    const [page, setPage] = useState(1)
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=${(page - 1) *20}`)

    useEffect(() => {
        setListVideo(data.results)
    },[data])

    const addFilme = (filmeName, filmeUrl) => {    // name, url_pokemon
        const video = {
            name: filmeName,
            url: filmeUrl
        }
            // Curti
        const newListVideo = [...ListVideo, video]
        setListFilme(newListVideo)

        alert("Vídeo curtido com sucesso!")

        const newListFilme = listFilme.filter((item) => {
            return (item.name !== filme.name)
        })

        setListVideo(newListVideo)
    }   

    const descurtirFilme = (videoName, videoUrl) => {
        const video = {
            name: videoName,
            url: videoUrl
        }
        

        const newListFilme = [...listFilme, filme]
        setListFilme(newListFilme)

        alert("Video descurtido com sucesso!")

        // descurtir

        const newListFilme = listFilme.filter((item) => {
            return (item.name !== video.name)
        })
        setListFilme(newListFilme)
    }

    const onChange = (event, value) => {
        setPage(value)
    }

    const states = {listFilme, listVideo, page}
    const setters = {addVideo, descurtirFilme, onChangePage}
    const request = {}

    return(
        <GlobalContext.Provaider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provaider>
    )

}
   
   

export default GlobalStateContext


