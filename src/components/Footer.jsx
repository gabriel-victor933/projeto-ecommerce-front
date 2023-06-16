import React from 'react'
import Section from "../style/Section"
import { styled } from "styled-components"
import img from "../assets/img/logo.avif"
import {BsTwitter, BsFacebook, BsInstagram,BsTiktok,BsYoutube } from "react-icons/bs"
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <FooterSection>
      <Top>
        <h1>Get 10% off your First order.</h1>
        <p>Plus get early access to new launches and our best self-care tips.</p>
        <input />
      </Top>
      <Bottom>
        <div>
          <h2>Shop</h2>
          <ul>
            <li onClick={()=>navigate("/hair")}>Hair</li>
            <li onClick={()=>navigate("/body")}>Body</li>
            <li onClick={()=>navigate("/face")}>Face</li>
            <li onClick={()=>navigate("/kits")}>Kits</li>
          </ul>
        </div>
        <div>
          <h2>About</h2>
          <ul>
            <li>Our Story</li>
            <li>Shipping and returns</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2>Our mission</h2>
          <p>We make the internet's favorite men's products. No harmful chemicals and made in the USA</p>
        </div>
        <div>
          <img src={img} alt="logo" />
        </div>
      </Bottom>
      <div className="iconsdiv">
      <IconContext.Provider value={{color: "#ffffff", size: "25px", className: "icons"}}>
        <BsTwitter />
        <BsFacebook />
        <BsInstagram />
        <BsTiktok />
        <BsYoutube />
      </IconContext.Provider>
      </div>
      <small>© 2023, Powered by <a href="https://github.com/gabriel-victor933">Gabriel</a></small>
    </FooterSection>
  )
}

const FooterSection = styled(Section)`
      background-color: var(--tertiary-color);
      padding: 60px 52px;
      padding-bottom: 10px;

      .iconsdiv {
        width: 100%;
        text-align: center;

        .icons {
          margin: 0px 15px;
        }
      }

      small {
        display: inline-block;
        margin-top: 30px; 
        width: 100%;
        text-align: center;
        font-family: var(--font-body);
        font-size: 10px;
        color: var(--primary-color);

        
      }
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 52px;
    margin-bottom: 50px;

    

    div{
      width: 25%;
      text-align: center;
      
      h2 {
          color: var(--secondary-color);
          font-family: var(--font-header);
          font-size: 20px;
          margin-bottom: 21px;
      }

      li,p {
          color: var(--primary-color);
          font-family: var(--font-body);
          font-size: 14px;
          opacity: 0.6;
          margin: 15px 0px;
      }

      li:hover{
        text-decoration: underline;
        opacity: 0.8;
      }

      img {
        width: 100px;
      }
    }


    @media (max-width: 750px){
        flex-direction: column;
        align-items: flex-start;

        div {
          text-align: left;    
          width: 100%;
        }


        div:last-child {
          text-align: center;
        }
        
    }
`

const Top = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;

        h1 {
        font-family: var(--font-header);
        color: var(--secondary-color);
        font-size: 44px;
        margin: 15px 0px;
      }

      p {
        font-family: var(--font-body);
        font-size: 16px;
        color: var(--primary-color);
        margin: 15px 0px;
      }

      @media (max-width: 750px){

        h1 {
          font-size: 33px;
        }

        p{
          font-size: 15px;
        }
      }
`
