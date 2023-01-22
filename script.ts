import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.findUnique({
        where: {
            name_age: {
                name: "Kyle",
                age: 27
            }
        }
    })


    console.log(user)
}

main()
    .catch(err => console.log(err))
    .finally(async () => {
        await prisma.$disconnect()
    })
