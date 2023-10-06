import Anyone from "./Anyone";
import Blog from "./Blog";
import CMPetra from "./CMPetas";
import FeaturedIn from "./FeaturedIn";
import Header from "./Header";
import HowTo from "./HowTo";
import Participate from "./Participate";
import Playnow from "./Playnow";
import Support from "./Support";

const Homepage = () => {
  return (
    <>
      <Header />
      <Support />
      <CMPetra />
      <Anyone />
      <HowTo />
      <Participate />
      <FeaturedIn />
      <Playnow />
      <Blog />
    </>
  );
};

export default Homepage;
