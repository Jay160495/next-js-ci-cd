import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |
      <Link href="/posts">Posts</Link> |
      <Link href="/about">About</Link>
    </nav>
  );
}
