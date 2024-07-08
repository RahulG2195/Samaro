import { Button, Collapse } from "react-bootstrap";
import "./Filters.css";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';


const Filters = ({ hide, inSPC, resultCount, totalCount, selectedProduct, handleProductChange, selectedCatalogues,
  handleCatalogueChange, selectedTypes, handleTypeChange, selectedColors, handleColorChange,
  selectedPlaces, handlePlaceChange }) => {

  const router = useParams();
  const variation = router.slug;



  const [isOpen, setIsOpen] = useState(false);
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

  // Function to toggle the Collapse state
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Check screen size on component mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumOrLarger(window.innerWidth >= 769);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Effect to update isOpen state when hide prop changes
  useEffect(() => {
    if (hide === "d-md-none") {
      setIsOpen(false);
    }
  }, [hide]);

  // range filter
  const [wearLayer, setWearLayer] = useState(0.1); // Initial value for wear layer
  const [thickness, setThickness] = useState(1.5);

  // Function to handle changes in the range input
  const handleWearLayerChange = (event) => {
    setWearLayer(parseFloat(event.target.value)); // Update the wear layer value
  };
  const handleThicknessChange = (event) => {
    setThickness(parseFloat(event.target.value)); // Update the wear layer value
  };

  return (
    <>
      <div className={` ${inSPC} hamburger-menu d-md-non d-block`}>
        <Button variant="" onClick={toggleCollapse}>
          <img src="/assets/images/products/Component 55 – 2.svg" alt="err" />
        </Button>
      </div>
      <div className="Filter-title">
        <p className="fw-bold samFloor m-0">SAMARO FLOORS</p>
        <p className="m-0 p-0 small fw-semibold text-navy">
          Home -&gt; Products
        </p>
        <span className="small shownCount text-navy">
          {resultCount} of {totalCount} floors shown
        </span>
      </div>
      <Collapse in={isOpen || isMediumOrLarger}>
        <div className=" py-4 FilterToggl ">
          <div className="px-1 pb-4  ">
            <div className={` border-bottom border-danger py-2 chk`}>
              <p className="pb-2 darkBlue m-0">
                Choose Your <strong className="fw-medium">product</strong>
              </p>
              <div className="row">
                <div
                  className={`${hide} chk col-lg-12 col-md-12 col-sm-2 col-6`}
                >
                  <div className="form-check">
                    <input
                      className=" form-check-input"
                      type="radio"
                      name="spc"
                      id="inlineRadio1"
                      value="spc"
                      checked={selectedProduct === 'spc'}
                      onChange={handleProductChange} />

                    <label for="inlineRadio1 " className="darkBlue form-check-label">SPC</label>
                  </div>
                </div>
                <div
                  className={`${hide} chk col-lg-12 col-md-12 col-sm-2 col-6`}
                >
                  <div className="form-check">
                    <input
                      className=" form-check-input"
                      type="radio"
                      name="lvt"
                      id="inlineRadio1"
                      value="lvt"
                      checked={selectedProduct === 'lvt'}
                      onChange={handleProductChange}
                    />
                    <label for="inlineRadio1" className="darkBlue form-check-label">LVT</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={` border-bottom border-danger py-2 chk`}>
              <p className="pb-2 darkBlue m-0">
                Choose Your <strong className="fw-medium">Catalogue</strong>
              </p>
              <div className="row ">
                <div
                  className={`${hide} chk col-lg-12 col-md-12 col-sm-2 col-6`}
                >
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="all"
                      value='all'
                      checked={selectedCatalogues.includes('all','Sicilian')}
                      onChange={handleCatalogueChange} />
                    All
                  </label>
                </div>
                <div className={`${hide} col-lg-12 col-md-12 col-sm-3 col-6`}>
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="sicilian"
                      value='sicilian'
                      checked={selectedCatalogues.includes('sicilian')}
                      onChange={handleCatalogueChange} />
                    Sicilian
                  </label>
                </div>
                <div className={`${hide} col-lg-12 col-md-12 col-sm-3 col-6`}>
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="tuscany"
                      value='tuscany'
                      checked={selectedCatalogues.includes('tuscany')}
                      onChange={handleCatalogueChange} />
                    Tuscany
                  </label>
                </div>
                <div className={`${hide} col-lg-12 col-md-12 col-sm-3 col-6`}>
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="lvt 1"
                      value='lvt 1'
                      checked={selectedCatalogues.includes('lvt 1')}
                      onChange={handleCatalogueChange} />
                    LVT 1
                  </label>

                </div>
                <div className={`${hide} col-lg-12 col-md-12 col-sm-2 col-6`}>
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="lvt 2"
                      value='lvt 2'
                      checked={selectedCatalogues.includes('lvt 2')}
                      onChange={handleCatalogueChange}
                    />
                    LVT 2
                  </label>
                </div>

                <div className={`${hide} col-lg-12 col-md-12 col-sm-2 col-6`}>
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="others"
                      value='others'
                      checked={selectedCatalogues.includes('others')}
                      onChange={handleCatalogueChange}
                    />
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="border-bottom border-danger py-2">
              <p className="pb-2 darkBlue m-0">
                Choose Your <strong className="fw-medium">Types</strong>
              </p>
              <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="wood"
                      value='wood'
                      checked={variation === 'wood' || selectedTypes.includes('wood')}
                       onChange={handleTypeChange}
                    />
                    Wood
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="stone"
                      value='stone'
                      checked={variation === 'Stone' || selectedTypes.includes('stone')}
                      onChange={handleTypeChange}
                    />
                    Stone
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="marble"
                      value='marble'
                      checked={variation === 'Marble' || selectedTypes.includes('marble')}
                      onChange={handleTypeChange}
                    />
                    Marble
                  </label>
                </div>
              </div>
            </div>
            <div className="border-bottom border-danger py-2">
              {" "}
              <p className="pb-2 darkBlue">
                Choose Your <strong className="fw-medium">color</strong>
              </p>
              <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1  form-check-input"
                      type="checkbox"
                      name="black"
                      value='black'
                      checked={selectedColors.includes('black')}
                      onChange={handleColorChange}
                    />
                    Black
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="beige"
                      value='beige'
                      checked={selectedColors.includes('beige')}
                      onChange={handleColorChange}
                    />
                    Beige
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="brown"
                      value='brown'
                      checked={selectedColors.includes('brown')}
                      onChange={handleColorChange} />
                    Brown
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="dark brown"
                      value='dark brown'
                      checked={selectedColors.includes('dark brown')}
                      onChange={handleColorChange}
                    />
                    Dark brown
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="dark grey"
                      value='dark grey'
                      checked={selectedColors.includes('dark grey')}
                      onChange={handleColorChange}
                    />
                    Dark grey
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="dark brown"
                      value='dark brown'
                      checked={selectedColors.includes('dark brown')}
                      onChange={handleColorChange}
                    />
                    Dark brown
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="light grey"
                      value='light grey'
                      checked={selectedColors.includes('light grey')}
                      onChange={handleColorChange}
                    />
                    Light grey
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="natural"
                      value='natural'
                      checked={selectedColors.includes('natural')}
                      onChange={handleColorChange}
                    />
                    Natural
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="pink"
                      value='pink'
                      checked={selectedColors.includes('pink')}
                      onChange={handleColorChange}
                    />
                    Pink
                  </label>
                </div>
              </div>
            </div>
            <div className="border-bottom border-danger py-2">
              <p className="pb-2 darkBlue m-0">
                Choose Your <strong className="fw-medium">place</strong>
              </p>
              <div className="row ">
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="bathroom"
                      value='bathroom'
                      checked={selectedPlaces.includes('bathroom')}
                      onChange={handlePlaceChange}
                    />
                    Bathroom
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="bedroom"
                      value='bedroom'
                      checked={selectedPlaces.includes('bedroom')}
                      onChange={handlePlaceChange}
                    />
                    Bedroom
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  {" "}
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="children's room"
                      value="children's room"
                      checked={selectedPlaces.includes("children's room")}
                      onChange={handlePlaceChange}
                    />
                    Children's room
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="dining room"
                      value='dining room'
                      checked={selectedPlaces.includes('dining room')}
                      onChange={handlePlaceChange}
                    />
                    Dining room
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="hallway"
                      value='hallway'
                      checked={selectedPlaces.includes('hallway')}
                      onChange={handlePlaceChange}
                    />
                    Hallway
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="kitchen"
                      value='kitchen'
                      checked={selectedPlaces.includes('kitchen')}
                      onChange={handlePlaceChange}
                    />
                    Kitchen
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="living room"
                      value='living room'
                      checked={selectedPlaces.includes('living room')}
                      onChange={handlePlaceChange}
                    />
                    Living room
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-2 col-6">
                  <label className="darkBlue">
                    <input
                      className="mx-1 form-check-input"
                      type="checkbox"
                      name="office"
                      value='office'
                      checked={selectedPlaces.includes('office')}
                      onChange={handlePlaceChange}
                    />
                    Office
                  </label>
                </div>
              </div>
            </div>
            {/* <div className=" border-bottom border-danger">
              <label htmlFor="" className="form-label darkBlue">
                Choose Your <strong className="fw-medium">Thickness</strong>
              </label>
              <input
                type="range"
                className="form-range custom-range-input d-block p-0"
                min="1.5"
                max="5"
                step="0.1" // Set step to 0.1 to match increments of 0.1 mm
                value={thickness}
                onChange={handleThicknessChange}
              />

              <div className="d-flex justify-content-between">
                <p className="small darkBlue">{thickness} mm</p>
                <p className="small darkBlue">8 mm</p>
              </div>
            </div> */}
            {/* <div className=" border-bottom border-danger">
              <label htmlFor="" className="form-label darkBlue">
                Choose Your <strong className="fw-medium">Wear Layer</strong>
              </label>
              <input
                type="range"
                className="form-range custom-range-input d-block p-0"
                min="0.1"
                max="0.7"
                step="0.1" // Set step to 0.1 to match increments of 0.1 mm
                value={wearLayer} // Controlled component: value is controlled by state
                onChange={handleWearLayerChange} // Handle range input changes
              />

              <div className="d-flex justify-content-between">
                <p className="small darkBlue ">{wearLayer} mm</p>
                <p className="small darkBlue">0.7 mm</p>
              </div>
            </div> */}
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Filters;
