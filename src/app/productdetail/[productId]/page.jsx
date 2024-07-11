"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import ProductFeature from "@/components/ProductDetail/ProductFeature";
import ProdTable from "@/components/ProductDetail/ProdTable";
import Design from "@/components/ProductDetail/Design";
import DownloadBroch from "@/components/ProductDetail/DownloadBroch";
import SimilarProd from "@/components/ProductDetail/SimilarProd";
import Inspiration from "@/components/Home/Social/Inspiration";
import ProductSwipper from "@/components/ProductDetail/ProductSwipper";
import "@/components/ProductDetail/productdetail.css";
import DetailsNewSection from "@/components/ProductDetail/DetailsNewSection";
import { useParams } from "next/navigation";
import axios from "axios";


const Home = () => {
  const router = useParams();
  const id  = router.productId

  const [prodDetail, setProdDetail] = useState([]);

  useEffect(() => {

    const getProduct = async () => {
      try {
        const response = await axios.post('/api/products', {id});
        const rawData = response.data[0];


        setProdDetail(rawData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    getProduct();
  }, []);




  const prod_features = [
    {
      key: "1",
      image: "/assets/images/icons/Group 126.svg",
      title: "Water resistant",
      desc: "Say goodbye to moisture problems by choosing for a water resistant Samaro floor. These floors don't just look exceptionally stylish and natural, they are also 100% resistant to surface moisture, which makes cleaning easier than ever!",
    },
    {
      key: "2",
      image: "/assets/images/icons/Group 117.svg",
      title: "Scratch & Stain Guard",
      desc: "Enjoy your vinyl floor for many years to come thanks to the sealed top layer with Stain and Scratch Guard technology. This layer ensures superior protection from scratches, stains, dirt and scuff marks.",
    },
    {
      key: "3",
      image: "/assets/images/icons/Group 115.svg",
      title: "Click-n-lock",
      desc: "Samaro is the inventor of the Uniclic installation system, today the standard click-to-install system. Use the revolutionary and patented click system to effortlessly click your floor planks together.",
    },
    {
      key: "4",
      image: "/assets/images/icons/Group 132.svg",
      title: "100% RECYCLABLE",
      desc: "Samaro is much more than just floors. For every floor we offer, you can find a full collection of accessories, including underlays, finishing profiles and skirting boards that perfectly match the colour of your floor.",
    },
  ];

  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  // const images = [
  //   {
  //     id: 1,
  //     url: "assets/images/products/lg1.png",
  //     alt: "large image",
  //   },
  //   {
  //     id: 2,
  //     url: "assets/images/products/sm1.png",
  //     alt: "large image",
  //   },
  //   {
  //     id: 3,
  //     url: "assets/images/products/sm2.png",
  //     alt: "large image",
  //   },
  //   {
  //     id: 4,
  //     url: "assets/images/products/sm3.png",
  //     alt: "large image",
  //   },
  //   {
  //     id: 5,
  //     url: "assets/images/products/sm4.png",
  //     alt: "large image",
  //   },
  //   {
  //     id: 6,
  //     url: "assets/images/products/sm5.png",
  //     alt: "large image",
  //   },
  // ];

  // data for product details table
  // ####################Description table data #########################
  const descriptionData = [
    {
      description: " Light stability for color fastness	",
      standardTest: "ASTM F1515",
    },
    {
      description: "Dimensional stability  ",
      standardTest: "ASTM F2199",
    },
    {
      description: " Curling  ",
      standardTest: "180 23999",
    },
    {
      description: " Short term indentation	  ",
      standardTest: " ASTM F1914",
    },
    {
      description: " Product thickness  ",
      standardTest: "	ASTM F386",
    },
    {
      description: "Wear layer thickness	  ",
      standardTest: "  ASTM F410",
    },
    {
      description: "Size and squareness	  ",
      standardTest: " ASTM F2055",
    },
    {
      description: "Smoke density flaming  ",
      standardTest: "	ASTM E662",
    },
    {
      description: "Static of coefficient friction  ",
      standardTest: " C1028",
    },
    {
      description: "Resistance to impact  ",
      standardTest: "ASTM F1265",
    },
    {
      description: "Stain cleanability	  ",
      standardTest: "NALFA 34",
    },

    {
      description: " Abrasion resistance	  ",
      standardTest: "ASTM D4060",
    },

    {
      description: " Critical radiant flux  ",
      standardTest: "ASTM E648",
    },
  ];
  // ############################# Specification tables data ####################

  const specificationData = [
    {
      specification: "Wear layer ",
      Tiles: "	0.3mm			",
    },

    {
      specification: "Finish ",
      Tiles: "	Classic wood, modern oak and rough hand-craped wood",
    },

    {
      specification: "Size ",
      Tiles: '	Plank 7.13" x 48.03" inches ',
    },

    {
      specification: "Thickness ",
      Tiles: "4mm",
    },

    {
      specification: "Edge proof ",
      Tiles: "Micro bevel edge	",
    },

    {
      specification: " Construction ",
      Tiles: "	Heterogeneous	",
    },

    {
      specification: "Attached ",
      Tiles: "underlayment	Additional underlay to be added",
    },

    {
      specification: "Installation ",
      Tiles: "Method	Click and lock",
    },
  ];


  return (
    <>
      <section className="product-data_sec mt-md-5 mt-2">
        <div className="container">
          <div className="row justify-content-end ">
            <div className="col-md-6 col-12 col-xl-5 position-relative ">
              <ProductSwipper images={[prodDetail.prod_images, prodDetail.prod_image2]}  />
            </div>
            <div className="col-md-6 col-12 col-xl-5 prodDetailTXT">
              <div className="prod_name_lg">
                <h2>{prodDetail.prod_name}</h2>
                <span>{prodDetail.cat_name} | {prodDetail.variation} | {prodDetail.prod_code}</span>
              </div>
              {/*####################################### product description table ######################################## */}
              <div className="DescriptionTable">
                <div className="mt-4">
                  <div className="d-flex gap-1">
                    <div className="w-100">
                      <p className="bg-danger m-0 text-center py-2 text-white fw-semibold">
                        DESCRIPTION
                      </p>
                    </div>
                    <div className="w-100">
                      <p className="bg-danger py-2 m-0 text-center text-white fw-semibold ">
                        STANDARD TEST
                      </p>
                    </div>
                  </div>
                  {descriptionData.map((row, index) => (
                    <div
                      className="d-flex border-bottom border-dark-subtle gap-3"
                      key={index}
                    >
                      <p className="w-100 m-0">{row.description}</p>
                      <p
                        className="w-100 m-0 px-2"
                        style={{ backgroundColor: "#E0E1E3" }}
                      >
                        {row.standardTest}
                      </p>
                    </div>
                  ))}
                </div>

                {/*################################## product description table end ############################################*/}

                {/*################################## Products specification table ##########################################*/}

                <div className="mt-4">
                  <div className="d-flex gap-1">
                    <div className="w-100">
                      <p className="bg-danger m-0 text-center py-2 text-white fw-semibold detailSpecificationTbl">
                        SPECIFICATIONS
                      </p>
                    </div>
                    <div className="w-100">
                      <p className="bg-danger m-0 text-center text-white fw-semibold longTxtTiles">
                        SAMARO LAMINATE PERFORMANCE TILES
                      </p>
                    </div>
                  </div>
                  {specificationData.map((row, index) => (
                    <div
                      className="d-flex border-bottom border-dark-subtle gap-3"
                      key={index}
                    >
                      <p className="w-100 m-0">{row.specification}</p>
                      <p
                        className="w-100 m-0 px-2"
                        style={{ backgroundColor: "#E0E1E3" }}
                      >
                        {row.Tiles}
                      </p>
                    </div>
                  ))}
                </div>

                {/*#################################### Products specification table  ############################################*/}
              </div>
            </div>
          </div>
        </div>

        {/* ################# product details section ################### */}
      </section>
      {/* <section className="productDetail_data my-md-5 my-2">
        <div className="container">
          <div className="sec_head">
            <h3 className="text-capitalize py-md-4 py-2 text-center">
              <strong> Product Details</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="inner_sub_head">
                <h4 className="fw-semibold text-navy">Product features</h4>
              </div>
              {prod_features.map((val) => (
                <ProductFeature
                  key={val.key}
                  img={val.image}
                  desc={val.desc}
                  title={val.title}
                />
              ))}
            </div>
            <div className="col-md-5">
              <div className="dimension">
                <div className="inner_sub_head">
                  <h4 className="m-0 fw-semibold text-navy">Dimensions</h4>
                  <ProdTable />
                </div>
              </div>
              <div className="Design">
                <div className="inner_sub_head">
                  <h4 className="fw-semibold text-navy">Design</h4>
                  <Design />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="pt-5">

      {prodDetail.cat_name == 'SPC' ? <DetailsNewSection /> : null}
      </div>

      {/* product details new section */}

      <section className="inspectionBanner ">
        <div className="inspection_heading d-md-flex py-md-3 mx-auto text-center justify-content-center align-items-center">
          <h2 className="text-white propInspec m-0">
            Get your Property Inspection
          </h2>
          {/* <button className='freecallbtn'>Get A Free call</button> */}
          <p
            className="mobilebutton button mt-3 fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Get A Free Call
          </p>
        </div>
      </section>
      {/* download brochue section  */}
      <DownloadBroch />
      {/* download brochue section  end */}

      {/* Similar product Start */}
      <SimilarProd Title1="Similar" Title2="Floors" id={prodDetail.cat_id} />
      {/* Similar product end */}

      {/* More Flooring Start */}
      <SimilarProd Title1="More" Title2="Flooring" variation={'All'}/>
      {/* More Flooring end */}
      <Inspiration />
    </>
  );
};

export default Home;
