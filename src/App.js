import './App.css';
import productDetails from './product-details'
import ProductCard from './components/ProductCard'
import productImgDesktop from './images/image-product-desktop.jpg'
import productImgMob from './images/image-product-mobile.jpg'
import { useState, useEffect } from 'react';

function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className="App">
      <ProductCard  productDetails={productDetails}
                    productImage={windowDimensions.width >= 500 ? productImgDesktop : productImgMob}
      />
    </div>
  );
}

export default App;
