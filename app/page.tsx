import Header from "@/components/header";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "@/components/ui/booking-item";
import { getBarbershops, getPopularBarbershops } from "@/data/barbershops.js";
import BarbershopItem from "@/components/ui/barbershop-item.js";
import {
  PageContainer,
  PageSectionContent,
  PageSectionScroller,
  PageSectionTitle,
} from "@/components/ui/page.js";
import Footer from "@/components/ui/footer.js";

// Server Component
export default async function Home() {
  const barbershops = await getBarbershops();
  const popularBarbershops = await getPopularBarbershops();

  return (
    <div>
      <Header />
      <PageContainer>
        <Image
          src={banner}
          alt="Agende nos melhores com a Aparatus"
          sizes="100vw"
          className="h-auto w-full"
        />
        <PageSectionContent>
          {/* composition Pattern */}
          <PageSectionTitle>Próximos Agendamentos</PageSectionTitle>
          <BookingItem />
        </PageSectionContent>
        <PageSectionContent>
          <PageSectionTitle>Barbearia</PageSectionTitle>
          <PageSectionScroller>
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
        <PageSectionContent>
          <PageSectionTitle>Barbearia Populares</PageSectionTitle>
          <PageSectionScroller>
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
    </div>
  );
}
