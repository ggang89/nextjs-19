import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY 

const getCurrentWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`
  )

  if (!res.ok) {
    if (!res.ok) throw new Error('날씨 정보를 가져올 수 없습니다.')
  }
  return res.json()
};

export default function Home() {
   const res =  getCurrentWeather()
  console.log(res)
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
