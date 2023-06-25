import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchLatestArticles } from "../utils/api";
import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetchLatestArticles()
      .then((data) => {
        setCurrentArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="sweet-loading">
        <RingLoader
          color="#1e3240"
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage currentArticles={currentArticles} />}
        />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
