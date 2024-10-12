import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";
import suzume from "../assets/suzume.png";
import jurassicWorld from "../assets/jurassic-world.png";
import sonic from "../assets/sonic.png";
import allOfUs from "../assets/all-of-us.png";
import bigHero from "../assets/big-hero.png";
import theTommorowWar from "../assets/the-tomorrow-war.png";
import Quantumania from "../assets/quantumania.png";
import GuardianOfTheGalaxy from "../assets/guardian-of-the-galaxy.png";
import AManCalledOtto from "../assets/a-man-called-otto-portrait.png";
import LittleMermaid from "../assets/little-mermaid.png";
import missing from "../assets/missing.png";

const ScrollableCards = () => {
  const topRatingMovies = [
    { title: "Suzume", image: suzume, new: true },
    { title: "Jurassic World", image: jurassicWorld, new: true },
    { title: "Sonic", image: sonic, new: true },
    { title: "All of Us", image: allOfUs, new: false },
    { title: "Big Hero", image: bigHero, new: false },
  ];

  const trendingMovies = [
    { title: "The Tommorow War", image: theTommorowWar, new: true },
    { title: "Quantumania", image: Quantumania, new: true },
    { title: "Guardian of The Galaxy", image: GuardianOfTheGalaxy, new: false },
    { title: "A Man Called Otto", image: AManCalledOtto, new: true },
    { title: "Little Mermaid", image: LittleMermaid, new: false },
  ];

  const newMovies = [
    { title: "Little Mermaid", image: LittleMermaid, new: true },
    { title: "Big Hero", image: bigHero, new: true },
    { title: "Missing", image: missing, new: false },
    { title: "All Of Us", image: allOfUs, new: false },
    { title: "Quantumania", image: Quantumania, new: false },
  ];

  return (
    <div>
      <HorizontalCards />
      <VerticalCards title="Top Rating Film dan Series Hari Ini" cards={topRatingMovies} />
      <VerticalCards title="Film Trending" cards={trendingMovies} />
      <VerticalCards title="Rilis Baru" cards={newMovies} />
    </div>
  );
};

export default ScrollableCards;
