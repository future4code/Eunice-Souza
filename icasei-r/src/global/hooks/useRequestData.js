import { useEffect, useState } from "react"
import axios from "axios"

export const useRequestData = (initValue, url) => {
    const [data, setData] = useState(initValue)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert("Error ao acessar endpoint, tente novamente")
                console.log(err)
            })
    }, [url])
    return [data, setData]
}