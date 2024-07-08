// import React from 'react'
// import Image from 'next/image';
// import '@/components/FindYourMatch/findmatch.css';
// import Link from 'next/link';



// const dummyProducts = [
//     {
//         id: 1,
//         name: 'Product 1',
//         type: 'SPC',
//         color: 'Black',
//         rooms: ['Bedroom', 'Bathroom'],
//         features: ['Authentic Texture', 'Budget Friendly'],
//         image: '1.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         type: 'LVT',
//         color: 'Beige',
//         rooms: ['Entrance', 'Living Room'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Supreme scratch resistance'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         type: 'LVT',
//         color: 'Blue',
//         rooms: ['Home office', 'Entrance'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Soft & silent'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         type: 'LVT',
//         color: 'Dark brown',
//         rooms: ['Living room', 'Kitchen'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Renovation friendly'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 5,
//         name: 'Product 5',
//         type: 'LVT',
//         color: 'Dark grey',
//         rooms: ['Nursery', 'Living Room'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Supreme scratch resistance'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 6,
//         name: 'Product 6',
//         type: 'LVT',
//         color: 'Green',
//         rooms: ['Bedroom', 'Kitchen'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Renovation friendly', 'Supreme scratch resistance'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 7,
//         name: 'Product 6',
//         type: 'LVT',
//         color: 'Light grey',
//         rooms: ['Entrance hall', 'Living Room'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Soft & silent'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 8,
//         name: 'Product 6',
//         type: 'LVT',
//         color: 'Natural',
//         rooms: ['Home office', 'Living Room'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Supreme scratch resistance'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
//     {
//         id: 9,
//         name: 'Product 6',
//         type: 'LVT',
//         color: 'Pink',
//         rooms: ['Bedroom', 'Nursery'],
//         features: ['Authentic Texture', 'Budget Friendly', 'Soft & silent'],
//         image: '2.png',
//         description: "Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price."
//     },
// ];

// const StepOutput = ({ formData }) => {
//     const filteredProducts = dummyProducts.filter(product => {
//         const productType = product.type?.toLowerCase();
//         const formType = formData.floorType?.toLowerCase();
//         const productColor = product.color?.toLowerCase();
//         const formColor = formData.color?.toLowerCase();
//         const productRooms = Array.isArray(product.rooms) ? product.rooms.map(room => room.toLowerCase()) : [];
//         const formRoom = formData.room?.toLowerCase();
//         const productFeatures = Array.isArray(product.features) ? product.features.map(f => f.toLowerCase()) : [];
//         const formFeatures = Array.isArray(formData.features) ? formData.features.map(f => f.toLowerCase()) : [];

//         // Ensure type and color must match
//         const typeMatches = productType === formType;
//         const colorMatches = productColor === formColor;

//         // Check if any of the form rooms or features match the product's rooms or features
//         const roomMatches = !formRoom || productRooms.includes(formRoom);
//         const featureMatches = formFeatures.length === 0 || formFeatures.some(feature => productFeatures.includes(feature));

//         // Only return products if type and color match, and at least one room or feature matches
//         return typeMatches && colorMatches && (roomMatches || featureMatches);
//     });
//     const selectedProduct = filteredProducts[0];
//     console.log("filtered products are ", filteredProducts)
//     return (
//         <>
//             <section className='stepoutput_section my-md-5 my-3'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-7 order-md-0 order-1'>
//                             <div className='output-title'>
//                                 <h3>Your ideal solution</h3>
//                             </div>
//                             <div className='prod_name_and_desc'>
//                                 {/* <h6>Laminate flooring</h6> */}
//                                 <h6>{selectedProduct.name}</h6>
//                                 {/* <p>Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price.</p> */}
//                                 <p>{selectedProduct.description}</p>
//                             </div>
//                             <div className='prod_pointer py-2'>
//                                 <ul>
//                                     {selectedProduct.features.map((feature, index) => (
//                                         <li key={index}><i className="fa-solid fa-check"></i> {feature}</li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className='prod_count'>
//                                 <h5>See your 1 ideal floors</h5>
//                                 <h5>Out of 256 flooring solutions, we've selected 1 floors that suit your project.</h5>
//                             </div>
//                             <div className='step_next_button'>
//                                 <Link href={'./productdetail'}>
//                                     {/* <Link href={`/productdetail/${seo_url}`}> */}
//                                     <button className='btn step_button discoverBtn py-1 px-4'> Discover all our floors</button></Link>
//                             </div>
//                         </div>
//                         <div className='col-md-5 order-md-1 order-0'>
//                             <div className='outputImg'>
//                                 <Image src="/assets/images/Step/stepoutput.png" height={100} width={100} layout='responsive' objectFit='contain' alt='output img' />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default StepOutput 