import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import Image from "next/image";
import banner from "../public/banner.png";
import BookingItem from "@/components/booking-item";
import BarbershopItem from "@/components/barbershop-item";
import Footer from "@/components/footer";
import { prisma } from "@/lib/prisma";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from "@/components/ui/page";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "asc" },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "desc" },
  });

  return (
    <>
      <Header />
      <main className="">
        <PageContainer>
          <SearchInput />
          <Image
            src={banner}
            alt="Agende agora!"
            sizes="100vw"
            className="h-auto w-full"
          />
          <PageSection>
            <PageSectionTitle>Agendamentos</PageSectionTitle>
            <BookingItem
              serviceName="Corte de cabelo"
              barbershopName="Barbearia do Zé"
              barbershopImageUrl="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png"
              date={new Date("2024-07-15T14:30:00")}
            />
          </PageSection>

          <PageSection>
            <PageSectionTitle>Barbearias</PageSectionTitle>
            <PageSectionScroller>
              {recommendedBarbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
            </PageSectionScroller>
          </PageSection>

          <PageSection>
            <PageSectionTitle>Barbearias Populares</PageSectionTitle>
            <PageSectionScroller>
              {popularBarbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
            </PageSectionScroller>
          </PageSection>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
