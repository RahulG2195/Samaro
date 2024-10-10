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
import Certifications from "@/components/Why-Samaro/Certifications/Certifications";

const page = () => {

    const lvtLayers = [
        {
          name: 'UV Coating',
          description: 'The top protective layer that shields the surface from fading and damage from sunlight.',
        },
        {
          name: 'Wear Layer',
          description: 'Provides scratch, stain, and wear resistance. Thicker wear layers result in more durability.',
        },
        {
          name: 'Printed Design Layer',
          description: 'Offers a high-resolution print of wood, stone, or tile patterns, delivering an authentic look.',
        },
        {
          name: 'Vinyl Core Layer',
          description: 'Ensures flexibility and resilience, allowing the tile to bend without breaking.',
        },
      ];

    const lvtFeatures = [
        {
            title: "Realistic Appearance",
            description: "High-resolution prints make LVT flooring look and feel like natural materials such as wood or stone, offering a luxurious appearance.",
            icon: "fa fa-eye"
        },
        {
            title: "Waterproof",
            description: "Perfect for moisture-prone areas like bathrooms and kitchens, making it highly practical for households.",
            icon: "fa fa-tint"
        },
        {
            title: "Comfort",
            description: "Softer and warmer underfoot than traditional tiles, offering greater comfort in residential and commercial settings.",
            icon: "fa fa-bed"
        },
        {
            title: "Durable & Low Maintenance",
            description: "Highly durable and resistant to everyday wear and tear, with easy cleaning and minimal upkeep.",
            icon: "fa fa-shield"
        },
        {
            title: "Flexible Installation Options",
            description: "Available in both glue-down and click-and-lock formats, providing flexibility in installation methods.",
            icon: "fa fa-cogs"
        },
        {
            title: "Sound Insulation",
            description: "Helps to reduce noise, making it ideal for apartments, offices, or spaces with high foot traffic.",
            icon: "fa fa-volume-up"
        }
    ];


    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <SpcBanner img={'lvtBanner.jpg'}></SpcBanner>
            <AboutSpc
                title={"What is LVT"}
                desc={"LVT stands for Luxury Vinyl Tile, designed to mimic natural flooring materials like wood, stone, or ceramic tiles.Composed of multiple layers, including a durable wear layer, realistic print layer, and a vinyl core that adds flexibility and comfort.Samaro's Focus: Offering high-quality, stylish, and durable LVT options for both residential and commercial spaces."}
                img={"spcLayers.png"}
                specificationTitle={"Composition Of LVT Flooring"}
                layers={lvtLayers}

            />
            {/* <SpcStructer /> */}
            <Features
                features={lvtFeatures}
                title={"Key Features & Benefits Of LVT Flooring"}
            />
            {/* <SpcForm></SpcForm> */}
            {/* <Collection></Collection> */}
            {/* <Broucher></Broucher> */}
            <SpcPage></SpcPage>
            {/* <Certifications/> */}
            {/* <InstallationSteps></InstallationSteps> */}
            <div className="my-5">
                <CallToAction></CallToAction></div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default page