// components/HomeOpen.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "./ui/calendar";
import { type DateRange } from "react-day-picker";
import { TimeRangeSlider } from "./timepicker";

export default function HomeOpen() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  const [oneDay, setOneDay] = useState<boolean>(true);

  return (
    <div className="w-full max-w-3xl h-[90%] flex flex-col gap-3">
      <div className="h-[10%] w-full flex items-center justify-center">
        <Input name="name" placeholder="Enter event title.." required />
      </div>
      
      <div className="h-full w-full flex gap-4">
        <div className=" py-4 gap-4 flex flex-col h-full w-full">
          <div className="flex gap-3">
            <Select name="dateType">
              <SelectTrigger className="w-[225px]">
                <SelectValue placeholder="Date Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  onClick={() => setOneDay(true)}
                  value="specific"
                >
                  Specific Date
                </SelectItem>
                <SelectItem
                  onClick={() => setOneDay(false)}
                  value="continuous"
                >
                  Continuous Days
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              name="periodName"
              className="w-[250px]"
              placeholder="Enter Season Name"
            />
          </div>

          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            className="rounded-lg border shadow-sm"
          />

          {/* Hidden inputs for date range */}
          <input
            type="hidden"
            name="startDate"
            value={dateRange?.from?.toISOString() || ""}
          />
          <input
            type="hidden"
            name="endDate"
            value={dateRange?.to?.toISOString() || ""}
          />

          <div className="flex justify-center items-center">
            <TimeRangeSlider from={dateRange?.from} to={dateRange?.to} />
          </div>
        </div>

        <div className=" flex flex-col gap-5  justify-start h-full w-full">
          <Textarea
            name="description"
            placeholder="Describe your event..."
            className="mt-4 h-20"
          />

          <Input
            name="duration"
            placeholder="Duration / Number of days"
            type="number"
            required
          />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Organiser Name</label>
            <Input name="organizerName" placeholder="Your name" required />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password (optional)</label>
            <Input
              name="password"
              type="password"
              placeholder="Set a password to restrict access"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Event Slug (optional)</label>
            <p className="text-sm text-muted-foreground">
              A slug is a unique text used in link.
            </p>
            <Input name="slug" placeholder="Set a custom slug" />
          </div>

         
        </div>
      </div>
              <Button type="submit"className="w-full max-w-3xl">Create Event</Button>

    </div>
  );
}