"use client"

import { createAuthClient } from "better-auth/client"

export const authClient = createAuthClient({
    baseURL: process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_APP_URL
        : 'http://localhost:3000/'
})

export const { signIn, signOut, useSession } = authClient
