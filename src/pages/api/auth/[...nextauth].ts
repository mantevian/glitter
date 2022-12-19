import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "../../../utils/database/users";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? '',
			clientSecret: process.env.GOOGLE_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user }: any) {
			await createUser(user.id);

			return true;
		},
		async session({ session, token }: { session: Session, token: JWT }) {
			if (session.user)
				session.user.id = token.sub || '';
			
			return session;
		}
	}
}

export default NextAuth(authOptions);