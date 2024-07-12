import { Accessorie, AllLifeStyle, Footer, ImagesSliderDemo, IntsaFollow, MainNav, NavBaar, NewsLetter } from '../../components'
import {ProductComponent} from '../../components'


const LandingPage = () => {

  
  return (
    <div className="h-screen bg-gray-100 landing">
      <MainNav />
      
      <ImagesSliderDemo />
      <div className=' text-center'>
       <AllLifeStyle />
      </div>
      
      <div className="  bg-gray-100 text-center h-fit"
      style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}>
        <Accessorie />
      </div>
      <div className="    rounded-md h-fit p-8 bg-cover bg-gray-100  ">
        <ProductComponent />
      </div>
      <div className="items-center bg-gray-100 justify-center " 
      style={{ boxShadow: "inset -1px 1px 20px 8px #0000000d" }}>

        <NewsLetter />
      </div>

      <IntsaFollow />
      <Footer />
    </div>
  );
}

export default LandingPage