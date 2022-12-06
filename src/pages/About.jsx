import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
