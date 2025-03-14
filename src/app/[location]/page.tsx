import HomeButton from "@/components/HomeButton";
import { getCurrentWeather } from "@/utils/getCurrentWeather";

type Props = {
  params: Promise<{
    location: string;
  }>;
  searchParams: Promise<{
    name: string;
  }>;
};

// 메타데이터
export async function generateMetadata({ searchParams }: Props) {
  const propsSearchParams = await searchParams;

  return {
    title: `날씨 정보_${propsSearchParams.name}`,
    description: `${propsSearchParams.name} 날씨 정보를 확인할 수 있는 페이지입니다.`,
  };
}

// params: 루트 세그먼트에서 해당 페이지로 내려가는 동적 경로 매개 변수가 포함된 프로미스
async function Detail({ searchParams }: Props) {
  // async await로 받은 값이랑 그냥 받은 값이랑 왜 다른가
  // 그냥 받으면 promise가 반환되고, async await로 받으면 값이 반환된다.??
  const searchParamsValue = await searchParams;
  const weather = await getCurrentWeather(searchParamsValue.name);
  console.log("weather", weather);
  return (
    <>
      <h1 className="text-3xl">{searchParamsValue.name}의 날씨</h1>
      <h3>{weather.current.condition.text}</h3>
      <h3>{weather.current.temp_c}℃</h3>
      <HomeButton />
    </>
  );
}

export default Detail;
