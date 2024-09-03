"use client";
// import SubBanner from '../../Components/SubBanner/SubBanner';
import SubBanner from "@/components/Contactbanner/Banner";
import "../contact.css";
import SpcForm from "@/components/SpcProducts/SpcForm";
import Link from "next/link";
import Career from "@/components/Career/Career";
import Social from "@/components/Home/Social/Social";
import ContactMap from "@/components/ContactMap/ContactMap";
import Image from "next/image";
import { useEffect } from "react";
import { toast, Bounce } from "react-toastify";
export default function page() {
  return (
    <>
      <SubBanner></SubBanner>
      <section className="getintouch pb-5">
        <div className="container">
          <div className="section_heaing mx-auto text-center">
            <h1>
              <u className="border-3 border-bottom border-danger ">Contact</u> Us
            </h1>
            <span className="">Fill out the form below, and we'll get back to you as soon as possible.</span>
          </div>
        </div>
        <div className="container ">
          <div className=" row justify-content-center align-items-end">
            <div className=" col-md-3">
              <div className="contact-deskresp w-75">
                <Image
                  src="/assets/images/career/Image 357.png"
                  alt="Description of the image"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>
            <div className="col-md-7">
              <SpcForm
                hideguide={"hideguide"}
                contactformcol={"contactform-col"}
                pb={"py-0"}
                note={'We value your privacy. Your information will be kept confidential and will not be shared with third parties.'}
              ></SpcForm>
            </div>
          </div>
          <div className="my-5">
            <ContactMap></ContactMap>
          </div>

          <Career></Career>
          <div className="pt-4">
            <Social></Social>
          </div>
        </div>
      </section>
    </>
  );
}
