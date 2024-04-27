import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/firebase";


export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                return await signInWithEmailAndPassword(auth, (credentials).email || '', (credentials).password || '')
                    .then(userCredential => {
                        if (userCredential) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
    ],
    // Use JWT session strategy
    session: {
        jwt: true,
    },
    // Custom callbacks to modify JWT and session data
    callbacks: {
        async jwt({ token, user }) {
            // Add custom data to JWT
            if (user) {
                token.user = user;
              }
              return token;
        },
        async session({ session, token }) {
            // Add custom data to session
            session.user = token.user;
            return session;
        },
    },
}
export default NextAuth(authOptions)