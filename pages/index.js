import React from 'react';

//Internal import
import Style from "../styles/index.module.css";
import { HeroSection } from '../components/comp_index';
const Home = () => {
  return(
    <div className= {Style.homePage}>
      <HeroSection/>
    </div>
  );
};
export default Home;