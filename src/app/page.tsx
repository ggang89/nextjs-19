import { getCurrentWeather } from "@/utils/getCurrentWeather";
//import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const res = await getCurrentWeather('seoul');
//console.log('res',res)
  return (
    <>
      <h1 className="text-4xl font-bold">Home</h1>
      <h2 className="text-2xl">날씨</h2>
      <ul>
        <li>
          <Link href="/seoul?name=seoul">🏙서울</Link>
          <span>{res.current.condition.text}</span>&nbsp;
          <span>🌡{res.current.temp_c }</span>
          {/* <Image src={res.current.condition.icon} alt={res.current.condition.text}
          width={50} height={40} /> */}
        </li>
        <li>
          {" "}
          <Link href="/newyork">🗽뉴욕</Link>
        </li>
      </ul>
    </>
  );
}
