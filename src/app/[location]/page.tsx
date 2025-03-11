import HomeButton from "@/components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};
// params: 루트 세그먼트에서 해당 페이지로 내려가는 동적 경로 매개 변수가 포함된 프로미스
function Detail({ params }: Props) {
  return (
    <>
      <h1 className="text-3xl">{params.location}의 날씨</h1>
      <HomeButton />
    </>
  );
}

export default Detail;
