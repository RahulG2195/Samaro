"use client"
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast } from "react-toastify";
import { useRouter, usePathname } from "next/navigation";

const Addproducts = () => {
  const router = useRouter();
  const id = location.search ? location.search.split('=')[1] : '';
  console.log("thiss new ", id)

  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [frontImage, setFrontImage] = useState("");
  const [OtherImagesFile, setOtherImagesFile] = useState("");
  const [FrontImageFile, setFrontImageFile] = useState("");

  const [otherImages, setOtherImages] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [isEditMode, setIsEditMode] = useState(true);
  const [formValues, setFormValues] = useState({
    productId: id,
    productname: "",
    category: "",
    catalogue: "",
    variation: "",
    color: "",
    code: "",
    plank: "",
    thikness: "",
    layer: "",
    m2pack: "",
    no_of_groves: "",
    prod_finish: "",
    spiece: "",
    size: "",
    status: "",
  });
  console.log("formvalues", formValues)

  useEffect(() => {
    if (id) {
      setIsEditMode(true);

      console.log("this is editing mode ", isEditMode);

      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/admin/products');
          const data = response.data;
          const filteredProduct = data.filter(item => item.prod_id == id);
          setProductDetail(filteredProduct[0]);
          setFormValues({
            productId: id,
            productname: filteredProduct[0].prod_name || "",
            category: filteredProduct[0].cat_name || "",
            catalogue: filteredProduct[0].prod_catalogue || "",
            variation: filteredProduct[0].variation || "",
            color: filteredProduct[0].color || "",
            code: filteredProduct[0].prod_code || "",
            plank: filteredProduct[0].plank || "",
            thikness: filteredProduct[0].thikness || "",
            layer: filteredProduct[0].layer || "",
            m2pack: filteredProduct[0].m2pack || "",
            no_of_groves: filteredProduct[0].no_of_groves || "",
            prod_finish: filteredProduct[0].prod_finish || "",
            spiece: filteredProduct[0].prod_spiece || "",
            size: filteredProduct[0].prod_size || "",
            status: filteredProduct[0].prod_status || "",
          });
          setSelectedPlaces(filteredProduct[0].place ? JSON.parse(filteredProduct[0].place) : []);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setIsEditMode(false)
    }
  }, [id]);

  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const places = [
    "Bathroom",
    "Bedroom",
    "Childrensroom",
    "Dining room",
    "Hallway",
    "Kitchen",
    "Living room",
    "Office",
  ];

  const togglePlace = (option) => {
    if (selectedPlaces.includes(option)) {
      setSelectedPlaces(selectedPlaces.filter((item) => item !== option));
    } else {
      setSelectedPlaces([...selectedPlaces, option]);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setOtherImagesFile(files);
  }

  const handleAllinputs = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    // Append additional data
    formData.append("places", JSON.stringify(selectedPlaces));
    formData.append("productId", formValues.productId);
  
    // Append other images if they exist
    if (OtherImagesFile.length > 0) {
      OtherImagesFile.forEach((file, index) => {
        formData.append(`image`, file);
      });
    } else if (isEditMode && otherImages.length > 0) {
      otherImages.forEach((image, index) => {
        formData.append(`image`, image);
      });
    }
  
    // Append frontImageFile only if changed
    if (FrontImageFile) {
      formData.append("frontImageFile", FrontImageFile);
    } else if (isEditMode && frontImage) {
      formData.append("frontImage", frontImage);
    }
  
    try {
      const url = isEditMode ? `/api/admin/products` : "/api/admin/products";
      const method = isEditMode ? axios.put : axios.post;
  
      const response = await method(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        notify(isEditMode ? "Product updated successfully" : "Product added successfully");
        router.push("/admin/product");
      } else {
        console.error(isEditMode ? "Failed to update product" : "Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    
    if (name === "frontImage" && files.length > 0) {
      setFrontImage(files[0].name);
      setFrontImageFile(files[0]);
    } 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add product
          </CardTitle>
          <CardBody>
            <Form className="row justify-content-center" onSubmit={handleAllinputs}>
              <FormGroup className="col-6">
                <Label for="productname">Product Name*</Label>
                <Input
                  id="productname"
                  name="productname"
                  value={formValues.productname}
                  onChange={handleInputChange}
                  placeholder={"Enter Product Name*"}
                  type="text"
                  required
                  className="form-control"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="category">Category*</Label>
                <Input
                  id="type"
                  name="category"
                  value={formValues.category}
                  onChange={handleInputChange}
                  placeholder={'Enter category SPC/LVT*'}
                  type="text"
                  required
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="catalogue">Catalogue*</Label>
                <Input
                  id="catalogue"
                  name="catalogue"
                  value={formValues.catalogue}
                  onChange={handleInputChange}
                  placeholder={"Enter catalogue Sicilian/Tuscany/LVT 1/LVT 2*"}
                  type="text"
                  required
                />
              </FormGroup>
              {/* variation */}
              <FormGroup className="col-6">
                <Label for="productType">Product Type*</Label>
                <Input
                  id="catalogue"
                  name="variation"
                  value={formValues.variation}
                  onChange={handleInputChange}
                  placeholder={"Enter Product Type wood/stone/marbel*"}
                  type="text"
                  required
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="color">Color*</Label>
                <Input
                  id="color"
                  name="color"
                  value={formValues.color}
                  onChange={handleInputChange}
                  placeholder={"Enter Product color"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="code">Code*</Label>
                <Input
                  required
                  id="code"
                  name="code"
                  value={formValues.code}
                  onChange={handleInputChange}
                  placeholder={"Enter Product Code"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="places">Select Places*</Label>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic" className="border">
                    Select Options
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {places.map((option, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => togglePlace(option)}
                        active={selectedPlaces.includes(option)}
                      >
                        {option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div>
                  <strong>Selected Places:</strong> {selectedPlaces.join(", ")}
                </div>
                {!selectedPlaces.length && (
                  <FormText color="danger">
                    select atleast one place
                  </FormText>
                )}
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="thikness">Thikness</Label>
                <Input
                  id="thikness"
                  name="thikness"
                  value={formValues.thikness}
                  onChange={handleInputChange}
                  placeholder={"Enter Product thikness"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="layer">layer</Label>
                <Input
                  id="layer"
                  name="layer"
                  value={formValues.layer}
                  onChange={handleInputChange}
                  placeholder={"Enter Product layer"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="prod_finish">prod_finish</Label>
                <Input
                  id="prod_finish"
                  name="prod_finish"
                  value={formValues.prod_finish}
                  onChange={handleInputChange}
                  placeholder={"Enter product finishing"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="size">prod_size</Label>
                <Input
                  id="size"
                  name="size"
                  value={formValues.size}
                  onChange={handleInputChange}
                  placeholder={"Enter Product size"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="spiece">prod_spiece</Label>
                <Input
                  id="spiece"
                  name="spiece"
                  value={formValues.spiece}
                  onChange={handleInputChange}
                  placeholder={"Enter Product spiece"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="grove">no_of_grove</Label>
                <Input
                  id="grove"
                  name="grove"
                  value={formValues.no_of_groves}
                  onChange={handleInputChange}
                  placeholder={"Enter Product's grove number"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="m2pack">m2pack</Label>
                <Input
                  id="m2pack"
                  name="m2pack"
                  value={formValues.m2pack}
                  onChange={handleInputChange}
                  placeholder={"Enter Product m2pack"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="plank">plank</Label>
                <Input
                  id="plank"
                  name="plank"
                  value={formValues.plank}
                  onChange={handleInputChange}
                  placeholder={"Enter Product plank"}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="status">Status</Label>
                <Input
                  id="status"
                  name="status"
                  value={formValues.status}
                  onChange={handleInputChange}
                  placeholder={"Enter Product Status 1/0"}
                  type="text"
                />
              </FormGroup>

              <FormGroup className="col-6">
                <Label for="frontImage">Front image*</Label>
                {isEditMode && productDetail.prod_images && (
                  <div className="mb-2">
                    <img
                      src={`/assets/images/products/AllData/${productDetail.prod_images}`}
                      alt="Current Front Image"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <Input required={!isEditMode ? true : false} id="frontImage" name="frontImage" type="file" onChange={handleImageChange}
                />
                <FormText>
                  Upload front image here.
                </FormText>
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="otherImages">Other images*</Label>
                {isEditMode && productDetail.prod_image2 && (
                  <div className="mb-2">
                    {productDetail.prod_image2.split(',').map((imagePath, index) => (
                      <img
                        key={index}
                        src={`/assets/images/products/AllData/${imagePath.trim()}`}
                        alt={`Current Image ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }}
                      />
                    ))}
                  </div>
                )}
                <Input
                  multiple
                  required={!isEditMode ? true : false}
                  id="otherImages"
                  name="otherImages"
                  type="file"
                  onChange={handleFileChange}
                />
                <FormText>
                  Upload interior or more images of product.
                </FormText>
                <div>

                  {otherImages.length > 0 && (
                    <div>
                      <strong>selected Images:</strong>{" "}
                      {otherImages.map((image, index) => (
                        <span key={index}>{index === 0 ? image : `, ${image}`}</span>
                      ))}
                    </div>
                  )}
                </div>
              </FormGroup>
              <center><Button className="col-2" type="submit">{isEditMode ? "Update" : "Submit"}</Button></center>
              {/* <center><Button className="col-2" type="submit">Submit</Button></center> */}

            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Addproducts;
