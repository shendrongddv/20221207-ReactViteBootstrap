import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
