import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import DownloadSwiper from "@/components/Downloadcenter/DownloadSwiper";
const DownloadBroch = ({ useRed }) => {
  const [brocardData, setBrochureData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin/main_dcPage");
        const data = response.data;

        const brochures = data.filter(
          (item) => item.dc_category == "Brochure"
        );
        setBrochureData(brochures);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DownloadSwiper
        title="Brochure"
        cardData={brocardData}
        active={activeCategory === "All" || activeCategory === "Brochure"}
      />
    </>
  );
};

export default DownloadBroch;
