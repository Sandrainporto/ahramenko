import Greetings from '../../widgets/Greetings/Greetings';
import Messages from '../../widgets/Messages/Messages';
import MyLife from '../../widgets/MyLife/MyLife';

const AboutMe = () => {
  return (
    <main className="main">
      <Greetings />
      <Messages />
      <MyLife />
    </main>
  );
};

export default AboutMe;
