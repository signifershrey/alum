import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box
      style={{
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "-60px",
          fontFamily: "monospace",
          fontSize: "40px",
          position: "relative",
          right: "30px",
        }}
      >
        BITOSAHQ
        <img
          style={{
            height: "60px",
            // marginTop: "50px",
            position: "relative",
            right: "270px",
            top: "25px",
          }}
          src="https://icskhed.org/wp-content/uploads/2018/09/alumni.png"
          alt="icon"
        />
      </h1>
      <Container>
        <Row>
          <Column
            style={{
              position: "relative",
              right: "300px",
            }}
          >
            <Heading>Contact Us</Heading>
            <FooterLink>Email ID : contact@bitosahq.com</FooterLink>
            <FooterLink>Phone Number : 9407241530</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              {/* <i className="fab fa-facebook-f"> */}
              <span style={{ marginLeft: "10px" }}>Facebook</span>
              {/* </i> */}
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
