import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import {goToUsersPage} from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
        goToUsersPage(history)
    }
  }, [history])
}

export default useUnprotectedPage