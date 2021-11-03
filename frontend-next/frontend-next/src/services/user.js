import {goToUsersPage} from "../routes/coordinator"




export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    setTimeout(() => {
        clear()
        setIsLoading(false)
        goToUsersPage(history)
    }, 2000)
}