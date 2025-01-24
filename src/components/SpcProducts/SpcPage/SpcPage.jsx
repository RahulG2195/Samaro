'use client'
import Filters from '@/components/Product/Filters'
import ProductCard from '@/components/Product/ProductCard'
import Products from '@/components/Product/Products'
// import "@/components/Home/Social/Social.css";
import Inspiration from '@/components/Home/Social/Inspiration';
import { useEffect, useRef, useState } from 'react';
import axios, { all } from 'axios';
import { useRouter } from 'next/navigation';

const SpcPage = () => {
    const variation = "All";
    const router = useRouter();
    const productsDatas = [
        { frontImage: "502 - Swiss light WITHOUT INSTALLATION.webp", onHoverImage: "503 - Tulip tree INSTALLATION.webp", title: "Pure oak honeys", description: "VINYL | CRIO | AVHBU40360" },


        // Adjust paths as necessary for additional products
    ];

    // const [productsArr , setProductsArr] = useState();
    const [productsData, setProductsData] = useState([productsDatas]);
    const [showInteriorPictures, setShowInteriorPictures] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCatalogues, setSelectedCatalogues] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const effectRan = useRef(false);


    useEffect(() => {
        if (effectRan.current === false) {
            const getProducts = async () => {
                try {
                    const response = await axios.get("/api/products", {
                        params: {
                            variation: variation,
                        }
                    });
                    const products = response.data;
                    console.log("productsData" + JSON.stringify(products));
                    setProductsData(products);
                    setFilteredProducts(products);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };
            getProducts();
            effectRan.current = true;
        }
    }, [variation]);

    const applyFilters = () => {
        const filtered = productsData.filter(product => {
            const matchesProduct = selectedProduct ? product.cat_name.toLowerCase() === selectedProduct : true;
            const matchesCatalogues = selectedCatalogues.length > 0 ? selectedCatalogues.includes(product.prod_catalogue.toLowerCase()) : true;
            const matchesTypes = selectedTypes.length > 0 ? selectedTypes.includes(product.variation.toLowerCase()) : true;
            const matchesColors = selectedColors.length > 0 ? selectedColors.includes(product.color.toLowerCase()) : true;
            const matchesPlaces = selectedPlaces.length > 0 ? selectedPlaces.includes(product.place.toLowerCase()) : true;
            const matchesSearchQuery = searchQuery ? product.prod_name.toLowerCase().includes(searchQuery.toLowerCase()) : true;

            return matchesProduct && matchesCatalogues && matchesTypes && matchesColors && matchesPlaces && matchesSearchQuery;
        });

        setFilteredProducts(filtered);
    };

    // useEffect(() => {
    //     applyFilters();
    // }, [selectedProduct, selectedCatalogues, selectedTypes, selectedColors, selectedPlaces, searchQuery, productsData]);

    // const handleCheckboxChange = () => {
    //     setShowInteriorPictures(!showInteriorPictures);
    // };

    const handleProductChange = (event) => {
        if(event.target.value == "spc"){
        router.push('/spcProducts');
        }else if (event.target.value == "lvt"){
        router.push(`/lvtProducts`);
        }
        setSelectedProduct(event.target.value);
    };

    const handleCatalogueChange = (event) => {
        const { value, checked } = event.target;

        if (value === 'all') {
            if (checked) {
                // Include all options
                handleCatalogueChange({ target: { value: 'sicilian', checked: true } });
                handleCatalogueChange({ target: { value: 'tuscany', checked: true } });
                handleCatalogueChange({ target: { value: 'lvt 1', checked: true } });
                handleCatalogueChange({ target: { value: 'lvt 2', checked: true } });
                handleCatalogueChange({ target: { value: 'others', checked: true } });
                setSelectedCatalogues(['all', 'sicilian', 'tuscany', 'lvt 1', 'lvt 2', 'others']);
            } else {
                // Exclude all options
                setSelectedCatalogues([]);
            }
        } else {
            // For individual options
            if (checked) {
                setSelectedCatalogues((prevSelected) => [...prevSelected, value]);
            } else {
                setSelectedCatalogues((prevSelected) =>
                    prevSelected.filter((item) => item !== value && item !== 'all')
                );
            }
        }
    };

    const handleTypeChange = (event) => {
        const { value } = event.target;

        setSelectedTypes(prev =>
            prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        );

        if (variation.toLowerCase() === value) {
            router.push('/product/All');
        } else {
            //   router.push(`/product/${value}`);
        }
    };

    const handleColorChange = (event) => {
        const value = event.target.value;
        setSelectedColors(prev =>
            prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
        );
    };

    const handlePlaceChange = (event) => {
        const value = event.target.value;
        setSelectedPlaces(prev =>
            prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
        );
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <>
            <div className="pe-5 ps-3 position-relative prdctContainer">
                <div className="row">
                    {/* Filters */}
                    <div className="col-md-2 ">
                        <Filters
                            totalCount={productsData.length}
                            resultCount={filteredProducts.length}
                            selectedProduct={selectedProduct}
                            handleProductChange={handleProductChange}
                            selectedCatalogues={selectedCatalogues}
                            handleCatalogueChange={handleCatalogueChange}
                            selectedTypes={selectedTypes}
                            handleTypeChange={handleTypeChange}
                            selectedColors={selectedColors}
                            handleColorChange={handleColorChange}
                            selectedPlaces={selectedPlaces}
                            handlePlaceChange={handlePlaceChange}
                        />
                    </div>
                    <div className="col-md-10">
                        <div className="row align-items-center">

                            {/* Search Bar and Options */}
                        </div>
                        <p className='py-3 text-navy d-lg-none'>Choose Your <strong className='fw-medium'>product</strong></p>
                        <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5">
                            {productsData.map((product, index) => (
                                <div key={index} className="col-6 mb-4">
                                    <ProductCard
                                        frontImage={product.prod_images}
                                        onHoverImage={product.prod_image2}
                                        title={product.prod_name}
                                        description={product.prod_spiece}
                                        seo={product.seo_url}
                                        cat_name={product.cat_name}
                                        variation={product.variation}
                                        prod_code={product.prod_code}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <Inspiration />
            </div>
        </>
    )
}

export default SpcPage