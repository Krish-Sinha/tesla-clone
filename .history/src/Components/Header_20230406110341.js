import React from "react"
import styled from "styled-components"

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
				<p>
					<a href="#">Model S</a>
				</p>
				<p>
					<a href="#">Model 3</a>
				</p>
				<p>
					<a href="#">Model X</a>
				</p>
				<p>
					<a href="#">Model Y</a>
				</p>
			</Menu>
		</Container>
	)
}

export default Header

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: centre;
	padding: 10px 20px;
`

const Menu = styled.div`
	display: flex;
	align-items: center;

	p {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
	}
`
