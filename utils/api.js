import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-nc-news.onrender.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export function fetchArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchLatestArticles(order) {
  return api
    .get(`/articles?order=${order}`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchCommentsById(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
}
