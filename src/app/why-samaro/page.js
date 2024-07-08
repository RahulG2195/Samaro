"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Home/Topbar/Topbar";
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/Footer/Footer";
import About from "@/components/Why-Samaro/About/About";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import Download from "@/components/Why-Samaro/Download/Download";
import Benefits from "@/components/Why-Samaro/Benefits/Benefits";
import Dimensions from "@/components/Why-Samaro/Dimensions/Dimensions";
import Certifications from "@/components/Why-Samaro/Certifications/Certifications";
import Vision from "@/components/Why-Samaro/Vision/Vision";
import Mission from "@/components/Why-Samaro/Mission/Mission";
import Design from "@/components/Why-Samaro/Design/Design";
import Banner from "@/components/Why-Samaro/Banner/Banner";
import SpcForm from "@/components/SpcProducts/SpcForm";

export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <main>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <Banner></Banner>
            <About></About>
            <Vision></Vision>
            {/* <Mission></Mission> */}
            <Design></Design>
            <Benefits></Benefits>
            <Certifications></Certifications>
            <Dimensions></Dimensions>
            <Download></Download>
            <div className="pb-5">
                {/* <CallToAction></CallToAction> */}
                <SpcForm></SpcForm>
            </div>
            {/* <Footer></Footer> */}
        </main>
    );
}
