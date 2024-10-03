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
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import axios from "axios";
export default function page() {

  const [basicInfo, setBasicInfo] = useState({
    email1: "",
    email2: "",
    mobile_no_1: "",
    mobile_no_2: "",
    address: "",
    facebook_url: "",
    insta_url: "",
    linkedin_url: "",
    youtube_url: "",
    map_url: "",
  });
  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const response = await axios.get("/api/admin/basicInfo");
        const info = response.data;
        setBasicInfo(info);
      } catch (error) {
        console.error("Error fetching basic info:", error);
      }
    };

    fetchBasicInfo();
  }, []);


  return (
    <>
      <SubBanner></SubBanner>
      <section className="getintouch pb-5">
        <div className="containe">
          <div className="section_heaing mx-auto text-center">
            <h1 className="text-capitalize">
              <u className="border-3 border-bottom border-danger text-navy">Contact Us</u>
            </h1>
            <span className="">Fill out the form below, and we'll get back to you as soon as possible.</span>
          </div>
        </div>
        <div className="container ">
          <div className=" row justify-content-center align-items-center">
            {/* <div className=" col-md-3"> */}
            {/* <div className="contact-deskresp w-75">
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
              </div> */}

            <div className="inner-head-office col-lg-4 col-md-4 col-12 ">
              <div className="row ">
                <div className=" ">
                  <div className="office_heading">
                    <div className='pb-'>
                      <h5 className="text-Capitalize m-0 fw-bold"> Contact Information</h5>
                      <span>Say something to start a live chat!</span>
                    </div>
                    <address className='py-4'>
                      <h3 className='fw-bold'>For Enquires</h3>
                      <div><span>{basicInfo.email1}</span></div>
                      <div><span>{basicInfo.email2}</span></div>
                    </address>
                    <h3 className='fw-bold'>Head Office</h3>
                    <address>{basicInfo.address}</address>

                    <div className="social-media pt-5 justify-content-start align-items-center">
                      <div className="logo text-center">
                        <Link href="/#">
                          <span className='text-white '>Follow More</span>
                        </Link>
                      </div>
                      <div className="social-media-inner gap-3">
                        <div className="facebook">
                          <Link href={basicInfo.facebook_url}>
                            <img className="img " src="/assets/images/social-media/fb.png" alt="" />
                          </Link>
                        </div>
                        <div className="isntagram">
                          <Link href={basicInfo.insta_url}>
                            <img className="img" src="/assets/images/social-media/instagram.png" alt="" />
                          </Link>
                        </div>
                        {/* <div className="x">
                          <Link href={basicInfo.linkedin_url}>
                            <img className="img" src="/assets/images/social-media/x.png" alt="" />
                          </Link>
                        </div> */}
                        <div className="youtube">
                          <Link href={basicInfo.youtube_url}>
                            <img className="img" src="/assets/images/social-media/yt.png" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
            <div className="col-md-7 ">
              <SpcForm
                centerHeading={true}
                hideguide={"hideguide"}
                contactformcol={"contactform-col"}
                pb={"py-0"}
                note={'We value your privacy. Your information will be kept confidential and will not be shared with third parties.'}
              ></SpcForm>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <ContactMap></ContactMap>
          </div>

          <Career></Career>
          <div className="pt-4">
            <Social></Social>
          </div>
        </div>
      </section >
    </>
  );
}
