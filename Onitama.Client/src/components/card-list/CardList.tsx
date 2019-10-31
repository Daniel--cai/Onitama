import React, { useCallback } from "react";
import { Cards } from "../../constants/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../store/card/actions";
import { Card } from "./Card";

import { State } from "../../store";
import { Dispatch } from "redux";
import { CardActionTypes } from "../../store/card/types";
import "./CardList.scss";

export const CardList: React.FC<{}> = _ => {
  const dispatch = useDispatch<Dispatch<CardActionTypes>>();
  const handleClick = useCallback(
    (index: number) => {
      dispatch(selectCard(index));
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
          onClick={() => handleClick(index)}
          active={index === currentCard}
        />
      ))}
    </div>
  );
};
