"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Banner from "@/components/Home/Banner/Banner";
import Spclvt from "@/components/Home/SPCLVT/Spclvt";
import Featured_ranges from "@/components/Home/Design/Featured_ranges";
import axios from "axios";

const Benefits = dynamic(() => import("@/components/Home/Benefits/Benefits"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Home/Testimonial/Testimonial"), { ssr: false });
const SpcForm = dynamic(() => import("@/components/SpcProducts/SpcForm"), { ssr: false });
const Social = dynamic(() => import("@/components/Home/Social/Social"), { ssr: false });
const FollowMore = dynamic(() => import("@/components/Home/FollowMore/FollowMore"), { ssr: false });

export default function Home() {
  const [ranges, setRanges] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/admin/featuredRange')
        const data = response.data;
        const datawithoutCeramic = data.filter(item => item.name !== 'Ceramic Finish')
        setRanges(datawithoutCeramic)
      } catch (error) {
        console.error('Error fetching range data:', error);
      }
    }
    fetchData();

  }, [])



  return (
    <main>
      <Banner />
      <Spclvt />
      <Benefits />
      <div className="pt-5">
        <Featured_ranges ranges={ranges} />
      </div>

      <Testimonials></Testimonials>
      <div className="pt-lg-0 pt-5">
        <SpcForm></SpcForm>
      </div>
      <div className="pt-lg-0 pt-md-0 py-5 ">
        <Social />
      </div>
      <FollowMore />
    </main>
  );
}
