import React from "react"
import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu"

function Header() {
	return (
		<Container>
			<a>
				<img
					src="/images/logo.svg"
					alt=""
				/>
			</a>

			<Menu>
				<a href="#">Model S</a>

				<a href="#">Model 3</a>

				<a href="#">Model X</a>

				<a href="#">Model Y</a>
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<CustomMenu />
			</RightMenu>

			<BurgerMenu>
				<li>
					<a href="#">Exisitng Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-in</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
				<li>
					<a href="#">Roadster</a>
				</li>
				<li>
					<a href="#"></a>
				</li>
				<li>
					<a href="#"></a>
				</li>
			</BurgerMenu>
		</Container>
	)
}

export default Header

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: centre;
	justify-content: space-between;
	padding: 20px 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin: 10px;
	}
`

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`

const BurgerMenu = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600px;
		}
	}
`
