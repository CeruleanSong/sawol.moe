import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
		<div className='container'>
			<div className='section'>
				<Link to='/' activeClassName='active'>
					<h1> Elias Mawa </h1>
				</Link>
				<Link to='/projects'>
					<h1> Projects </h1>
				</Link>
			</div>
			<div className='section'>
				<h3> About </h3>
				<p>
					Hello! I'm Elias as a developer intrested in both web and mobile application development. I love experimenting and i've dabbled in both frontend and backend development. I love to style and create beautiful websites, though I much more prefer the ease and structure of creating backend server. I'm always looking for new ways to expand and develop my knowledge in computer science!

					Other than development I love to play rugby (repping the wingers and flyhalfs), bike through parks and jog. I also enjoy painting and crochet as a hobby in my free time.
				</p>
			</div>
		</div>
    </main>
  )
}

export default IndexPage;