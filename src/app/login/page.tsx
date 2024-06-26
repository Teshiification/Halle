import Link from 'next/link';
import Messages from './messages';

export default function Login() {
  return (
    <div className="relative flex size-full flex-1 flex-col content-center items-center justify-center gap-2 px-8">
      <Link
        href="/"
        className="text-foreground group flex items-center rounded-md px-4 py-2 text-sm no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 size-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        className="flex w-full flex-1 flex-col justify-center gap-2 text-gray-100 md:w-1/3"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-tremor-brand mb-2 rounded px-4 py-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="mb-2 rounded border border-gray-500 px-4 py-2"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  );
}
