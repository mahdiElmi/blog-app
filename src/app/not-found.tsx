import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 lg:px-8">
      <p className="font-semibold text-indigo-600">404</p>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="text-xl font-medium text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back home
      </Link>
    </main>
  );
}