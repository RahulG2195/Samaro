"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import DataTable from 'react-data-table-component';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ToggleStatusButton from './ToggleStatusButton';

const ProdList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProductArray, setFilteredProductArray] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const rawData = await axios.get("/api/admin/products");
                const products = rawData.data;
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [filteredProductArray]);

    let updatedProducts;

    const handleOnClick = async (action, id) => {
        if (action == 'Edit') {
            console.log("editing id is ",id)
            router.push(`./addProductForm?query=${id}`)
            // router.push(`./addProductForm`)
            // localStorage.setItem('Id', id);
                
        } else if (action == 'Delete') {
            try {
                const response = await axios.delete("/api/admin/products", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify({ id: id })
                });
                console.log("id", id)
                if (response.status === 200) {
                    console.log("Product deleted successfully");
                    updatedProducts = products.filter(product => product.product_id !== id);
                    setProducts(updatedProducts)
                    setFilteredProductArray(updatedProducts)
                } else {
                    console.error("Failed to delete product");
                }
            } catch (error) {
                console.error("Error:", error);

            }
        }
    };

    const filteredItems = products.filter(item =>
        item.prod_name && item.prod_name.toLowerCase().includes(filterText.toLowerCase())
    );

    const columns = [
        {
            name: 'Sr. No',
            selector: (row, index) => index + 1,
            sortable: true,
            width: '80px',
        },
        {
            name: 'Product Name',
            selector: 'prod_name',
            sortable: true,
            cell: row => <p>{row.prod_name}</p>,
        },
        {
            name: 'Image',
            selector: 'prod_image',
            cell: row => <img src={`/uploads/${row.prod_images}`} alt="Product" style={{ width: '50px' }} className="img-fluid" />,
        },
        {
            name: 'Action',
            cell: row => (
                <div className='gap-2 d-flex'>
                    <Button onClick={() => handleOnClick('Edit', row.prod_id)} color="secondary" className="mr-2">Edit</Button>
                    <Button onClick={() => handleOnClick('Delete', row.prod_id)} color="danger" className="mr-2">Delete</Button>
                    <ToggleStatusButton
                        initialStatus={row.prod_status}
                        prodId={row.prod_id}
                        onUpdateStatus={() => handleOnClick('ToggleStatus', row.prod_id)}
                    />
                </div>
            ),
            ignoreRowClick: true,
        },
    ];

    const subHeaderComponent = (
        <input
            type="text"
            placeholder="Search by product name"
            className="w-100 form-control"
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
        />
    );

    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className="my-4">Product List</h3>
                <Link href="/admin/addProductForm" className='btn btn-secondary'>Add New</Link>
            </div>

            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                striped
                highlightOnHover
                responsive
                progressPending={loading}
                subHeader
                subHeaderComponent={subHeaderComponent}
                noDataComponent="No products found."
            />
        </Container>
    );
};


export default ProdList;
