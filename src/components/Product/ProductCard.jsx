import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import './Filters.css';

const ProductCard = ({ frontImage, onHoverImage, title, cat_name, variation, prod_code, seo }) => {
    return (
        <>
            <div className="card productCard my-3 mx-0" style={{ width: '100%' }}>
                <Link href={`/productdetail/${seo}`}>
                    <div className='frontimage'>
                        <Image 
                            src={`/uploads/${frontImage}`} 
                            alt={`${title} - front view`} 
                            layout="responsive" 
                            width={500} 
                            height={500} 
                            objectFit="contain" 
                            className="card-img-top"
                        />
                    </div>
                    {
                        onHoverImage && 
                        <div className='onHoverimage'>
                            <Image 
                                src={`/uploads/${onHoverImage}`} 
                                alt={`${title} - hover view`} 
                                layout="responsive" 
                                width={500} 
                                height={500} 
                                objectFit="contain" 
                                className="card-img-top"
                            />
                        </div>
                    }
                </Link>

                <Link href={`/productdetail/${seo}`}>
                    <div className="card-body p-0 pb-1 text-center">
                        <span className="fw-semibold prdctName">{title}</span>
                        <p className='small darkBlue'>{cat_name} | {variation} | {prod_code}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ProductCard;
