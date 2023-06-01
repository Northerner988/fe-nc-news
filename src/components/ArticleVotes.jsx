import { useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

export default function updateArticleVotes({ article_id, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  function incVotes() {
    setCurrentVotes((currVotes) => currVotes + 1);
    setHasVoted(true);
    patchArticleVotes(article_id, 1).catch((err) => {
      setCurrentVotes((currVotes) => currVotes - 1);
      setHasVoted(false);
      setError(err);
    });
  }

  function decVotes() {
    setCurrentVotes((currVotes) => currVotes - 1);
    setHasVoted(true);
    patchArticleVotes(article_id, -1).catch((err) => {
      setCurrentVotes((currVotes) => currVotes + 1);
      setHasVoted(false);
      setError(err);
    });
  }

  return (
    <div className="article-votes">
      <IconButton
        aria-label="add"
        size="large"
        onClick={incVotes}
        disabled={hasVoted}
      >
        <AddRoundedIcon />
      </IconButton>{" "}
      <p>{currentVotes} Votes </p>
      <IconButton
        aria-label="minus"
        size="large"
        variant="outlined"
        onClick={decVotes}
        disabled={hasVoted}
      >
        <RemoveRoundedIcon />
      </IconButton>
      {error && <p>Sorry something went wrong, please vote again!</p>}
    </div>
  );
}
