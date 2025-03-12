import HomeButton from "@/components/HomeButton";
import { getCurrentWeather } from "@/utils/getCurrentWeather";

// 메타데이터
export function generateMetadata({params}: Props) {
  return {
    title: `날씨 정보_${params.location}`,
    description: `${params.location} 날씨 정보를 확인할 수 있는 페이지입니다.`,
  };
}
  

type Props = {
  params: {
    location: string;
  };
};

// params: 루트 세그먼트에서 해당 페이지로 내려가는 동적 경로 매개 변수가 포함된 프로미스
async function Detail({ params }: Props) {
  // async await로 받은 값이랑 그냥 받은 값이랑 왜 다른가
  // 그냥 받으면 promise가 반환되고, async await로 받으면 값이 반환된다.??
  const weather = await getCurrentWeather(params.location);
  console.log("weather", weather);
  return (
    <>
      <h1 className="text-3xl">{params.location}의 날씨</h1>
      <h3>{weather.current.condition.text}</h3>
      <h3>{weather.current.temp_c}℃</h3>
      <HomeButton />
    </>
  );
}

export default Detail;
