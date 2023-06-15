import {styled} from "styled-components"
import Section from "../style/Section"
import { useEffect, useState } from "react"
import img from "../assets/img/logo.avif"
import {BsSearch, BsBag, BsList} from "react-icons/bs"
import { IconContext } from "react-icons"
import { NavLink } from "react-router-dom"

export default function Header() {

    const [isMobile,setIsMobile] = useState(window.innerWidth < 990)

    useEffect(() => {
        window.addEventListener("resize",windowChange)
        
        return () =>{
            window.removeEventListener("resize",windowChange)
        }
    },[])
    
    function windowChange(){
        if(window.innerWidth > 990){
            setIsMobile(false) 
        } else {
            setIsMobile(true)
        }
    }

  return (
    <HeaderSection>
        <IconContext.Provider value={{color:"white", size: "22px", className: "icons"}}>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </IconContext.Provider>
    </HeaderSection>
  )
}

function MobileHeader(){
    return (
        <div className="mobile">
            <BsList />
            <img src={img} alt="logo"/>
            <div>
                <BsSearch />
                <BsBag />
            </div>
        </div>
    )
}

function DesktopHeader(){
    return (
        <div className="desktop">
            <div className="title">
                <BsSearch />
                <img src={img} alt="logo" />
                <BsBag />
            </div>
            <div className="menu">
                <NavLink to="/hair">Hair</NavLink>
                <NavLink to="/body">Body</NavLink>
                <NavLink to="/face">Face</NavLink>
                <NavLink to="/kits">Kits</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}

const HeaderSection = styled(Section)`
    background-color: var(--tertiary-color);
    
    .desktop {
        padding: 15px 0px;
        height: 155px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        img {
            width: 120px;
        }

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu {
            width: 100%;
            display: flex;
            justify-content: center;

            a {
                color: var(--primary-color);
                text-decoration: none;
                margin: 0px 13px;

                &:hover {
                    color: var(--secondary-color);
                    text-decoration: underline;
                }
            }

            a.active {
                color: var(--primary-color);
                text-decoration: underline;
                transform: scale(1.15)
            }
        }
    }

    .mobile {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;


        img {
            width: 120px;
            max-width: 35%;
        }
    }



    .icons{
        margin: 0px 5px;
    &:hover{
        transform: scale(1.15);

    }}
`
