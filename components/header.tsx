"use client";

import { useRouter } from "next/navigation";
import { IconInfoCircle } from "@tabler/icons-react";

import { ModeToggle } from "./dark";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";


export function Header() {
  const router = useRouter();

  return (
    <header className="border-b">
      <div className="flex items-center justify-around w-300 mx-auto p-2">
        {/* Common left section */}
        <div className="flex items-center">
          <div className="rounded-md mr-2">
            <ModeToggle />
          </div>
          <p>Schedule</p>
        </div>

        <Popover>
          <PopoverTrigger>
            <IconInfoCircle size={20} />
          </PopoverTrigger>

          <PopoverContent className=" w-64">
            <p className="text-sm">
                schedule your events in a click without any hustles 
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
