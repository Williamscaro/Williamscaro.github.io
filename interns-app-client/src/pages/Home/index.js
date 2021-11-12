import React from "react";
import Footer from "../../components/landing/Footer";
import Header from "../../components/landing/home/HomeHeader";
import HeroSection from "../../components/landing/home/HeroSection";
export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <Footer />
    </>
  );
}
const AplicarBtn = () => {
  return (
  <button>Aplicar</button>
  )
} 