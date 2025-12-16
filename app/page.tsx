import Header from "@/components/header";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "@/components/ui/booking-item";
import { getBarbershops } from "@/data/barbershops.js";

// Server Component
export default async function Home() {
 const barbershops = await getBarbershops();

  return (
    <div>
      <Header />
      <div className="px-4">
        <Image
          src={banner}
          alt="Agende nos melhores com a Aparatus"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="mt-4 space-y-4 px-4">
        <h3 className="text-xs font-bold uppercase">Agendamentos</h3>
        <BookingItem />
      </div>
          {barbershops.map((barbershop) => (
            <div key={barbershop.id}>
              <p className="text-xs font-bold uppercase">{barbershop.name}</p>
            </div>
          ))}
      </div>
  );
}


