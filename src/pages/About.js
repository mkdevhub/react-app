const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="text-block shortcode ">
            <p>
              Luminescent Digital established in 2015 to meet the growing
              technology needs of agencies in the UK and the Middle East. Today
              we provide digital project support and software development teams
              to a broad range of companies based across the EMEA and APAC
              regions. By focusing on communication, transparency and quality of
              delivery, we build successful, long term partnerships based on
              trust.
            </p>
            <p>
              With significant international experience, we can provide local
              insights on global projects and we encourage in person
              collaboration with our client teams wherever possible. In taking
              this approach, we provide a delivery model that combines the
              benefits of both onshore and offshore development teams.
            </p>
            <p>
              In 2019 Luminescent Digital became fully integrated into the
              Serviceplan Agency Group and is represented in 34 countries
              worldwide.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <img
            className="w-100"
            alt="Photos for company"
            src="//lumi-revamp.luminescent.digital/wp-content/uploads/2021/02/Website_About-Us.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
