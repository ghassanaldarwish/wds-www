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
  // Extend your configuration with cookie settings

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

// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "@/models/User";
// import connectToDatabase from "@/utils/connectDb";

// export default NextAuth({
//   pages: {
//     // customized pages
//     signIn: "/login",
//     error: "/error", // Custom error page URL
//     // signOut: '/auth/signout',
//     // verifyRequest: '/auth/verify-request',
//     // newUser: '/auth/new-user'
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "email" },
//         // username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       //   is called when the user submits the login form. It receives the credentials as a parameter and should return a user object if the credentials are valid, or null if they are not. AFTER this method, the signIn method is called
//       authorize: async (credentials) => {
//         console.log("🚀 ~~~~~~~~~authorize~~~~~~~~~");
//         console.log("🚀 ~authorize credentials:", credentials);
//         await connectToDatabase();
//         try {
//           const user = await User.findOne({ email: credentials.email });
//           console.log("🚀 ~authorize user:", user);

//           if (!user) return Promise.resolve(null);

//           const isValid = await bcrypt.compare(
//             credentials.password,
//             user.password
//           );
//           console.log("🚀 ~authorize isValid:", isValid);

//           if (!isValid) return Promise.resolve(null);

//           return Promise.resolve(user);
//         } catch (error) {
//           console.error("Authorise Error fetching user:", error.message);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//     //   GOOGLE
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // GITHUB
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     // FACEBOOK
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//     // Add more providers as needed
//   ],
//   // Add custom configurations below
//   database: process.env.DATABASE_URL,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     /**
//      *
//      * When it's used: After a user is verified but before they are signed in.
//      * Purpose: Control whether or not to allow the user to sign in.
//      * Parameters: user, account, profile, and email.
//      * Returns: true (allow sign-in), false (deny sign-in), or a URL (redirect to the URL).
//      * Parameters: (user, account, profile, email)
//      *
//      */
//     async signIn(user, account, profile) {
//       console.log("🚀 ~~~~~~~~~signIn~~~~~~~~~");
//       console.log("🚀 ~ SIGNIN :user:", user);
//       console.log("🚀 ~ SIGNIN :account:", account);
//       console.log("🚀 ~ SIGNIN :profile:", profile);

//       let email = "";

//       // Handling Credentials Provider
//       if (user?.account?.provider === "credentials") {
//         return true;
//       } else if (user.account.provider === "github") {
//         email = user.account.email; // github returns this user object only

//         // If email is not available, fetch it from GitHub API
//         if (!email) {
//           const res = await fetch("https://api.github.com/user/emails", {
//             headers: {
//               Authorization: `token ${user.account.access_token}`,
//             },
//           });
//           const emails = await res.json();
//           console.log("🚀 ~SIGNIN emails from GITHUB:", emails);

//           if (!emails || emails.length === 0) {
//             return false; // No email found, deny access
//           }

//           // Find the primary email
//           const primaryEmail = emails.find((e) => e.primary);
//           email = primaryEmail?.email;
//           console.log("🚀 ~ email finally is:", email);
//         }
//       } // Handling Google Provider
//       else if (user.account.provider === "google") {
//         email = user.user.email;
//       }

//       console.log("🚀 ~SIGNIN email:", email);

//       if (email) {
//         await connectToDatabase();
//         let dbUser = await User.findOne({ email });
//         console.log("🚀 ~SIGNIN dbUser:", dbUser);
//         if (!dbUser) {
//           // If user does not exist, create them
//           const newUser = {
//             email,
//             verified: true, // Set verified to true for OAuth providers
//             username: email, // there is no username so use the email as username
//             password: null, // there is no pass from user so set it to null
//             provider: user.account.provider,
//           };

//           console.log("🚀 ~SIGNIN newUser:", newUser);
//           dbUser = await User.create(newUser);
//           console.log("🚀 ~ SIGNIN dbUser:", dbUser);
//         }

//         // store user data from db so they are accessible in jwt callback and then could be available in session callback.
//         user.account.userData = dbUser;
//         // Additional checks or actions here
//         return true; // Allow sign-in
//       }
//       return false; // Prevent sign-in
//     },

//     /**
//      *
//      * When it's used: Whenever NextAuth.js has to redirect a user (e.g., on sign-in or sign-out).
//      * Purpose: Control the URLs users are redirected to.
//      * Parameters: url and baseUrl.
//      * Returns: A URL.
//      *
//      */
//     async redirect(address, baseAddress) {
//       console.log("🚀 ~~~~~~~~~redirect~~~~~~~~~");
//       console.log("🚀 ~redirect address, baseAddress:", address, baseAddress);

//       const { url, baseUrl } = address;

//       if (url.includes("/login") || url.includes("/register")) {
//         return baseUrl + "/dashboard";
//       }

//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//     /**
//      * SESSION
//      * When it's triggered: Whenever a session is checked/updated.
//      * Purpose: Control the session object.
//      * Returns: The session object.
//      */
//     async session({ session, token, user }) {
//       console.log("🚀 ~~~~~~~~~session~~~~~~~~~");
//       console.log("🚀 ~ session:", session);
//       console.log("🚀 ~ user:", user);
//       console.log("🚀 ~ token:", token);

//       session.customAccessToken = token.customAccessToken;

//       return { ...session, token };
//     },
//     /**
//      * JWT
//      * is triggered whenever a JSON Web Token (JWT) is created or updated, which happens at sign-in or whenever a session is accessed on the client
//      * When it's used: When signing the JWT or when validating/updating the JWT.
//      * Purpose: Control the properties of the JWT.
//      * Parameters: token, user, account, profile
//      * Returns: The token object.
//      */
//     async jwt({ token, user, account, profile }) {
//       console.log("🚀 ~~~~~~~~~jwt~~~~~~~~~");
//       console.log("🚀 ~ token:", token);
//       console.log("🚀 ~ user:", user);
//       console.log("🚀 ~ account:", account);
//       console.log("🚀 ~ profile:", profile);

//       // if user signs in with OATH
//       if (account?.userData) {
//         const userObject = account.userData.toObject();
//         const safeUser = omit(userObject, ["password", "verificationToken"]);
//         token.user = safeUser;
//         console.log("🚀 ~ safeUser:", safeUser);

//         token.customAccessToken = jwt.sign(
//           { userId: account?.userData._id },
//           process.env.NEXTAUTH_SECRET
//         );

//         return token;
//       }

//       if (user) {
//         const userObject = user.toObject();
//         const safeUser = omit(userObject, ["password", "verificationToken"]);
//         token.user = safeUser;

//         token.customAccessToken = jwt.sign(
//           { userId: user._id },
//           process.env.NEXTAUTH_SECRET
//         );
//       }

//       return token;
//     },
//   },
// });

// // Utility function to omit specific properties from an object
// function omit(obj, keys) {
//   const result = { ...obj };
//   keys.forEach((key) => delete result[key]);
//   return result;
// }
