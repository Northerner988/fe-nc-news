import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-iymk.onrender.com/api",
});

export function fetchArticles(order, sort_by, topic) {
  return api
    .get("/articles", { params: { order, sort_by, topic } })
    .then(({ data }) => {
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

export function fetchCommentsById(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function patchArticleVotes(article_id, vote) {
  const patchBody = {
    inc_votes: vote,
  };
  return api.patch(`/articles/${article_id}`, patchBody).then(({ data }) => {
    return data.article;
  });
}

export function postArticleComment(article_id, postComment) {
  return api
    .post(`/articles/${article_id}/comments`, postComment)
    .then(({ data }) => {
      return data.comment;
    });
}
export function fetchTopics() {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
}
