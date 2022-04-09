import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Hello World</h1>
        <p>Nothing to see here</p>
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }

  return (
    <>
      <h1>You are not signed in</h1>
      <p>Please sign in to continue</p>
      <button type="button" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
