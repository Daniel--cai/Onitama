/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as styles from "./CardList.styles";
import React, { useCallback } from "react";
import { Cards } from "../../../constants/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../../store/card/actions";
import { Card } from "./Card";

import { State } from "../../../store";
import { Dispatch } from "redux";
import { CardActionTypes } from "../../../store/card/types";

export const CardList: React.FC<{
  cards: number[];
  neutral?: number;
  player: boolean;
}> = (props) => {
  const dispatch = useDispatch<Dispatch<CardActionTypes>>();
  const handleClick = useCallback(
    (index: number) => {
      dispatch(selectCard(index));
    },
    [dispatch]
  );
  const currentCard = useSelector<State, State["card"]>((store) => store.card);

  return (
    <Flex sx={styles.cardListCss}>
      {props.cards.map((card) => {
        return (
          <Card
            key={card}
            card={Cards[card]}
            onClick={() => handleClick(card)}
            active={card === currentCard.selected}
            disabled={false}
            player={props.player}
          />
        );
      })}
      {props.neutral != null && (
        <Card
          key={props.neutral}
          card={Cards[props.neutral]}
          onClick={() => {}}
          active={false}
          disabled={true}
          player={false}
        />
      )}
    </Flex>
  );
};

export default CardList;
