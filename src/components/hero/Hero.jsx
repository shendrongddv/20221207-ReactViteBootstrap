import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-white text-center text-lg-start">
            <h1 className="h6">Copywritting for SEO</h1>
            <h2 className="display-4 fw-bold mt-2 mb-4">
              This is Copywritting for Marketing Purpouse to Attract Customer
            </h2>
            <Link
              to="/"
              className="btn btn-primary rounded-pill shadow py-2 px-3"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
