import React from "react";
import classnames from "classnames";

export const Card: React.FC<{
  card: number[];
  active: boolean;
  onClick: any;
}> = props => {
  return (
    <div
      className={classnames("card", {
        "card--active": props.active
      })}
    >
      {props.card.map((colour, index) => (
        <div
          onClick={() => props.onClick()}
          key={index}
          className={classnames(
            "square",
            { "square--base": index === 12 },
            { "square--move": colour === 1 }
          )}
        />
      ))}
    </div>
  );
};
