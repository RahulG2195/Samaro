import React, { useEffect, useState } from 'react'
import "./FloorExplorer.css"
import Link from 'next/link'
import axios from 'axios';

const FloorExplorer = () => {
  const [explorerData, setExplorerData] = useState({
    heading: '',
    sub_heading: '',
    description: '',
    button: '',
    url: '',
    ply_image: '',
    tab_image: ''
});

useEffect(() => {
  const fetchExplorerData = async () => {
      try {
          const response = await axios.get('/api/admin/floorExplorer');
          const data = response.data;
          setExplorerData(data);
      } catch (error) {
          console.error('Error fetching explorer data:', error);
      }
  };

  fetchExplorerData();
}, []);


const formattedContent = explorerData.heading 
? explorerData.heading.split(' ').map((word, index) => {
    if (word == "Perfect floor") {
        return <strong key={index} className="fw-bold text-danger"><Link href={initialData.spcLink || '/#'}>{word}</Link></strong>;
    } else {
        return ` ${word} `;
    }
})
: null;

  return (
    <section className="explorer">
      <div className="">
        <div className="row my-2 ">

          <div className="col-lg-11 col-md-12 ">
            <div className="row">
              <h2 className="text-white pb-3 pt-md-5 my-2 text-center fw-normal respHeading1">
              {formattedContent}
              </h2>
              <div className="col-lg-4 col-md-4 col-sm6 ">
                <img className="samaro-ply" src={`/uploads/${explorerData.ply_image}`} alt="" />
              </div>
              <div className='floorExplrTxtinMbl'> <h3 className="respHeading2">{explorerData.sub_heading}</h3></div>
              <div className="col-lg-4 col-md-4 col-sm6">
                <img className="samaro-tab" src={`/uploads/${explorerData.tab_image}`} alt="" />
              </div>
              <div className="col-lg-4 col-md-4 ">
                <div className="content pb-5">
                  <h3 className="respHeading2 floorExplrDeskText">{explorerData.sub_heading}</h3>
                  <p className=" respCption my-3">
                  {explorerData.description}
                  </p>
                  <Link href={explorerData.url} className=" button d-inline-block mt-3 px-3 py-1 respCption">{explorerData.button}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorExplorer