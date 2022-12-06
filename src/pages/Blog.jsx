import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section
        id="blog"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
