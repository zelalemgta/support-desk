'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/atoms/Buttons'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignIn = async (e) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)
        const { data: { session }, error } = await supabase.auth.signInWithPassword({ email, password })
        if (session)
            router.replace("/")
        else if (error) {
            setIsLoading(false)
            setError("Invalid Login Credentials!")
        }
    }

    return (
        <div className="w-full lg:max-w-xl p-6 sm:p-8 rounded-lg shadow-xl bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-white">
                Sign in to EHIS Support Desk
            </h2>
            {error ?
                <div className="mb-4 text-sm font-medium rounded-lg text-red-400" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <span className="font-medium">Authentication Error!</span> {error}
                </div> : null}
            <form className="space-y-6" onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="border text-base sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="border text-base sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 rounded focus:ring-3 focus:ring-blue-600 ring-offset-gray-800 bg-gray-700 border-gray-600" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="font-medium text-gray-400">Remember this device</label>
                    </div>
                    <a href="#" className="ml-auto text-sm font-medium hover:underline text-blue-500">Lost Password?</a>
                </div>
                <Button
                    type="submit"
                    label="Login to your account"
                    loadingText="Signing In..."
                    isLoading={isLoading}
                    size='large'
                />
            </form>
        </div>
    )
}