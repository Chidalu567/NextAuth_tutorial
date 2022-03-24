import Link from "next/link";
//packages that helps to handle auth providers automatically
import { signIn, signOut, useSession } from "next-auth/react";
// for authenticating client-side import useSession

function Navbar() {
  const { data, status } = useSession(); //next-js hook

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={"loaded"}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <a>Blog</a>
        </li>
        {!data && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault(); // preventDefault calls
                  // We passed in github so that our second signin in
                  // we don't get to autorize anymore.
                  signIn("github"); // onClick call the function signin
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {data && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  // onClick navigate to url and call the signout function
                  e.preventDefault(); // preventDefault call
                  signOut(); // function call
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
