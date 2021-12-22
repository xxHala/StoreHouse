import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaUserAlt, FaUserPlus , FaDeezer , FaStoreAlt , FaLayerGroup, FaUsers} from "react-icons/fa";

export const UserIcon = styled(FaUserAlt)`
  color: white;
  font-size: 20px;
  justify-content: center;
`;

export const DashboardIcon = styled(FaDeezer)`
  color: white;
  font-size: 20px;
  justify-content: center;
`;

export const UserSignUpIcon = styled(FaUserPlus)`
  color: white;
  font-size: 26px;
  justify-content: center;
`;

export const ProductsIcon = styled(FaStoreAlt)`
  color: white;
  font-size: 26px;
  justify-content: center;
`;

export const CategoriesIcon = styled(FaLayerGroup)`
  color: white;
  font-size: 26px;
  justify-content: center;
`;

export const UsersIcon = styled(FaUsers)`
  color: white;
  font-size: 26px;
  justify-content: center;
`;

export const FlexContinaer = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
margin: 4px 5px;
`;

export const DesktopNav = styled.nav`
background: #06266f;
border-radius: 4px;
display: flex;
height: 85px;
justify-content: space-between;
align-items: center;
z-index: 12;
margin-bottom: 2.5rem;
background: transparent;
padding: 0;
position: relative;
@media screen and (max-width: 768px) {
display: none;
}
`;

export const MobileNavMenu = styled.nav`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
justify-content: space-between;
padding: 10px 4px;
font-size: 10px;

`;

export const NavLink = styled(Link)`
align-items: center;
text-decoration: none;
cursor: pointer;
padding: 1rem 1rem 0.5rem 1rem;
color: #9bafd0;
font-size: 16px;
font-weight: 400;

&.active {
	color: #ff7d7d;
    text-shadow: 0px -1px #0d1850;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
margin: 0 auto;
@media screen and (max-width: 768px) {
    align-items: center;
    margin: 10px;
    flex-direction:column-reverse;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #434f81;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
      z-index: 1;
    }

  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 14px;
      text-align: center;
    }
    &:hover {
      color: #ad5a9ac4;
    }
  }
`
export const StickyHam = styled.div `
display: inline-block;
`;
export const StyledBurger = styled.a`
  position: absolute;
  top: 15%;
  left: 2rem;
  width: 40px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 15;
  @media screen and (min-width: 768px) {
    display: none;
    }
  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 6px;
    background: ${({ open }) => open ? '#FFFF' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
