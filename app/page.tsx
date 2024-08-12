import CardSection from "@/components/CardSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <FeaturesSection />
      <CardSection />
      <PricingSection />
      <Footer/>
    </>
  );
}
