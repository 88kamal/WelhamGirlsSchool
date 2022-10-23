// import React, {useState} from 'react';
// import {BsFillArrowUpSquareFill} from 'react-icons/bs';
// import { Button } from '../components/Styles';


// const ScrollButton = () =>{

// const [visible, setVisible] = useState(false)

// const toggleVisible = () => {
// 	const scrolled = document.documentElement.scrollTop;
// 	if (scrolled > 300){
// 	setVisible(true)
// 	}
// 	else if (scrolled <= 300){
// 	setVisible(false)
// 	}
// };

// const scrollToTop = () =>{
// 	window.scrollTo({
// 	top: 0,
// 	behavior: 'smooth'
// 	/* you can also use 'auto' behaviour
// 		in place of 'smooth' */
// 	});
// };
// window.addEventListener('scroll', toggleVisible);

// return (
// 	<Button className=' left-[12em] bottom-[23em] shadow-lg'>
// 	<BsFillArrowUpSquareFill onClick={scrollToTop}
	
// 	style={{display: visible ? 'inline' : 'none'}} />
// 	</Button>
// );
// }

// export default ScrollButton;


import React from 'react'
import ScrollToTop from "react-scroll-to-top";


function ScrollButton() {
  return (
	<div>
      <ScrollToTop smooth />
    </div>
  )
}

export default ScrollButton