import React from 'react'
import './Team.css';

const Team = () => {

    // teamData.js
    const teamData = [
        {
            id: 1,
            name: "Vin Diesel",
            position: "CEO",
            photo: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
         
        },
        {
            id: 2,
            name: "David Corner",
            position: "Managing Director",
            photo: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
          
        },
        {
            id: 3,
            name: "Tom Cruise",
            position: "Finance Head",
            photo: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
          
        },
        {
            id: 4,
            name: "Tom Cruise",
            position: "Sales Head",
            photo: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
           
        },
        {
            id: 5,
            name: "Tom Cruise",
            position: "Marketing Head",
            photo: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
            
        }
    ];

    return (
        <>
        <div >
            <h1 className='text-center my-5 text-darkred fw-bold '>Our Leadership Team</h1>
            <div className=" Team_main position-relative">
                <div className='row justify-content-center'>
                    {teamData.map(member => (
                        <div key={member.id} className="profile-card col-lg-3 col-md-4 col-sm-4 mb-2">
                            <div className="img">
                                <img src={member.photo} alt={member.name} />
                            </div>
                            <div className="caption">
                                <h3 className='fw-semibold'>{member.name}</h3>
                                <p className='semibold'>{member.position}</p>
                                <div className="social-links">
                                    Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>

    )
}

export default Team