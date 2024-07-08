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

const page = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            {/* <Topbar></Topbar> */}
            {/* <Header></Header> */}
            {/* <SpcBanner></SpcBanner>
            <SpcForm></SpcForm>
            <Collection></Collection>
            <Broucher></Broucher>
            <SpcPage></SpcPage>
            <InstallationSteps></InstallationSteps>
            <div className="my-5">
            <CallToAction></CallToAction></div> */}
            {/* <Footer></Footer> */}
        </>

    )
}

export default page