import prisma from "@/lib/prisma";
import {Prisma} from "@/prisma/generated/client"

type slugProps = {
  eventSlug: string;
};

export async function getEvent({ eventSlug }: slugProps) {
    try {
        if (!eventSlug) {
            console.log("no eventId");
            return null;
        }
        const event = await prisma.event.findUnique({
            where: {
                slug: eventSlug,
            },
        });
        
        return event;
    } catch (err) {
        console.log(err);
    }
}


export async function createEvent( data : Prisma.EventCreateInput) {
    try {
        if (!data) {
            console.log("no data");
            return null;
        }
        const event = await prisma.event.create({data,});
        
        return event;
    } catch (err) {
        console.log(err);
    }
}