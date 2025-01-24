"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/components/Home/Topbar/Topbar";
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";


export default function Home() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <main className="mb-5">
            <Gallery></Gallery>
        </main>
    );
}
