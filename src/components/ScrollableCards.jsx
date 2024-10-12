import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";
import { useEffect, useState } from "react";

const ScrollableCards = () => {
  const [topRatingMovies, setTopRatingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk menandai loading
  const [error, setError] = useState(null); // State untuk menandai error

  useEffect(() => {
    // Melakukan fetch data dari API
    Promise.all([
      fetch(
        "https://670a9713ac6860a6c2c9f1d0.mockapi.io/test/topRatingFilmDanSeries"
      ).then((res) => res.json()),
      fetch(
        "https://670a9713ac6860a6c2c9f1d0.mockapi.io/test/trendingMovies"
      ).then((res) => res.json()),
      fetch(
        "https://670a9713ac6860a6c2c9f1d0.mockapi.io/test/topRatingFilmDanSeries"
      ).then((res) => res.json()),
    ])

      .then(([topRatingData, trendingData, newMoviesData]) => {
        // Anggap response API berisi array film dengan properti title, image, dan new
        setTopRatingMovies(topRatingData);
        setTrendingMovies(trendingData);
        setNewMovies(newMoviesData);
        setLoading(false); // Set loading selesai
      })
      .catch((error) => {
        setError(error.message); // Menyimpan pesan error jika terjadi kesalahan
        setLoading(false);
      });
  }, []); // Array kosong agar efek ini hanya berjalan sekali setelah komponen di-mount

  if (loading) {
    return <p className="text-white">Loading movies...</p>; // Pesan loading
  }

  if (error) {
    return <p>Error: {error}</p>; // Pesan error
  }

  return (
    <div>
      <HorizontalCards />
      <VerticalCards
        title="Top Rating Film dan Series Hari Ini"
        cards={topRatingMovies}
      />
      <VerticalCards title="Film Trending" cards={trendingMovies} />
      <VerticalCards title="Rilis Baru" cards={newMovies} />
    </div>
  );
};

export default ScrollableCards;
