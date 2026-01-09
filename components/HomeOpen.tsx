import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar05 } from "@/components/Calendar";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className=" w-full max-w-3xl h-[65%] flex flex-col gap-3  ">
      <div className=" h-[10%] w-full flex items-center justify-center ">
        <Input placeholder="Enter event title.." />
      </div>
      <div className=" h-[90%] w-full flex gap-4">
        <div className=" py-4  gap-4 flex flex-col   h-full w-full">
          <div className="flex gap-3 pb-5">
            <div>
              <Select>
                <SelectTrigger className="w-[225px]">
                  <SelectValue placeholder="Date Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Specific Date</SelectItem>
                  <SelectItem value="dark">Continuous Days</SelectItem>
                  <SelectItem value="system">Discontinuous Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[250px]">
              <Input placeholder="Enter Season Name" />
            </div>
          </div>

          <Calendar05 />
        </div>
        <div className="flex flex-col gap-4  justify-start h-full w-full">
          <div className="flex flex-col gap-1">
            <Textarea
              placeholder="Describe your event..."
              className="mt-4 h-28"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Organiser Name</label>
            <Input placeholder="Your name" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password (optional)</label>
            <Input placeholder="Set a password to restrict access" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Event Slug (optional)</label>
            <p className="text-sm text-muted-foreground">
              A slug is a unique text used in link.
            </p>
            <Input placeholder="Your custom slug" />
          </div>

        </div>
      </div>
    </div>
  );
}
