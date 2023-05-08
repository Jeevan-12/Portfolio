import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const personalDetails = {
    name: 'Jeevan gowda B',
    location: 'Bengaluru, Karnataka',
    email: 'jeevangowdab97@gmail.com',
    availability: 'Open for work',
    brand:
      " I am a full stack web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
    certificates:
      'JavaScript Basic and intermidiate certificates from hackerhank',
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
