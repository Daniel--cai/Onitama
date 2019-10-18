import React, { useCallback } from "react";
import "./CardList.scss";
import { Cards } from "../../constants/Card";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../store/card/actions";

import { State } from "../../store";
import { Dispatch } from "redux";
import { CardActionTypes } from "../../store/card/types";

export const CardList: React.FC<{}> = _ => {
  const dispatch = useDispatch<Dispatch<CardActionTypes>>();
  const handleClick = useCallback(
    (card: number[]) => {
      dispatch(selectCard(card));
    },
    [dispatch]
  );
  const currentCard = useSelector<State, State["card"]>(store => store.card);
  return (
    <div className="card-list">
      {Cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={() => handleClick(card)}
          active={card === currentCard}
        />
      ))}
    </div>
  );
};

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
