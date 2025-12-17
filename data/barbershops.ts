import { prisma } from "@/lib/prisma.js";

export const getBarbershops = async () => {
  const barbershops = await prisma.barbershop.findMany();
  return barbershops;
};

export const getPopularBarbershops = async () => {
  const popularBarberShops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return popularBarberShops;
};
