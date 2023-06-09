import React from "react"
import styled from "styled-components"

function Section({
	title,
	description,
	leftbtntext,
	rightbtntext,
	backgroundImage,
}) {
	return (
		<Wrap bgImage={backgroundImage}>
			<ItemText>
				<h1>{title}</h1>
				<p>{description}</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>{leftbtntext}</LeftButton>

					{rightbtntext && <RightButton>{rightbtntext}</RightButton>}
				</ButtonGroup>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	)
}

export default Section

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url("/images/model-s.jpg");
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items-center;
	border-radius: 100px;
	opacity:0.85;
	text-transform: uppercase;
	font-sixe:12px;
	cursor:pointer;
	margin:8px;
	padding:10px;
`

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`

const DownArrow = styled.img`
	height: 40px;
	overflow-x: hidden;
	animation: animateDown infinte 1.5s;
`

const Buttons = styled.div``
