'use server'
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



import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function createEvent(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string | null;
    const organizerName = formData.get("organizerName") as string;
    const password = formData.get("password") as string;
    const slug = formData.get("slug") as string || name.toLowerCase().replace(/\s+/g, "-");
    const duration = parseInt(formData.get("duration") as string);
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);
    const periodName = formData.get("periodName") as string | null;

    // Hash password
    const passwordHash = password ? await bcrypt.hash(password, 10) : "";

    const event = await prisma.event.create({
      data: {
        name,
        slug,
        description,
        organizerName,
        passwordHash,
        duration,
        periodName,
        startDate,
        endDate,
      },
    });

    // Redirect to the event page
    redirect(`/e/${event.slug}`);
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}