import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import { AboutMe } from "../components";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
