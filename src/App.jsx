import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
