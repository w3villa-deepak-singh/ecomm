import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import { YouTube, Instagram } from "@mui/icons-material";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/deepaksingh123000";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            //   src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              src="https://res.cloudinary.com/dx4ff3ams/image/upload/v1741410538/avatars/e5lqvcnfyp6biwydiey6.jpg"
              alt="Founder"
            />
            <Typography>Deepak Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a ecommerce wesbite made by @deepaksingh. Only with the
              purpose to learn concept of MERN 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
            //   href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTube className="youtubeSvgIcon" />
            </a>

            <a
            //  href="https://instagram.com/meabhisingh" 
             target="blank"
             >
              <Instagram className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;