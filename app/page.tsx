"use client";
import Cards from "../components/ui-kits/cards/page";
import Table from "../components/ui-kits/table/page";

import 'primeicons/primeicons.css';
        
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Cards />
        <Table />
      </section>
    </RecoilRoot>
  );
}
