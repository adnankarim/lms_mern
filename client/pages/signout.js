import { signOut, isAuth } from '../actions/auth';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user

export default function SignOut() {
    const { load, setLoad } = useState(isAuth())
    const router = useRouter()

    useEffect(() => {
        signOut();
        router.push('/signin')

    }, [load, setLoad])

    return <p>Redirecting...</p>
}


