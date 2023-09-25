'use client';

import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

async function CallApi() {
    try {
        const response = await axios.get('https://localhost:5000/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function callProtectedApi() {
    try {
        const response = await axios.get('https://localhost:5000/protected');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default function Home() {
    // const {
    //     loginWithPopup,
    //     loginWithRedirect,
    //     logout,
    //     user,
    //     isAuthenticated
    // } = useAuth0();
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const handleNavigation = (to) => {
        router.push(to);
    }
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        useEffect(() => {
            router.push('/Client/Dashboard');
        }, []);
        return (
            <>
                {JSON.stringify(user, null, 2)}
                <ul>
                    <li>
                        <button onClick={() => handleNavigation('/api/auth/logout')}>
                            Log out
                        </button>
                    </li>
                    <li>
                        <button onClick={CallApi}>
                            Call API Route
                        </button>
                        { }
                    </li>
                    <li>
                        <button onClick={callProtectedApi}>
                            Call Protected API Route
                        </button>
                    </li>
                </ul>
            </>
        )
    }
    console.log(user);
    return <button onClick={() => handleNavigation('/api/auth/login')} >Login</button>

}
