import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import Image from "next/image";
import banner from "../public/banner.png";
import BookingItem from "@/components/booking-item";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do Zé"
          barbershopImageUrl="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png"
          status="Agendado"
          date={new Date("2024-07-15T14:30:00")}
        />
      </div>
    </main>
  );
}
