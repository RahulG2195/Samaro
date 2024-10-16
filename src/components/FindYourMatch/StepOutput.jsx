"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import '@/components/FindYourMatch/findmatch.css';
import Link from 'next/link';
import axios from 'axios';


const StepOutput = ({ formData }) => {
  const [dummyProducts, setDummyProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/admin/products")
      const products = response.data;
      setDummyProducts(products);
    }
    fetchData()
  }, [])



  const filteredProducts = dummyProducts.filter(product => {
    const productType = product.cat_name?.toLowerCase() || '';
    const formType = formData.floorType?.toLowerCase() || '';
    const productColor = product.color?.toLowerCase() || '';
    const formColor = formData.color?.toLowerCase() || '';
    const productRooms = Array.isArray(product.place) ? product.rooms.map(room => room.toLowerCase()) : [];
    const formRoom = formData.room?.toLowerCase() || '';
    const productFeatures = Array.isArray(product.features) ? product.features.map(f => f.toLowerCase()) : [];
    const formFeatures = Array.isArray(formData.features) ? formData.features.map(f => f.toLowerCase()) : [];

    // Ensure type and color must match
    const typeMatches = productType === formType;
    const colorMatches = productColor === formColor;

    const roomMatches = !formRoom || productRooms.includes(formRoom);
    const featureMatches = formFeatures.length === 0 || formFeatures.some(feature => productFeatures.includes(feature));

    return typeMatches && colorMatches && (roomMatches || featureMatches);
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center p-5 ">
        <h3>No flooring solutions match your selected criteria.</h3>
        {/*  */}
      </div>
    );
  }

  const selectedProduct = filteredProducts[0];
  return (
    <>
      <section className='stepoutput_section my-md-5 my-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 order-md-0 order-1'>
              <div className='output-title'>
                <h3>Your ideal solution</h3>
              </div>
              <div className='prod_name_and_desc'>
                {/* <h6>Laminate flooring</h6> */}
                <h6>{selectedProduct.prod_name}</h6>
                <p>Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price.</p>
                {/* <p>{selectedProduct.description}</p> */}
              </div>
              <div className='prod_pointer py-2'>
                <ul>
                  {formData.features.map((feature, index) => (
                    <li key={index}><i className="fa-solid fa-check"></i> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className='prod_count'>
                <h5>See your 1 ideal floors</h5>
                <h5>Out of 256 flooring solutions, we've selected 1 floors that suit your project.</h5>
              </div>
              <div className='step_next_button'>
                {/* <Link href={'./productdetail'}> */}
                  <Link href={`/productdetail/${selectedProduct.seo_url}`}>
                  <button className='btn step_button discoverBtn py-1 px-4'> Discover all our floors</button></Link>
              </div>
            </div>
            <div className='col-md-5 order-md-1 order-0'>
              <div className='outputImg'>
                <Image src="/assets/images/Step/stepoutput.png" height={100} width={100} layout='responsive' objectFit='contain' alt='output img' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepOutput 