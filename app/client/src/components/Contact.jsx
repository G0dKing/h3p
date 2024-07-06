import { } from 'react';

const SocialIcon = ({ platform, label }) => (
  <li>
    <a href="#" className={`icon brands fa-${platform}`}>
      <span className="label">{label}</span>
    </a>
  </li>
);

const Contact = () => {
  const socialPlatforms = [
    { platform: 'twitter', label: 'Twitter' },
    { platform: 'facebook-f', label: 'Facebook' },
    { platform: 'instagram', label: 'Instagram' },
    { platform: 'pinterest', label: 'Pinterest' },
    { platform: 'dribbble', label: 'Dribbble' },
    { platform: 'linkedin-in', label: 'Linkedin' }
  ];

  return (
    <section className="contact">
      <header>
        <h3>Nisl turpis nascetur interdum?</h3>
      </header>
      <p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
      <ul className="icons">
        {socialPlatforms.map((platform, index) => (
          <SocialIcon key={index} platform={platform.platform} label={platform.label} />
        ))}
      </ul>
    </section>
  );
};

export default Contact;