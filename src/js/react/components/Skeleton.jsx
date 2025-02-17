import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={260}
		height={440}
		viewBox="0 0 280 440"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		>
		<rect x="35" y="238" rx="10" ry="10" width="157" height="27" />
		<rect x="8" y="277" rx="0" ry="0" width="107" height="24" />
		<rect x="190" y="286" rx="0" ry="0" width="0" height="5" />
		<rect x="8" y="307" rx="0" ry="0" width="75" height="19" />
		<rect x="4" y="340" rx="17" ry="17" width="96" height="32" />
		<circle cx="109" cy="109" r="109" />
		<rect x="137" y="340" rx="17" ry="17" width="96" height="32" />
		<rect x="123" y="277" rx="0" ry="0" width="107" height="24" />
		<rect x="87" y="307" rx="0" ry="0" width="75" height="19" />
		<rect x="166" y="306" rx="0" ry="0" width="75" height="19" />
	</ContentLoader>
)
export default Skeleton;
