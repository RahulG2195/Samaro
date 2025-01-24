"use client";
import "bootstrap/dist/css/bootstrap.min.css";
// import Topbar from "../../components/Home/Topbar/Topbar";
import { useEffect } from "react";
import Products from "@/components/Product/Products";
// import SpcBanner from "../../../components/SpcProducts/SpcBanner";
import ProductBanner from "@/components/Product/ProductBanner";
import SpcForm from "@/components/SpcProducts/SpcForm";
import Download from "@/components/Why-Samaro/Download/Download";
import Inspiration from "@/components/Home/Social/Inspiration";

export default function Home() {


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main>
      {/* <Topbar></Topbar> */}
      {/* <Header></Header> */}
      {/* <SpcBanner></SpcBanner> */}
      <ProductBanner></ProductBanner>
      <div className="mt-lg-5 mt-md-5 mb-5">
        <Products></Products>
      </div>
      <SpcForm></SpcForm>
      <Download useRed={"redimg"}></Download>
      <Inspiration></Inspiration>

      {/* <Footer></Footer> */}
    </main>
  );
}
