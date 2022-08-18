import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <style jsx global>{`
      a {
          color : tomato;
      }
      a {
          text-decoration:none;
      }
      `}</style>
    </nav>
  );
}
