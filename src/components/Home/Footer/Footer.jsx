import React, { useState } from "react";
import "./Footer.css";
import Form from "@/components/InquiryForm/Form";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useBasicInfo } from "@/components/BasicInfoContext";

const Footer = () => {
  const { basicInfo } = useBasicInfo();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing email:", error);
      setMessage("Failed to subscribe.");
      setEmail("");
    }
  };

  return (
    <>
      <footer className="custom-footer bg-navy text-light pb-3">
        <div className="row g-4 align-items-center">
          <div className="col-3 col-lg-5 col-md-5">
            <div className="line"></div>
          </div>
          <div className="col-6 col-lg-2 col-md-2 logo">
            {basicInfo.comp_footer_logo ? (
              <Image
                src={`/uploads/${basicInfo.comp_footer_logo}`}
                alt="Logo"
                width={150}
                height={38}
                loading="lazy"
              />
            ) : (
              <span></span>
            )}
          </div>
          <div className="col-3 col-lg-5 col-md-5">
            <div className="line"></div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-2 g-5">
            <div className="col-lg-4 col-md-12  ordr2">
              <div className="d-flex  justify-content-center gap-5">
                <div className=" justify-content-center ">
                  <h3 className="footer-headings mb-3 text-white ">About Us</h3>
                  <ul className="ps-0 d-flex flex-column footer-links gap-2">
                    <li>
                      <Link href="/downloadCenter">Articles</Link>
                    </li>
                    {/* <li><Link href="/newsletter">News and Events</Link></li> */}
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="align-items-center">
                  <h3 className="footer-headings mb-3 text-white ">Products</h3>
                  <ul className="ps-0 d-flex flex-column footer-links gap-2 ">
                    <li>
                      <Link href="/product/All">SPC Flooring</Link>
                    </li>
                    <li>
                      <Link href="/product/All">LVT Flooring</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ordr3">
              <div className="d-flex gap-3">
                <address className="d-flex">
                  <div className="me-2 ">
                    <img
                      src="/assets/images/icons/Group 57.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  {basicInfo.address}
                </address>
              </div>
              <div className="contact-details d-flex gap-5 mt-2 mb-3">
                <div className="mail">
                  <img src="/assets/images/home/topbar/mail.png" alt="" />
                  <a href="mailto:">{basicInfo.email1}</a>
                </div>
                <div className="phone">
                  <img src="/assets/images/home/topbar/phone.png" alt="" />
                  <a href="tel:">{basicInfo.mobile_no_1}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ps-md-5 mt-0  ordr1">
              <img
                src="/assets/images/home/footer/1000_F_435229236_4nOQpFgQ8bzvj60ff4B5eBcGSEdTyG2s.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-2 bg-white text-center">
        <p className="text-navy mb-0 small">
          Copyright © 2024 Samaro |{" "}
          <a href="https://crezvatic.com/" target="_blank">
            Powered by Crezvatic PVT. LTD.
          </a>
        </p>
      </div>

      {/* popup form */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <button
              type="button"
              className="btn-close p-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body p-0">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>

        <div className="icon-bar rounded d-flex text-center">
          <a href="/contact-us" className="text-white  ">
            Contact Us
          </a>
        </div>
    </>
  );
};

export default Footer;
