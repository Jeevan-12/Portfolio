import AboutMe from '../../components/AboutMe';
import PageHeader from '../../components/PageHeader';

const About = ({
  name,
  location,
  brand,
  email,
  availability,
  certificates,
}) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
        certificates={certificates}
      />
    </section>
  );
};

export default About;
