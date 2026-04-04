import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Devops-Server Engineer</h4>
                <h5>Techspace Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
  Worked as a DevOps-Server Engineer at Techspace Solutions, Pune, contributing to projects like Delmar and FarmCloud by leading end-to-end ETL development and managing data integration workflows with high data quality. Managed and maintained server infrastructure and PostgreSQL databases, ensuring performance, security, and reliability. Built and optimized CI/CD pipelines using GitLab, automated deployments, and handled containerization with Docker and Kubernetes across multiple environments. Configured Nginx web servers, implemented SSL using Certbot, and managed DNS infrastructure for secure operations. Performed database migration from OpenERP to Odoo 14 with minimal downtime. Monitored systems using AWS CloudWatch and New Relic, troubleshot issues, and collaborated with cross-functional teams to deliver scalable and high-availability solutions using AWS, Terraform, and Python scripting.
</p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
