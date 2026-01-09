import prisma from "@/lib/prisma";

type slugProps = {
  eventSlug: string;
};

export async function getSlugEvent({ eventSlug }: slugProps) {
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
