import React from 'react';

function Achievements() {
  return (
    <section className="achievements">
      <h2>Achievements</h2>

      <ol>
        <li><strong>Salesforce Slack Championship Award, 2022</strong> - Winner of global hackathon at NCR Corporation.</li>

        <h3>Featured LinkedIn Post</h3>
        <div className="iframe-container">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6989440915790512128"
            height="782"
            width="100%"  
            frameBorder="0"
            allowFullScreen=""
            title="Embedded post"
          ></iframe>
        </div>

        <li><strong>Best Leader Award, 2015</strong> - Recognized by Nobel Laureate Kailash Satyarthi and Infosys founder Narayana Murthy.</li>

        <h3>Featured YouTube Video</h3>
        <div className="iframe-container">
          <iframe
            width="100%"  
            height="450"
            src="https://www.youtube.com/embed/wGJ6AlgWj5E?start=1062"
            title="5th Yuva Summit 2015"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </ol>
    </section>
  );
}

export default Achievements;
