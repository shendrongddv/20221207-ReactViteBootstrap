import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, []);

  return (
    <>
      <section
        id="NotFound"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <span className="display-1">404</span>
              <h6>Page Not Found</h6>
              <p className="mt-3">
                Sorry, the page you were looking for does not exist or is not
                available. You will be redirected to homepage in a view seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
