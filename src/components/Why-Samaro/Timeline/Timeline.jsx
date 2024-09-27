import React from "react";
import './Timeline.css'

// import 'react-chrono/dist/styles.css'; // Import default styles

const TimelineNew = () => {
  const timelineData = [
    {
      year: '1952',
      title: 'NATIONAL PLASTICS FOUNDED A RICH LEGACY OF 70+ YEARS',
      icon: 'fa-building',
    },
    {
      year: '2019',
      title: 'Samaro Founded',
      icon: 'fa-briefcase',
    },
    {
      year: '2020',
      title: 'STARTED PRODUCTION WITH 2 EXTRUDERS & 1 HOMAG PROFILING MACHINE',
      icon: 'fa-cogs',
    },
    {
      year: '2021',
      title: 'ADDED 1 MORE EXTRUSION LINE',
      icon: 'fa-plus-circle',
    },
    {
      year: '2022',
      title: 'MOVED TO A 30 ACRE PRODUCTION FACILITY WITH',
      icon: 'fa-map-signs',
    },
    {
      year: '2023',
      title: 'ADDED 5 EXTRUDERS & 2 HOMAG PROFILE LINES',
      icon: 'fa-tools',
    },
    {
      year: '2024',
      title: 'ADDED 3 MORE LINES + 1 HOMAG LINE',
      icon: 'fa-rocket',
    },
    {
      year: '2024',
      title: "INDIA'S LARGEST MANUFACTURER & EXPORTER OF SPC FLOORING",
      icon: 'fa-globe',
    },
  ];
  

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline7">
            {timelineData.map((item, index) => (
              <div className="timeline pb-5" key={index}>
                <div className="timeline-icon">
                  <i className={`fa ${item.icon} text-danger`}></i>
                </div>
                <span className="year fw-bold text-navy ">{item.year}</span>
                <div className="timeline-content">
                  <h5 className="title text-navy">{item.title}</h5>
                  {/* <p className="description">{item.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineNew