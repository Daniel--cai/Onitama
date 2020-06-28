/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as styles from "./CardList.styles";

import React from "react";

export const Card: React.FC<{
  card: number[];
  active: boolean;
  onClick: any;
  disabled: boolean;
  player: boolean;
}> = (props) => {
  return (
    <div sx={styles.cardCss(props.player, props.active, props.disabled)}>
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
