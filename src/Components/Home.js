import React from "react"
import styled from "styled-components"
import Section from "./Section"

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for touchless delivery"
				backgroundImage="model-s.jpg"
				leftbtntext="Custom Order"
				rightbtntext="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for touchless delivery"
				backgroundImage="model-y.jpg"
				leftbtntext="Custom Order"
				rightbtntext="Existing Inventory"
			/>

			<Section
				title="Model 3"
				description="Order Online for touchless delivery"
				backgroundImage="model-3.jpg"
				leftbtntext="Custom Order"
				rightbtntext="Existing Inventory"
			/>

			<Section
				title="Model X"
				description="Order Online for touchless delivery"
				backgroundImage="model-x.jpg"
				leftbtntext="Custom Order"
				rightbtntext="Existing Inventory"
			/>

			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImage="solar-panel.jpg"
				leftbtntext="Order Now"
				rightbtntext="Learn More"
			/>

			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof and Solar Panels"
				backgroundImage="solar-roof.jpg"
				leftbtntext="Order Now"
				rightbtntext="Learn More"
			/>

			<Section
				title="Accessories"
				description="Order Online for touchless delivery"
				backgroundImage="accessories.jpg"
				leftbtntext="Shop Now"
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;
`
