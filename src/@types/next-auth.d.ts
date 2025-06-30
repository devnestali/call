import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  interface Account {
    id: string
    user_id: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token: string
    access_token: string
    expires_at: number
    token_type: string
    scope: string
    id_token: string
    session_state: string
  }
}