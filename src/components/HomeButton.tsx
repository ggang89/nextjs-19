"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <button onClick={handleClick} className="cursor-pointer py-1 px-3 rounded-xl bg-gray-400 text-amber-50">⬅ Home</button>
    </>
  );
}
