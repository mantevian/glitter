import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<div className="bg-white-0 dark:bg-black-0">
			<SessionProvider session={session}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Component {...pageProps} />
				</ThemeProvider>
			</SessionProvider>
		</div>
	);
}

export default MyApp;
