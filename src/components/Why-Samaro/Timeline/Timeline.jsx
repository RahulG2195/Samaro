import React from "react";
import './Timeline.css'

// import 'react-chrono/dist/styles.css'; // Import default styles

const TimelineNew = () => {
    const events = [
        { year: '1952', description: 'National Plastic Founded, The rich legacy of 70+ years' },
        { year: '2019', description: 'Samaro founded' },
        { year: '2020', description: 'Started Production with 2 extruders & 1 homag profiling machine' },
        { year: '2021', description: 'Added 1 more extrution line' },
        { year: '2022', description: 'Moved to 30 acre production facility with ' },
        { year: '2023', description: 'Added 5 extruders & 2 homang profile lines ' },
        { year: '2024', description: 'Added 3 more lines + 1 homang line' },
        {  description: "India's largest manufacturer & exporter of SPC flooring" },
      ];

    return (
        <div className="timeline">
          <div className="timeline-content">
            {events.map((event, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-description">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default TimelineNew