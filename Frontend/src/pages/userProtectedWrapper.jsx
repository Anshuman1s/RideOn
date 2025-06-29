import React , {useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate} from 'react-router-dom'
const userProtectedWrapper = ({
    children
}) => {
    const {user} = useContext(UserDataContext);
    const navigate = useNavigate();
    if(!user.email){
        navigate('/login')
    }
    return( <>

    </>
    )
  
}

export default userProtectedWrapper