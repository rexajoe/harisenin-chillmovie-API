import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VerticalCards from "./components/VerticalCards";
import suzume from "./assets/suzume.png";
import missing from "./assets/missing.png";
import sonic from "./assets/sonic.png";
import quantumania from "./assets/quantumania.png";
import bigHero from "./assets/big-hero.png";

const DaftarSaya = () => {
  const daftarSaya = [
    { title: "Suzume", image: suzume, new: true },
    { title: "Missing", image: missing, new: true },
    { title: "Sonic", image: sonic, new: true },
    { title: "Quantumania", image: quantumania, new: false },
    { title: "Big Hero", image: bigHero, new: false },
  ];

  return (
    <div className="bg-[#181A1C]">
      <Navbar />
      <VerticalCards title="Daftar Saya" cards={daftarSaya} />
      <Footer />
    </div>
  );
};

export default DaftarSaya;
