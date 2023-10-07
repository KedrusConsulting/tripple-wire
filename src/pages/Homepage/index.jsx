import Anyone from "./Anyone";
import Blog from "./Blog";
import Header from "./Header";
import Support from "./Support";
import CMPetra from "./CMPetas";
import FeaturedIn from "./FeaturedIn";
import HowTo from "./HowTo";
import Participate from "./Participate";
import Playnow from "./Playnow";

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
