// app/api/auth/[...nextauth]/options.ts

import { refresh } from "@/services/auth";
import { loginUser } from "@/services/users";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
    newUser: "/register",
    //  signOut: "/auth/signout",
    //   error: "/auth/error", // Error code passed in query string as ?error=
    //   verifyRequest: "/auth/verify-request", // (used for check email message)
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "email",
          placeholder: "your-cool-email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials: any) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        console.log("credentials ==>", credentials);
        try {
          const login = await loginUser(credentials);
          console.log("login ==>", login);
          return login;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      console.log("jwt callback { token, user }", { token, user });
      // If user object exists, it means it's a new sign-in

      if (user?.token) {
        const accessToken = user.token.accessToken.value;
        const refreshToken = user.token.refreshToken.value;
        const accessTokenExpires = user.token.accessToken.accessTokenExpires;
        const refreshTokenExpires = user.token.refreshToken.refreshTokenExpires;
        token.user = user.user;
        token.role = user.user.role;
        token.accountStatus = user.user.accountStatus;
        token.isVerified = user.user.isVerified;
        token.refreshToken = refreshToken; // Simulated refresh token
        token.accessToken = accessToken;
        token.accessTokenExpires = accessTokenExpires;
        token.refreshTokenExpires = refreshTokenExpires;
      }

      // If forbidden update the access token
      // Check if the token has expired
      if (Date.now() > token.accessTokenExpires) {
        const refreshToken = token.refreshToken;
        const response = await refresh(refreshToken);
        const accessToken = response?.value;
        const accessTokenExpires = response?.accessTokenExpires;

        console.log("response refreshToken==> ", response);
        return {
          ...token,
          accessTokenExpires,
          accessToken, // Simulated new access token
        };
      }

      // if (Date.now() > token.refreshTokenExpires) {
      //   // Here we would normally use a real method to obtain a new token.
      //   // For demonstration, we're just extending the validity period.
      //   return {
      //     ...token,
      //     // refreshTokenExpires: refreshTokenExpires,
      //     refreshToken: "new-mock-refresh-token", // Simulated new refresh token
      //   };
      // }

      return token;
    },
    async session({ session, token }: any) {
      console.log("session callback { session, token }", { session, token });
      // Pass token details to the session object
      session.user = token.user;
      session.accessTokenExpires = token.accessTokenExpires;
      session.refreshTokenExpires = token.refreshTokenExpires;
      session.refreshToken = token.refreshToken;
      session.accessToken = token.accessToken;
      session.accountStatus = token.accountStatus;
      session.isVerified = token.isVerified;

      session.role = token.role;
      return session;
    },
  },
};
