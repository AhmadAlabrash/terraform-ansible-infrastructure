export default function Home() {
  const featuredJobs = [
    {
      title: "Senior Frontend Developer",
      company: "PixelForge",
      location: "Berlin, Germany",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      company: "Nova Labs",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      company: "CloudNest",
      location: "Amsterdam, Netherlands",
      type: "Contract",
    },
    {
      title: "Marketing Manager",
      company: "BrightScale",
      location: "London, UK",
      type: "Full-time",
    },
  ];

  const categories = [
    "Technology",
    "Design",
    "Marketing",
    "Sales",
    "Customer Support",
    "Finance",
  ];

  return (
    <>
      <div className="page">
        <header className="navbar">
          <div className="logo">NextJob</div>
          <nav className="navLinks">
            <a href="#features">Features</a>
            <a href="#jobs">Jobs</a>
            <a href="#categories">Categories</a>
            <a href="#cta">Get Started</a>
          </nav>
          <div className="navActions">
            <button className="ghostBtn">Sign In</button>
            <button className="primaryBtn">Post a Job</button>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="heroText">
              <span className="badge">#1 Modern Hiring Platform</span>
              <h1>
                Find your next opportunity with us <span>NextJob</span>
              </h1>
              <p>
                A smart job platform for companies to post jobs and for talent
                to discover, apply, and get hired faster — all in one place.
              </p>

              <div className="searchBox">
                <input type="text" placeholder="Job title, keyword, or company" />
                <input type="text" placeholder="City or remote" />
                <button className="searchBtn">Search Jobs</button>
              </div>

              <div className="heroButtons">
                <button className="primaryBtn large">Apply for Jobs</button>
                <button className="secondaryBtn large">Hire Talent</button>
              </div>

              <div className="stats">
                <div>
                  <h3>10k+</h3>
                  <p>Active Jobs</p>
                </div>
                <div>
                  <h3>5k+</h3>
                  <p>Companies</p>
                </div>
                <div>
                  <h3>20k+</h3>
                  <p>Applications</p>
                </div>
              </div>
            </div>

            <div className="heroCard">
              <div className="cardGlow" />
              <div className="jobPreview">
                <p className="smallLabel">Featured Position</p>
                <h3>Full Stack Developer</h3>
                <p className="muted">at NextJob Technologies</p>

                <div className="tags">
                  <span>Remote</span>
                  <span>Full-time</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>

                <div className="salaryBox">
                  <strong>$90k - $120k</strong>
                  <p>Easy apply • Posted 2 days ago</p>
                </div>

                <button className="primaryBtn full">Apply Now</button>
              </div>
            </div>
          </section>

          <section className="brands">
            <p>Trusted by growing teams and ambitious talent</p>
            <div className="brandGrid">
              <span>TechNova</span>
              <span>HireFlow</span>
              <span>CloudAxis</span>
              <span>DesignHub</span>
              <span>TalentSync</span>
            </div>
          </section>

          <section id="features" className="section">
            <div className="sectionHeader">
              <span className="sectionTag">Features</span>
              <h2>Everything you need to hire and get hired</h2>
              <p>
                NextJob makes job posting, searching, and applying simple,
                modern, and fast.
              </p>
            </div>

            <div className="featureGrid">
              <div className="featureCard">
                <h3>Post Jobs Easily</h3>
                <p>
                  Companies can create job posts in minutes and reach qualified
                  candidates faster.
                </p>
              </div>
              <div className="featureCard">
                <h3>Smart Job Search</h3>
                <p>
                  Applicants can filter by role, location, salary, and job type
                  to find the perfect fit.
                </p>
              </div>
              <div className="featureCard">
                <h3>One-Click Apply</h3>
                <p>
                  Let candidates apply quickly with a streamlined application
                  flow and profile system.
                </p>
              </div>
              <div className="featureCard">
                <h3>Company Profiles</h3>
                <p>
                  Showcase your brand, culture, and benefits to attract top
                  talent.
                </p>
              </div>
              <div className="featureCard">
                <h3>Application Tracking</h3>
                <p>
                  Manage applicants, review submissions, and track hiring
                  progress from one dashboard.
                </p>
              </div>
              <div className="featureCard">
                <h3>Remote & Global Jobs</h3>
                <p>
                  Support local hiring or global remote recruitment with flexible
                  job visibility.
                </p>
              </div>
            </div>
          </section>

          <section id="jobs" className="section">
            <div className="sectionHeader">
              <span className="sectionTag">Featured Jobs</span>
              <h2>Explore top opportunities</h2>
            </div>

            <div className="jobsGrid">
              {featuredJobs.map((job, index) => (
                <div key={index} className="jobCard">
                  <div className="jobTop">
                    <div>
                      <h3>{job.title}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span className="jobType">{job.type}</span>
                  </div>
                  <p className="jobLocation">{job.location}</p>
                  <div className="jobActions">
                    <button className="secondaryBtn">View Details</button>
                    <button className="primaryBtn">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="categories" className="section">
            <div className="sectionHeader">
              <span className="sectionTag">Categories</span>
              <h2>Browse jobs by category</h2>
            </div>

            <div className="categoryGrid">
              {categories.map((category, index) => (
                <div key={index} className="categoryCard">
                  <h3>{category}</h3>
                  <p>120+ open roles</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section splitSection">
            <div className="splitCard">
              <h2>For Employers</h2>
              <p>
                Publish jobs, manage applicants, and build your hiring pipeline
                with ease.
              </p>
              <button className="primaryBtn">Start Posting</button>
            </div>
            <div className="splitCard">
              <h2>For Job Seekers</h2>
              <p>
                Discover relevant roles, save favorites, and apply in just a few
                clicks.
              </p>
              <button className="secondaryBtn">Find Jobs</button>
            </div>
          </section>

          <section id="cta" className="ctaSection">
            <h2>Start your hiring journey with NextJob today</h2>
            <p>
              Whether you are looking for your next role or your next great
              hire, NextJob helps you move faster.
            </p>
            <div className="ctaButtons">
              <button className="primaryBtn large">Create Account</button>
              <button className="secondaryBtn large">Browse Jobs</button>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div>
            <h3>NextJob</h3>
            <p>Post jobs. Find talent. Build careers.</p>
          </div>
          <p>© 2026 NextJob. All rights reserved.</p>
        </footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 30%),
            radial-gradient(circle at top right, rgba(168, 85, 247, 0.18), transparent 25%),
            linear-gradient(180deg, #020617 0%, #0f172a 100%);
          color: white;
          font-family: Arial, sans-serif;
        }

        .navbar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          color: #60a5fa;
        }

        .navLinks {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .navLinks a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 15px;
          transition: 0.2s;
        }

        .navLinks a:hover {
          color: white;
        }

        .navActions {
          display: flex;
          gap: 12px;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 40px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          background: rgba(96, 165, 250, 0.08);
          color: #93c5fd;
          border-radius: 999px;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .heroText h1 {
          font-size: 58px;
          line-height: 1.1;
          margin: 0 0 20px;
          max-width: 700px;
        }

        .heroText h1 span {
          color: #60a5fa;
        }

        .heroText p {
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.7;
          max-width: 640px;
        }

        .searchBox {
          margin-top: 28px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.16);
          padding: 14px;
          border-radius: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .searchBox input {
          background: #0f172a;
          color: white;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 12px;
          padding: 14px 16px;
          outline: none;
          font-size: 15px;
        }

        .heroButtons,
        .ctaButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .stats {
          display: flex;
          gap: 40px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .stats h3 {
          margin: 0;
          font-size: 28px;
          color: #60a5fa;
        }

        .stats p {
          margin: 6px 0 0;
          font-size: 14px;
          color: #94a3b8;
        }

        .heroCard {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .cardGlow {
          position: absolute;
          width: 280px;
          height: 280px;
          background: rgba(96, 165, 250, 0.22);
          filter: blur(90px);
          border-radius: 50%;
          top: 20px;
        }

        .jobPreview {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.16);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
        }

        .smallLabel {
          color: #93c5fd;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .jobPreview h3 {
          font-size: 30px;
          margin: 0 0 6px;
        }

        .muted {
          color: #94a3b8;
          margin-bottom: 18px;
        }

        .tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .tags span,
        .jobType {
          background: rgba(96, 165, 250, 0.12);
          color: #bfdbfe;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 13px;
          border: 1px solid rgba(96, 165, 250, 0.2);
        }

        .salaryBox {
          background: rgba(30, 41, 59, 0.8);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 18px;
        }

        .salaryBox strong {
          font-size: 20px;
        }

        .salaryBox p {
          margin: 6px 0 0;
          color: #94a3b8;
          font-size: 14px;
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .brands {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 20px 40px;
        }

        .brands p {
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .brandGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .brandGrid span {
          padding: 18px;
          text-align: center;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 16px;
          color: #cbd5e1;
          font-weight: 600;
        }

        .sectionHeader {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .sectionTag {
          color: #93c5fd;
          font-size: 14px;
          margin-bottom: 10px;
          display: inline-block;
        }

        .sectionHeader h2 {
          font-size: 40px;
          margin: 0 0 14px;
        }

        .sectionHeader p {
          color: #94a3b8;
          line-height: 1.7;
        }

        .featureGrid,
        .jobsGrid,
        .categoryGrid,
        .splitSection {
          display: grid;
          gap: 22px;
        }

        .featureGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .jobsGrid {
          grid-template-columns: repeat(2, 1fr);
        }

        .categoryGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .splitSection {
          grid-template-columns: repeat(2, 1fr);
        }

        .featureCard,
        .jobCard,
        .categoryCard,
        .splitCard,
        .ctaSection {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 22px;
          padding: 26px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
        }

        .featureCard h3,
        .categoryCard h3,
        .splitCard h2 {
          margin-top: 0;
        }

        .featureCard p,
        .categoryCard p,
        .splitCard p,
        .jobCard p {
          color: #94a3b8;
          line-height: 1.6;
        }

        .jobTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }

        .jobTop h3 {
          margin: 0 0 6px;
        }

        .jobLocation {
          margin: 14px 0 20px;
        }

        .jobActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ctaSection {
          max-width: 1200px;
          margin: 0 auto 80px;
          text-align: center;
          padding: 60px 20px;
        }

        .ctaSection h2 {
          font-size: 42px;
          margin-top: 0;
        }

        .ctaSection p {
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 20px 50px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(148, 163, 184, 0.12);
          color: #94a3b8;
        }

        button {
          cursor: pointer;
          border: none;
          transition: 0.2s ease;
          font-weight: 700;
        }

        .primaryBtn,
        .searchBtn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          padding: 12px 18px;
          border-radius: 12px;
        }

        .primaryBtn:hover,
        .searchBtn:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .secondaryBtn,
        .ghostBtn {
          background: transparent;
          color: white;
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.22);
        }

        .secondaryBtn:hover,
        .ghostBtn:hover {
          background: rgba(148, 163, 184, 0.08);
        }

        .large {
          padding: 14px 22px;
          font-size: 15px;
        }

        .full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero,
          .featureGrid,
          .jobsGrid,
          .categoryGrid,
          .splitSection,
          .brandGrid {
            grid-template-columns: 1fr;
          }

          .heroText h1 {
            font-size: 42px;
          }

          .searchBox {
            grid-template-columns: 1fr;
          }

          .navbar {
            justify-content: center;
          }

          .navLinks,
          .navActions {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .heroText h1 {
            font-size: 34px;
          }

          .sectionHeader h2,
          .ctaSection h2 {
            font-size: 30px;
          }

          .stats {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}