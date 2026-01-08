import prisma from "@/lib/prisma"

type slugProps={
    eventSlug:string
}
export async function getSlugEvent({eventSlug} : slugProps){
    const event=await prisma.event.findUnique({
        where:{
         slug:eventSlug
            
        }
    }) 
    return event
}