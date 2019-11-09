import React from "react";
import classnames from "classnames";

export const Card: React.FC<{
  card: number[];
  active: boolean;
  onClick: any;
  disabled: boolean;
  player: boolean;
}> = props => {
  return (
    <div
      className={classnames("card", {
        "card--active": props.active,
        "card--disabled": props.disabled,
        "card--player": props.player
      })}
    >
      {props.card.map((colour, index) => (
        <div
          onClick={() => {
            if (!props.disabled && props.player) props.onClick();
          }}
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
