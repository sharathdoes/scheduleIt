import HomeOpen from "@/components/HomeOpen"
import { createEvent } from "@/actions/event";
export default function Home() {

  
  return (
    <div className="h-screen flex p-8 flex-col w-full justify-center items-center  ">
      <h1 className="text-3xl py-4 font-semibold">Make It Happen</h1>
      <form  className='w-full max-w-3xl ' action={createEvent}>
              <HomeOpen/>
      </form>

    </div>
  );
}
