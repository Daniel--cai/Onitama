/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as styles from "./CardList.styles";

import React from "react";

export type CardSize = "small" | "large";

export const Card: React.FC<{
  card: number[];
  active: boolean;
  onClick: any;
  disabled: boolean;
  player: boolean;
  size?: CardSize;
  readonly?: boolean;
}> = (props) => {
  return (
    <div
      sx={styles.cardCss(
        props.player,
        props.active,
        props.disabled,
        props.size || "large"
      )}
    >
      {props.card.map((colour, index) => (
        <div
          onClick={() => {
            if (!props.disabled && props.player) props.onClick();
          }}
          key={index}
          sx={styles.squareCss(colour === 1, index === 12)}
        />
      ))}
    </div>
  );
};
