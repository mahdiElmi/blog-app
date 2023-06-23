import Link from "next/link";

function Navbar() {
  return (
    <nav className="relative flex w-full justify-between py-4">
      <div className="mx-auto flex w-full max-w-7xl gap-5 decoration-indigo-600 decoration-4 underline-offset-4">
        <Link
          className="rounded-md p-1 text-3xl font-semibold leading-none hover:underline"
          href="/"
        >
          Home
        </Link>
        <Link
          className="rounded-md p-1 text-3xl font-semibold leading-none hover:underline"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-900/10"></div>
    </nav>
  );
}

export default Navbar;
