import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "../../../utils/database/users";
import { docExists } from "../../../utils/firebase";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? '',
			clientSecret: process.env.GOOGLE_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user }: any) {
			if (!(await docExists('users', user.id)))
				createUser(user.id);

			return true;
		},
		async session({ session, token }: any) {
			session.user.id = token.sub;
			return session;
		}
	}
}

export default NextAuth(authOptions);