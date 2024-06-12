import React from "react";

export default function Finish({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "🙃";
  else if (percentage > 0) emoji = "🤨";
  else emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        You Scored
        <strong>
          &nbsp;{points} &nbsp;out of {maxPossiblePoints} &nbsp;(
          {Math.ceil(percentage)}
          %)
        </strong>
        &nbsp;{emoji}
      </p>
      <p className="highscore">(Highscore:{highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
