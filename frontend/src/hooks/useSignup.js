import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        const error = handleInputErrors({fullName, username, password, confirmPassword, gender})

        if(error) return;

        setLoading(true)
        
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            })
            
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message) 
        } finally {
            setLoading(false) 
        }
    }
    return {loading, signup}
}

export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill all the fields')
        return true
    }

    else if(password !== confirmPassword){
        toast.error('Passwords do not match')
        return true
    }

    else if(password.length < 6){
        toast.error('Password shouldbe atleast 6 characters')
        return true
    }

    return false
}