import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Home</h1>
      <h2 className="text-2xl">날씨</h2>
      <ul>
        <li>
          <Link href="/seoul">🏙서울</Link>
        </li>
        <li>
          {" "}
          <Link href="/newyork">🗽뉴욕</Link>
        </li>
      </ul>
    </>
  );
}
