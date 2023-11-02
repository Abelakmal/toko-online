import Navbar from '../../components/Navbar';
import SlideImg from '../../components/Slide-img';
import Produk from '../../components/Produk';
import Footer from '../../components/Footer';

function App() {
  setTimeout(() =>{
    localStorage.removeItem("userLogin")
  },1000 * 60)
  return (
    <>
      <Navbar />
      <SlideImg />
      <Produk />
      <Footer />
    </>
  );
}

export default App;
