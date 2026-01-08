import prisma from "@/lib/prisma";
import { Event } from "@/lib/type";

type Props = { 
  params: Promise<{ id: string }> 
};

export default async function EventPage({ params }: Props) {
  const { id } = await params; 
  
  if (!id) return <div>Invalid event</div>;

  try {
    const event: Event | null = await prisma.event.findUnique({
      where: { slug: id },
    });

    if (!event) return <div>Event not found</div>;

    return (
      <div className="p-8">
        <h1>Event: {event.name}</h1>
        <p>Organizer: {event.organizerName}</p>
        <p>Slug: {event.slug}</p>
        <p>Description: {event.description}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching event:', error);
    return <div>Error loading event</div>;
  }
}