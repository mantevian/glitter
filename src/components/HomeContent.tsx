import * as React from 'react';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';


export default function HomeContent({ displayName }: { displayName: string }) {
  return (
		<>
			<br />
			Welcome {displayName}! What's on your mind today?
			<br />
			<p className="text-sm text-black-6 dark:text-white-6">{`13.12.2022: Migrated to a Postgres database, loading times should be almost instant!`}</p>
			<CreatePostForm />
			<Feed />
		</>
  );
}
