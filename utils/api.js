import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-iymk.onrender.com/api",
});

export function fetchArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function fetchLatestArticles() {
  return api.get("/articles?sort_by=created_at&order=asc").then(({ data }) => {
    return data.articles;
  });
}

export function fetchArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}
