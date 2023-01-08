import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import MainContainer from "../components/MainContainer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<div>
			<SessionProvider session={session}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<MainContainer>
						<Component {...pageProps} />
					</MainContainer>
				</ThemeProvider>
			</SessionProvider>
		</div>
	);
}

export default MyApp;
