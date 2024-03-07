"use client";

import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import SideNav from "./components/SideNav";
import DiskCard from "./components/DiskCard";
import TopAppInterface from "./components/TopAppInterface";
import FilterArchive from "./components/FilterArchive";
import ContainerArchives from "./components/ContainerArchives";
import Footer from "./components/Footer";

export default function Home() {
  const [subMenuOpen, setSubMenuOpen] = useState(true);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);

  return (
    <>
      <Header />

      <section className="mx-8 mt-3 mb-4 flex items-center justify-between">
        <Nav />
        <SearchForm />
      </section>

      <hr className="border-t border-[#747579] h-0.5" />

      <div className="flex pl-8">
        <section className="h-full w-[22vw] pt-6">
          <SideNav subMenuOpen={subMenuOpen} toggleSubMenu={toggleSubMenu} />

          <DiskCard />
          <div className="h-8 bg-transparent"></div>
        </section>

        <article className="flex flex-col w-[85vw] h-full border border-t-0 border-solid border-[#747579]">
          <TopAppInterface />

          <div className="px-4">
            <FilterArchive />

            <ContainerArchives />
          </div>

          <Footer />
        </article>
      </div>
    </>
  );
}
