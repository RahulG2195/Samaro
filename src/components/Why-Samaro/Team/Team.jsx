import React from "react";
import "./Team.css";

const Team = () => {
  // teamData.js
  const teamData = [
    {
      id: 1,
      name: "Mr. Paresh Vinod Parekh",
      position: "Director",
      photo:"https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
      content: "Mr. Paresh Vinod Parekh holds a Bachelor of Commerce (B.Com) degree from NM College and a master’s degree from Dowling College, USA. With over 30 years of experience at National, he has expertly applied his academic background to elevate the company’s success, particularly in the exports and finance divisions. Under his leadership, National has become India's top exporter. In addition to his role at National, he served as the President of the Organization of Plastic Processors of India (OPPI) from 2012 to 2014 and is currently a member of the PlastIndia Managing Committee.",
    },
    {
      id: 2,
      name: "Mr. Harsh Paresh Parekh",
      position: "Director",
      photo:"https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
      content: "Mr. Harsh Paresh Parekh graduated with a Bachelor of Science (B.Sc.) degree and later earned a Master’s in Global Management from Regents College, UK. Over the past 10 years, he has contributed significantly to National, holding roles such as Marketing Advisor and Chief Financial Officer. For the last five years, he has been managing the business operations of the Nellore unit, which specializes in plastic flooring products with a pan-India reach. Mr. Parekh played a key role in establishing the Nellore division. Before joining National Plastic Industries Limited, he gained valuable experience through internships with renowned companies like Parle Agro and Keter (Israel), focusing on marketing and product development."
    },
    // {
    //   id: 3,
    //   name: "Tom Cruise",
    //   position: "Finance Head",
    //   photo:
    //     "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Tom Cruise",
    //   position: "Sales Head",
    //   photo:
    //     "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
    // },
    // {
    //   id: 5,
    //   name: "Tom Cruise",
    //   position: "Marketing Head",
    //   photo:
    //     "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
    // },
  ];

  return (
    <>
      <div>
        <div className="text-center my-md-5 my-3">
          <h1 className="text-center mt-5 text-darkred fw-bold ">
            Our Leadership Team
          </h1>
          <small>
            Behind Samaro Flooring is a dedicated team of professionals who are
            passionate about innovation, quality, and customer satisfaction.
            Meet the people who are driving our success:
          </small>
        </div>
        <div className=" Team_main position-relative">
          <div className="row justify-content-center">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="profile-card col-lg-6 col-md-6 col-sm-6 mb-2"
              >
                <div className="img">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="caption">
                  <h3 className="fw-semibold">{member.name}</h3>
                  <p className="semibold">{member.position}</p>
                  <div className="social-links">
                  {member.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
