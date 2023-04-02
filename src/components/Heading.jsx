import React from "react";
import LanguageButton from "./LanguageButton";
import headingcontent from './contents/headingcontent';


const Heading = ({language,handleAdd}) => {

 

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 

    return (
        <div >
            <div className="App-header">
              <div className="app-p-box">
              
             <LanguageButton 
             language={language}
             handleAdd={handleAdd}
              />


            <p className='app-p onvisibleSlideUp'>{headingcontent[language].title1}</p>
            <p className='app-p2 onvisibleSlideRight'>{headingcontent[language].title2}</p>
            <p className='app-p3  onvisibleShow'>{headingcontent[language].title3}</p>
            <ul  className="style2 buttons onvisibleSlideDown" style={{opacity: 1, transform: null}}>
              <li>
                <a onClick={handleClickScroll} href="#start" className="button n01">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
            <span>{headingcontent[language].button}</span></a></li></ul>
              </div>
            </div>
          
      
      </div>
    )
     
}
export default Heading


