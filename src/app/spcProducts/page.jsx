"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '@/components/Home/Footer/Footer'
import Header from '@/components/Home/Header/Header'
import Topbar from '@/components/Home/Topbar/Topbar'
import SpcBanner from '@/components/SpcProducts/SpcBanner'
import React, { useEffect, useState } from 'react'
import SpcForm from "@/components/SpcProducts/SpcForm";
import Collection from "@/components/SpcProducts/Collection";
import Broucher from "@/components/SpcProducts/Broucher";
import SpcPage from "@/components/SpcProducts/SpcPage/SpcPage";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import InstallationSteps from "@/components/SpcProducts/InstallationSteps";
import AboutSpc from "@/components/SpcProducts/AboutSpc";
import SpcStructer from "@/components/SpcProducts/SpcStructer";
import Features from "@/components/SpcProducts/Features";
import FeaturedRanges from "@/components/Home/Design/Featured_ranges";
import axios from "axios";
import Products from "@/components/Product/Products";
import Certifications from "@/components/Why-Samaro/Certifications/Certifications";

const page = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const spcLayers = [
        { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
        { name: "Wear layer", description: "The wear layer is the part between the UV layer and the decorative layer. The quality and thickness of the wear layer is your indicator for how well your floors will last over time." },
        { name: "Decor layer", description: "The high-quality finish layer gives the floor a realistic wood or stone grain effect, with a more designed look in terms of colour, pattern and texture." },
        { name: "Core layer", description: "The thickest and hardest layer of the entire SPC flooring. It is the core of the whole floor, made of stone powder and PVC resin powder fused and pressed together to make it completely waterproof. " },
        { name: "Underlayment:", description: "SPC floor coverings are made of EVA or IXPE and are generally pre-assembled from the manufacturer with thicknesses of 1.0mm – 1.5mm.These backings are used for sound reduction, heat retention and overall comfort." }
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
            title: 'Waterproof',
            description: 'Whether indoors or semi-outdoor areas (e.g., cafes or lobbies), SPC flooring maintains its quality across various weather conditions, reducing maintenance costs.',
            icon: 'fa-tint',
        },
    ];
    // const ranges = [
    //     { id: 1, name: 'Wood Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'WoodFinishImage.png' },
    //     { id: 2, name: 'Stone Finish', description: 'Add a touch of elegance and sophistication with our stunning stone-inspired flooring', img: 'StoneFinshImage4.png' },
    //     { id: 3, name: 'Ceramic Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'MarleFinishImage.png' }
    // ];

    const [ranges, setRanges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('api/admin/featuredRange')
            const data = response.data;
            const datawithCeramic = data.filter(item => item.name !== 'Ceramic Finish');
            setRanges(datawithCeramic);
          } catch (error) {
            console.error('Error fetching range data:', error);
          }
        }
        fetchData();

    }, [])


    return (
        <>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            <SpcBanner img={'spcBanner.jpg'}></SpcBanner>
            <AboutSpc
                title={"What is SPC ?"}
                desc={"Stone Plastic Composite (SPC) flooring is a type of rigid core luxury vinyl flooring known for its durability, waterproof nature, and realistic look. It's made from a blend of limestone, PVC, and stabilizers, making it highly resistant to dents, scratches, and moisture. Ideal for both residential and commercial use, SPC flooring is easy to install and maintain, offering a stylish and long-lasting flooring solution."}
                img={"spcLayer.png"}
                specificationTitle={"Layers of SPC Flooring "}
                layers={spcLayers}
                spc={true}

            />
            <FeaturedRanges ranges={ranges} />

            <SpcStructer />
            <Features
                features={features}
                title={"Key Features & Benefits of SPC Flooring"}

            />
            {/* <SpcForm></SpcForm> */}
            {/* <Collection></Collection> */}
            {/* <Broucher></Broucher> */}
            <div className="mt-lg-5 mt-md-5 mb-5">
                <Products></Products>
            </div>
            <Certifications/>
            {/* <InstallationSteps></InstallationSteps> */}
            <div className="my-5">
                <CallToAction></CallToAction></div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default page