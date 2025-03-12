const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export type Response = {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
  };
  location: {
    name: string;
  };
};
export const getCurrentWeather = async (location:string):Promise<Response> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
  );

  if (!res.ok) {
    if (!res.ok) throw new Error("날씨 정보를 가져올 수 없습니다.");
  }
  return res.json();
};
