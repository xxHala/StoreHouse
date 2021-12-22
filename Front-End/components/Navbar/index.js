import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
DashboardIcon,
StyledMenu,
StyledBurger,
MobileNavMenu,
DesktopNav,
UserIcon,
FlexContinaer,
UserSignUpIcon,
ProductsIcon,
CategoriesIcon,
UsersIcon,
StickyHam,
} from './NavbarElements';

const NavContent = () => {
	return (
		<>
			<NavMenu>
	<FlexContinaer>
		<DashboardIcon> </DashboardIcon>
		<NavLink to="/home" >
			Dashboard
		</NavLink>
	</FlexContinaer>
	<FlexContinaer>
		<ProductsIcon> </ProductsIcon>
		<NavLink to="/products" activeStyle>
			Products
		</NavLink>
	</FlexContinaer>
	<FlexContinaer>
		<CategoriesIcon> </CategoriesIcon>
		<NavLink to="/catagories" activeStyle>
			Categories
		</NavLink>
	</FlexContinaer>
	<FlexContinaer>
		<UsersIcon> </UsersIcon>
		<NavLink to="/users" activeStyle>
			Users
		</NavLink>
	</FlexContinaer>
	<FlexContinaer>
		<UserSignUpIcon> </UserSignUpIcon>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
	</FlexContinaer>
	<FlexContinaer>
		<UserIcon> </UserIcon>
		<NavLink to="/signin">Sign In</NavLink>
	</FlexContinaer>
	</NavMenu>
	</>
	);
};

const Menu = ({ open , setOpen }) => {
	return (
	  <StyledMenu open={open}  onClick={() => setOpen(!open)}>
	  <MobileNavMenu>
	 <NavContent ></NavContent>
	</MobileNavMenu>
	  </StyledMenu>
	)
  }

const Burger = ({ open, setOpen }) => {
	return (
	  <StyledBurger open={open} onClick={() => setOpen(!open)}>
		<div />
		<div />
		<div />
	  </StyledBurger>
	)
  }

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();

return (
	<>
		<StickyHam ref={node}>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</StickyHam>
	<DesktopNav>
	<NavContent></NavContent>
	</DesktopNav>
	</>
);
};

export default Navbar;
