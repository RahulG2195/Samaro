"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '@/components/Home/Footer/Footer'
import Header from '@/components/Home/Header/Header'
import Topbar from '@/components/Home/Topbar/Topbar'
import SpcBanner from '@/components/SpcProducts/SpcBanner'
import React, { useEffect } from 'react'
import SpcForm from "@/components/SpcProducts/SpcForm";
import Collection from "@/components/SpcProducts/Collection";
import Broucher from "@/components/SpcProducts/Broucher";
import SpcPage from "@/components/SpcProducts/SpcPage/SpcPage";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import InstallationSteps from "@/components/SpcProducts/InstallationSteps";
import AboutSpc from "@/components/SpcProducts/AboutSpc";
import SpcStructer from "@/components/SpcProducts/SpcStructer";
import Features from "@/components/SpcProducts/Features";


const page = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const spcLayers = [
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." }
    ];

    const features = [
        {
            title: 'Scratch Resistant',
            description: 'Keeps the flooring looking fresh even with the wear and tear caused by active children, wheelchairs, or walking aids. Resistant to the damage caused by pet claws, ensuring your flooring stays flawless.',
            icon: 'fa-shield',
        },
        {
            title: 'Fire Resistant',
            description: 'Adds an extra layer of safety for families with young children and the elderly, as it reduces the risk of fire-related hazards.',
            icon: 'fa-fire',
        },
        {
            title: 'Termite Proof',
            description: 'No more worries about pest attacks that could harm the flooring, ensuring long-term durability and safety in homes.',
            icon: 'fa-bug',
        },
        {
            title: 'Durability',
            description: 'SPC flooring is highly durable, making it ideal for high-traffic areas such as offices, showrooms, and retail spaces, ensuring the floor can withstand daily wear and tear.',
            icon: 'fa-wrench',
        },
        {
            title: 'Weatherproof',
            description: 'Whether indoors or semi-outdoor areas (e.g., cafes or lobbies), SPC flooring maintains its quality across various weather conditions, reducing maintenance costs.',
            icon: 'fa-cloud',
        },
    ];
    return (
        <>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <SpcBanner></SpcBanner>
            <AboutSpc
                title={"What is SPC"}
                desc={"Stone Plastic Composite (SPC) flooring is a type of rigid core luxury vinyl flooring known for its durability, waterproof nature, and realistic look. It's made from a blend of limestone, PVC, and stabilizers, making it highly resistant to dents, scratches, and moisture. Ideal for both residential and commercial use, SPC flooring is easy to install and maintain, offering a stylish and long-lasting flooring solution."}
                img={"spcLayers.png"}
                specificationTitle={"Layers of SPC Flooring :"}
                layers={spcLayers}
                spc={true}

            />
            <SpcStructer />
            <Features
             features={features}
             title={"Key Features & Benefits of SPC Flooring"}

            />
            {/* <SpcForm></SpcForm> */}
            {/* <Collection></Collection> */}
            {/* <Broucher></Broucher> */}
            <SpcPage></SpcPage>
            <InstallationSteps></InstallationSteps>
            <div className="my-5">
                <CallToAction></CallToAction></div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default page