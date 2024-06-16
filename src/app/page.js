import Bangladesh from "@/components/Bangladesh";
import Hero from "@/components/Hero";
import National from "@/components/National";
import OpinionBankSurvey from "@/components/Opinion_bank_Survey";
import Politics from "@/components/Politics";
import VideoSlider from "@/components/VideoSlider";
import Ad from "@/components/Ad";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <Ad />
        <VideoSlider />
        <Ad />
        <OpinionBankSurvey />
        <Ad />
        <National />
        <Ad />
        <Politics />
        <Ad />
        <Bangladesh />
        <Ad />

      </div>
    </main>
  );
}
