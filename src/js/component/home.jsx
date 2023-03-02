import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center bottom-fixed">
		<p className="fixed-bottom">
		  Made by
		  <a href="https://github.com/EffySolorzano"> Solórzano 
		  </a><i className="fa fa-feather"></i>
		  </p>
		  </div>
	);
};

export default Home;
