import Link from "next/link";
import * as React from "react";

export default function Info() {
	return (
		<div className="mt-2 info-page">
			<Link className="button" href="/">
				Back
			</Link>
			<div className="generic-box mt-2">
				<p className=" text-xl">Welcome to glitter!</p>
				<p className="text-black-2 dark:text-white-6">
					<span className="text-glitter font-bold">glitter</span> is my personal project that I'm developing to learn web
					development. glitter is written in 100% TypeScript, made with Next.js v13 and uses Tailwind for styles. The database is
					MySQL on a free hosting service for development and testing,{" "}
					<Link href="https://www.db4free.net/" className="text-starlight underline">
						check them out
					</Link>
					!
					<br />
					<b>A little about safety.</b> glitter is a learning project and is currently in a very early development state without much protection against any technical abuse shenanigans
					that I don't know about. That being said, please don't use it for any information that may be sensitive (and don't spam my database, thanks). This won't have a password login, and logging in with Google should be safe. The only information I store is your Google ID which is a convenient unique identificator of a person.
					<br /> <span className="text-malachite font-bold">~ created by mantevian</span>
					<br />
					You can find the source code{" "}
					<Link href="https://github.com/mantevian/glitter" className="text-starlight underline">
						here
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
