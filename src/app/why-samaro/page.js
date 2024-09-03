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

export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const cardData = [
        {
            id: 1,
            icon: "fas fa-check-circle",
            title: "Proven Quality",
            text: "Our products undergo rigorous testing to ensure they meet the highest industry standards."
        },
        {
            id: 2,
            icon: "fas fa-shield-alt",
            title: "Comprehensive Warranty",
            text: "We offer a warranty that provides peace of mind, knowing your investment is protected."
        },
        {
            id: 3,
            icon: "fas fa-leaf",
            title: "Sustainable Practices",
            text: "Our eco-friendly production processes and use of recyclable materials reflect our commitment to sustainability."
        },
        {
            id: 4,
            icon: "fas fa-users",
            title: "Expert Support",
            text: "From initial consultation to installation, our team is with you every step of the way, ensuring a seamless experience."
        }
    ];
    return (
        <main>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <Banner></Banner>
            <About></About>
            <Vision></Vision>
            {/* <Mission></Mission> */}


            <div className="container my-5">
                <h1 className="text-center my-5 text-navy fw-bold">Why Choose Samaro?</h1>
                <div className="row">
                    {cardData.map(card => (
                        <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 mb-4 rounded">
                            <div className="card p-2 shadow-lg why_cust_Card" style={{minHeight:'250px'}}>
                                <div className="card-icon mx-auto">
                                    <i className={`${card.icon} fs-1`} ></i>
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
