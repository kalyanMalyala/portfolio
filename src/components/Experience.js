import React from 'react';

function Experience() {
  return (
    <section className="experience">
   
   <h2>Work Experience</h2>
  
  {/* Experience 1: LTIMindtree */}
  <div className="card">
    <h3><strong>Specialist Software Engineer (Tech Lead) at LTIMindtree</strong></h3>
    <p>September 2024 – Present</p>
    <ul>
      <li>Spearheading development and customization initiatives using Salesforce tools, including <strong>Lightning App Builder</strong>, <strong>LWC</strong>, <strong>API Development</strong>, <strong>JavaScript</strong>, <strong>Visualforce</strong>, <strong>Apex Batch Jobs</strong>, and <strong>Scheduled Jobs</strong>, <strong>Sales Cloud</strong>, <strong>Apex REST</strong>, <strong>Platform Events</strong>, <strong>SOQL</strong>, <strong>Flows</strong>, <strong>Validation Rules</strong>, <strong>Test Classes</strong>.</li>
      <li>Leading a team by assigning tasks, monitoring progress, and ensuring delivery aligns with project timelines and quality standards.</li>
      <li>Collaborating directly with clients to gather requirements, conduct discussions, and propose Salesforce-based solutions tailored to business needs.</li>
      <li>Overseeing the resolution of production issues to ensure seamless system functionality and minimize downtime.</li>
      <li>Driving innovation and efficiency in projects by providing technical mentorship and fostering a culture of continuous improvement within the team.</li>
      <li>Implementing integrations with external applications.</li>
      <li>Conducted internal Salesforce training workshops for new hires on LWC, Apex, and integrations.</li>
      <li>Helped design curriculum for internal Salesforce bootcamp, accelerating onboarding of 10+ developers.</li>
    </ul>
  </div>

  {/* Experience 2: NCR Corporation */}
  <div className="card">
    <h3><strong>Software Engineer II at NCR Corporation</strong></h3>
    <p>September 2019 – September 2024</p>
    <ul>
      <li>Development and customization using Salesforce tools such as <strong>Lightning App Builder</strong>, <strong>LWC</strong>, <strong>API development</strong>, <strong>JavaScript</strong>, <strong>Visualforce</strong>, <strong>Apex Batch jobs</strong>, and <strong>Scheduled jobs</strong>.</li>
      <li>Deep involvement throughout all stages of the <strong>Software Development Life Cycle (SDLC)</strong>.</li>
      <li>Mentored 4 junior developers, conducted code reviews, and facilitated technical upskilling sessions weekly.</li>
      <li>Led sprint planning meetings and collaborated closely with QA and stakeholders to ensure delivery matched client expectations.</li>
      <li>Configuration of Salesforce to align with company processes and translating business workflows.</li>
      <li>Dealing with integrations with external applications, using <strong>REST</strong> and <strong>SOAP APIs</strong>.</li>
      <li>Execution of SFDC administrative tasks including user creation, role assignment, email services, and more.</li>
      <li>Bulk data management using tools like <strong>Apex Data Loader</strong>.</li>
      <li>Implementing security and sharing rules at various organizational levels.</li>
      <li>Collaborating with cross-functional teams using tools like <strong>Jira</strong> for project tracking and <strong>Confluence</strong> for documentation.</li>
      <li>Using <strong>GitHub</strong> for version control, ensuring that all code changes are tracked and managed efficiently.</li>
      <li>Setting up and managing <strong>CI/CD pipelines</strong> with <strong>Jenkins</strong>, automating the code deployment process, and ensuring a smoother and more reliable release cycle.</li>
    </ul>
  </div>
    {/* Skills Section */}
    <div className="card">
      <h3>Technical Skills</h3>
      <ul>
        <li>Apex</li>
        <li>Lightning Web Components (LWC)</li>
        <li>Lightning App Builder</li>
        <li>Visualforce</li>
        <li>REST APIs</li>
        <li>SOAP APIs</li>
        <li>SOQL, SOSL</li>
        <li>GitHub, Jenkins</li>
        <li>Jira, Confluence</li>
        <li>Flows, Validation Rules</li>
        <li>Test Classes</li>
        <li>CI/CD, DevOps</li>
        <li>Data Loader, Salesforce Inspector</li>
        <li>Sales Cloud, Experience Cloud, Service Cloud</li>
        <li>Event-driven Architecture</li>
      </ul>
    </div>
    
    <div className="card">
      <h3>Leadership Skills</h3>
      <ul>
        <li>Agile Methodology</li>
        <li>Communication with Stakeholders</li>
        <li>Team Leadership</li>
        <li>Mentorship</li>
        <li>Sprint Planning</li>
        <li>Client Communication</li>
        <li>Cross-functional Collaboration</li>
        <li>Conflict Resolution</li>
        <li>Documentation Standards</li>
      </ul>
    </div>
  </section>
  );
}

export default Experience;
