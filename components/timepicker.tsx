"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

function minutesToTime(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function TimeRangeSlider({
  from,
  to,
}: {
  from: Date | undefined;
  to: Date | undefined;
}) {
  const [range, setRange] = React.useState<[number, number]>([0, 920]);
  // default 09:00 – 17:00

  const start = minutesToTime(range[0]);
  const end = minutesToTime(range[1]);

  return (
    <div className="flex flex-col  gap-3 w-full max-w-md">
      <div className="flex justify-between text-sm">
        <div className="flex gap-2">
          {" "}
          <span>
            Start: <b>{start}</b>
          </span>{" "}
          <div className="flex">
            {" "}
            <p>{from?.getDate()}</p>/<p>{from?.getMonth()}</p> /{" "}
            <p>{from?.getFullYear()}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {" "}
          <span>
            End: <b>{end}</b>
          </span>{" "}
          <div className="flex">
            {" "}
            <p>{to?.getDate()}</p>/<p>{to?.getMonth()}</p> /{" "}
            <p>{to?.getFullYear()}</p>
          </div>
        </div>
      </div>

      <Slider
        min={0}
        max={1440}
        step={15}
        value={range}
        onValueChange={(v: [number, number]) => setRange(v)}
      />
    </div>
  );
}
