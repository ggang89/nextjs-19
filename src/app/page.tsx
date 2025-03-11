import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>날씨</h2>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          {" "}
          <Link href="/newyork">뉴욕</Link>
        </li>
      </ul>
    </>
  );
}
