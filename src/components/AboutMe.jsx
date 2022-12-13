import "./aboutme.css";
import AboutImg from "../../src/assets/images/about-img.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="sectionPadding">
      <div className="container">
        <div className="row gy-4 gx-lg-5 justify-content-between align-items-center">
          <div className="col-lg-5">
            <img src={AboutImg} alt="" className="rounded shadow" />
          </div>
          <div className="col-lg-7">
            <h2 className="h2 fw-bold">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsum maxime accusantium velit dicta quam harum tenetur vel saepe,
              perspiciatis quia impedit. Asperiores, exercitationem!
            </p>

            <div className="row mt-4">
              <div className="col-lg-12">
                <ul class="nav nav-pills" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      Home
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
                <div class="tab-content py-3" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae cumque non ut.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo consequuntur voluptate itaque alias rerum autem fuga!
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum aperiam tempora quos?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
