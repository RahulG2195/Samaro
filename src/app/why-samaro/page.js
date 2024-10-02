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
import Team from "@/components/Why-Samaro/Team/Team";
import Timeline from "@/components/Why-Samaro/Timeline/Timeline";

export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const cardData = [
        {
            id: 1,
            icon: "70Years-01.webp",
            title: "70+ Years of Excellence",
            text: "Over seven decades of experience in plastics manufacturing, making us leaders in innovation and high-quality flooring solutions."
        },
        {
            id: 2,
            icon: "Herringbone(SPC)-01.webp",
            title: "Largest SPC and LVT flooring producer",
            text: "Delivering advanced, durable flooring to homes, businesses, and public spaces worldwide."
        },
        {
            id: 3,
            icon: "Growing-01.webp",
            title: "Fastest-Growing SPC Manufacturer",
            text: " Consistent capacity expansion—30% increase in the next 4 months, enabling us to stay ahead in the market."
        },
        {
            id: 4,
            icon: "ProvenQuality-01.webp", 
            title: "Proven Quality",
            text: "Our products undergo over 30+ rigorous tests to ensure they meet the highest industry standards."
        },
       
        {
            id: 5,
            icon: "WarrantyIcon-01.webp", 
            title: "Comprehensive Warranty",
            text: "We offer a comprehensive 10-year warranty on residential projects and 5 year warranty on commercial projects."
        },
        {
            id: 6,
            icon: "EndtoEnd-01.webp", 
            title: "End-to-End Support",
            text: "From consultation to post-sale support, we ensure a seamless, satisfying experience for every customer."
        },
    ];
    return (
        <main>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <Banner></Banner>
            <About></About>
            <Timeline/>
            <Vision></Vision>
            {/* <Mission></Mission> */}


            <div className="container my-5">
                <h1 className="text-center my-5 text-navy fw-bold"><u className="border-3 border-bottom border-danger ">Why Choose Samaro?</u> </h1>
                <div className="row">
                    {cardData.map(card => (
                        <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 rounded">
                            <div className="card p-2 shadow-lg why_cust_Card" style={{minHeight:'250px'}}>
                                <div className="card-icon mx-auto py-2">
                                    <img src={`/assets/newicons/WhyChooseUS/${card.icon}`} alt="err"></img>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-darkred">{card.title}</h5>
                                    <p className="card-text text-navy fw-semibold">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




            <Team></Team>
            {/* <Design></Design> */}
            {/* <Benefits></Benefits> */}
            {/* <Certifications></Certifications> */}
            {/* <Dimensions></Dimensions> */}
            {/* <Download></Download> */}
            <div className="pb-5">
                {/* <CallToAction></CallToAction> */}
                <SpcForm></SpcForm>
            </div>
            {/* <Footer></Footer> */}
        </main>
    );
}
