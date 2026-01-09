import HomeOpen from "@/components/HomeOpen"

export default function Home() {
  return (
    <div className="h-screen flex p-8 flex-col justify-center items-center gap-4   ">
      <h1 className="text-3xl py-4 font-semibold">Make It Happen</h1>
      <HomeOpen/>
    </div>
  );
}
