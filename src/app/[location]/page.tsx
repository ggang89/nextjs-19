type Props = {
  params: {
    location: string;
  };  
}
// params: 루트 세그먼트에서 해당 페이지로 내려가는 동적 경로 매개 변수가 포함된 프로미스
function Detail({params}:Props) {
  return (
    <>
      <h1>Detail {params.location }</h1>
    </>
  )
}

export default Detail;