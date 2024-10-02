"use client";

import { useEffect } from "react";

import Banner from "@/components/Home/Banner/Banner";
import Design from "@/components/Home/Design/Design";
import Spclvt from "@/components/Home/SPCLVT/Spclvt";
import Benefits from "@/components/Home/Benefits/Benefits";
import Social from "@/components/Home/Social/Social";
import Commercial from "@/components/Home/Commercial/Commercial";
import Residentail from "@/components/Home/Residential/Residentail";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import FloorExplorer from "@/components/Home/FloorExplorer/FloorExplorer";
import FollowMore from "@/components/Home/FollowMore/FollowMore";
import SpcForm from "@/components/SpcProducts/SpcForm";
import Testimonials from "@/components/Home/Testimonial/Testimonial";
import Featured_ranges from "@/components/Home/Design/Featured_ranges";

export default function Home() {
  const ranges = [
    { id: 1, name: 'Wood Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'WoodFinishImage.png' },
    { id: 2, name: 'Stone Finish', description: 'Add a touch of elegance and sophistication with our stunning stone-inspired flooring.', img: 'StoneFinshImage4.png' },
    { id: 3, name: 'Marble Finish', description: 'Stay tuned for our upcoming collection of luxurious marble-look flooring', img: 'MarleFinishImage.png' }
];
  return (
    <main>
      <Banner />
      <Spclvt />
      <Benefits />
      <div className="pt-5">
      {/* <Design /> */}
      <Featured_ranges ranges={ranges}/>
      </div>
      {/* <FloorExplorer /> */}
      {/* <Commercial />
      <Residentail /> */}
      
      <Testimonials></Testimonials>
      <div className="pt-lg-0 pt-5">
        <SpcForm></SpcForm>
      </div>
      {/* <CallToAction /> */}
      <div className="pt-lg-0 pt-md-0 py-5 ">
        <Social />
      </div>
      <FollowMore />
    </main>
  );
}
