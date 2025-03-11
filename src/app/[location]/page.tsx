'use client';

import { useRouter } from "next/navigation";

type Props = {
  params: {
    location: string;
  };
};
// params: 루트 세그먼트에서 해당 페이지로 내려가는 동적 경로 매개 변수가 포함된 프로미스
function Detail({ params }: Props) {
  const router = useRouter();
  const handleClick = () => { 
    router.push('/');
  };
  return (
    <>
      <h1>{params.location}의 날씨</h1>
     <button onClick={handleClick}>go back Home</button>
    </>
  );
}

export default Detail;
