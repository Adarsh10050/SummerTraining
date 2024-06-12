import React from 'react';
import './About.css';
import team_1 from './team_1.jpg';
import team_2 from './team_2.jpeg';
import team_3 from './team_3.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <section className="section section-one">
        <div className="content">
          <h2>Welcome to Our Website</h2>
          <p>We are dedicated to helping you find your lost belongings with ease and efficiency. Our innovative platform connects people who have lost items with those who have found them, creating a community-driven solution to a common problem.</p>
        </div>
      </section>
      <section className="section section-two">
        <div className="content-1">
          <h2>Our Mission</h2>
          <p>Our mission is to reunite lost items with their rightful owners. We believe in the power of community and technology to solve real-world problems, and we are committed to providing a platform that is accessible, reliable, and user-friendly.</p>
        </div>
      </section>
      <section className="section section-three">
        <div className="content-1">
          <h2>Our Team</h2>
          <p>Meet the dedicated team behind our platform. We are passionate about making a difference and are here to support you every step of the way.</p>
          <div className="team-members">

            <div className="team-member">
              <a href='https://www.linkedin.com/in/ayushi-sharma-4116a1251/'>    
                <img src={team_1} alt="first" />  
              </a>
              <h3>Ayushi Sharma</h3>
              <p>Data Analyst</p>
            </div>

            <div className="team-member">
              <a href='https://www.linkedin.com/in/amritanshu-kumar-656b392a8/'>  
               <img src={team_2} alt="second" /> 
              </a>  
              <h3>Amritanshu Dev</h3>      
              <p>CEO</p>
            </div>

            <div className="team-member">
              <a href='https://www.linkedin.com/in/adarsh-kumar-826936285/'>  
               <img src={team_3} alt="third" /> 
              </a>  
              <h3>Adarsh</h3>      
              <p>Developer</p>
            </div>
            
          </div>
        </div>
      </section>
      <section className="section section-four">
        <div className="content">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to reach out to us.</p>
          <div className="contact-info">
            <p>Email: rd1214744@gmail.com</p>
            <p>Phone: +91 85219 76815</p>
          </div>

          <div className="social-links">

               <a href="https://www.instagram.com/adarsh_dev_0/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg" alt="Instagram" />
              </a>

              <a href="https://x.com/Adarshdev121p" target="_blank" rel="noopener noreferrer">
                  <img src="https://media.licdn.com/dms/image/D4E12AQHGw13XBj2AIg/article-cover_image-shrink_720_1280/0/1691411078415?e=2147483647&v=beta&t=vc2gjXwZficFVKaUyK_h84xWfNATOWS4GuqRscwdGyE" alt="X" />
              </a>

              <a href="https://www.linkedin.com/in/adarsh-kumar-826936285/" target="_blank" rel="noopener noreferrer">
                  <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" />
              </a>

              <a href="https://github.com/Adarsh10050" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github" />
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;