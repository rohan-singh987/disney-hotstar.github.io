# style Components
`npm install styled-components`

=> Styles components are basically CSS within JavaScript
   import it to page using import styled from "styled-components" to use it
 use Styled Components tag like Conatiner,Cta etc instead of div or span
use:
const var_name = styled.div`style: value;`	[in backticks (``)]
const Container = styled.div`
    height: 70px;
    background: #090b13;
`

# react-router-dom
`npm install react-router-dom`
 import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
=> react-router is use to switch between one page to another page
	
	<Router>
           <Header />  (under Router it will always remain on its position in every page)
                <Switch>
                    <Route path="/detail">
                        <Details/>
                    </Route>
                    
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
	</Router>


## Step-1
Start by cleaning the app

## Step -2
Divide Poject int components and pages
	----> 1.Header
	----> 2.Home
		----> 1.Slider
		----> 2.Viewers
		----> 3.MoviesLisit
## Step-3
Start building app with components
	---->1.Header
	       import it to app.js

### pages
	---->2.Home
	       import Home from './components/Home'; (in app.js)		
			-----> 1.Slider
			       import ImgSlider from "./ImgSlider" (in Home.js)

				`npm i react-slick`
				     import Slider from "react-slick"

			      Also install slick-carousel for css and font
				`npm install slick-carousel`
				// Import css files
				      import "slick-carousel/slick/slick.css";
				      import "slick-carousel/slick/slick-theme.css";
				let settings = 
					{
        				dots: true,
        				infinte: true,
        				speed: 500,
        				slidesToShow: 1,
        				slidesToScroll: 1,
        				autoplay: true
    					}
				settings to use in slider
			
			-----> 2.Viewers
				import Viewer from "./Viewer"  (in Home.js)
					use display:grid to align all items a single row
			-----> 3.Movies
				import Movies from "./Movies"  (in Home.js)


	---->3. Details
	       import Details from './components/Details'; (in app.js)					



