import { CircularProgress } from "@mui/material";
import { Authentication } from "../config/firebase";
import { useEffect, useState } from "react";
import { useUser, InitialUserState } from "./user";

const AuthStateChangeProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useUser()
    const { SetUser } = user

    const InisiateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user){
                console.log('User is authenticated')
                SetUser({ email: user.email, uid: user.uid })
            } else {
                console.log('User is not authenticated')
                SetUser(InitialUserState)
            }
            setIsLoading(false)
        })
    }

    useEffect(() => {
        InisiateAuthStateChange()
    }, [])

    if (isLoading){
        return <CircularProgress/>
    }

    return children
}

export default AuthStateChangeProvider