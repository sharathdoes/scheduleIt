import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from './generated/client';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
 const posts=await Promise.all(
  [
    // await prisma.event.create({
    //     data:{
    //         slug:"924",
    //         name:"Kuari Pass Trek",
    //         organizerName:"Sharath",
    //         passwordHash:"kuaripass",
    //          startDate: new Date("2026-02-10T09:00:00.000Z"),
    //         endDate: new Date("2026-02-15T17:00:00.000Z"),
    //     }
    // }),
        // await prisma.participant.create({
        //     data:{
        //         eventId:"f559f3d6-c6c9-479d-bbc6-d61b010be227",
        //         name:"Xguy",
        //         passwordHash:"Xguy",
        //         note:"I'm always ready",
        //     }
        // })
        // await prisma.availability.create({
        //     data:{
        //         participantId:"8f7b292d-599a-43f0-a57e-06f8eda8e571",
        //         confidence:"FLEXIBLE",
        //         startTime: new Date("2026-02-10T02:00:00.000Z"),
        //         endTime: new Date("2026-02-10T06:00:00.000Z"),            }
        //     })
  ]
 )
  console.log('Seeding completed.', posts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
