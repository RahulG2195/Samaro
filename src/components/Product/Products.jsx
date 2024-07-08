import React, { useState, useEffect, useRef } from 'react';
import Filters from './Filters';
import ProductCard from './ProductCard';
import './Filters.css';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

const Products = () => {
    const router = useRouter();
    const params = useParams();
    const variation = params.slug;

    const productsArr = [
        {
            frontImage: "/assets/images/products/AllData/502 - Swiss light WITHOUT INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/502 - Swiss light WITHOUT INSTALLATION.webp",
            title: "Swiss light",
            description: "LVT | WOOD | SAM 502"
        },
        {
            frontImage: "/assets/images/products/AllData/503 - Tulip tree INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/503 - tulip tree WITHOUT INSTALLATION.webp",
            title: "Tulip tree",
            description: "LVT | WOOD | SAM 503"
        },
        {
            frontImage: "/assets/images/products/AllData/505 - maplewood INSTALLATION.webp",
            onHoverImage: "/assets/images/products/AllData/505 - maplewood WITHOUT INSTALLATION.webp",
            title: "Clay Oak",
            description: "LVT | WOOD | SAM 0037"
        },
    ];

    const [productsData, setProductsData] = useState([]);
    const [showInteriorPictures, setShowInteriorPictures] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCatalogues, setSelectedCatalogues] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 15; // Number of products to load per page
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const getProducts = async () => {
                try {
                    const response = await axios.get("/api/admin/products", {
                        params: {
                            variation: variation,
                        }
                    });
                    const products = response.data;
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

    useEffect(() => {
        applyFilters();
    }, [selectedProduct, selectedCatalogues, selectedTypes, selectedColors, selectedPlaces, searchQuery, productsData]);

    const handleCheckboxChange = () => {
        setShowInteriorPictures(!showInteriorPictures);
    };

    const handleProductChange = (event) => {
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

    const loadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
    };

    const visibleProducts = filteredProducts.slice(0, page * perPage);

    return (
        <div className="px-5 prdctContainer position-relative">
            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-3">
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
                <div className="col-lg-10 col-md-9">
                    <div className="samSearchResp mb-md-5">
                        <div className="input-group p-md-0">
                            <input type="text" className="form-control search-bar prdctSearch px-2 py-0 pb-1" placeholder="Search your floor" style={{ lineHeight: 'normal' }} onChange={handleSearchInputChange} />
                            <div className="input-group-append">
                                <div className="input-group-text bg-transparent border-0">
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                            <div className="input-group-append interiorcheck">
                                <div className="form-check">
                                    <input className="mx-1 form-check-input" type="checkbox" checked={showInteriorPictures} onChange={handleCheckboxChange} />
                                    <label className="darkBlue">Show interior pictures</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {visibleProducts.length === 0 ? (
                        <div className='text-center '>No more products available</div>
                    ) : (
                        <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5 mt-md-2">

                            {visibleProducts.map((product, index) => (
                                <div key={index} className="col-6">
                                    <ProductCard
                                    frontImage={`${product.prod_images}`}
                                    onHoverImage={showInteriorPictures ? `${product.prod_image2}` : null}
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
                    )}
                    {filteredProducts.length <= visibleProducts.length ? '' : <div className='d-flex justify-content-center'>
                        <a className="discoverBtn load_more button mx-auto text-center" onClick={loadMoreProducts}>Load More</a>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Products;
