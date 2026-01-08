import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HelpCircle } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  justify-center items-center ">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create an Event</CardTitle>
        <CardDescription>
          Enter event details to kick-start
        </CardDescription>
        <CardAction>
          <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="text-sm w-64">
                A slug is a short ID in the URL.
                <br />
            
                It helps users navigate to the event.
              </PopoverContent>
            </Popover>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <p >Organizer name</p>
              <Input
                id="text"
                type="text"
                placeholder="sharath g"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <p >Slug</p>
                
              </div>
              <Input                  placeholder="WeekendTrip95"
 required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Create Event
        </Button>
        
      </CardFooter>
    </Card>
    </div>
  );
}
