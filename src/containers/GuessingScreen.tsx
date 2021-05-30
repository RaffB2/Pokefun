import { useEffect, useReducer, useState } from "react";
import { pokeData } from "../helpers/pokeData";
import { StateType } from "../helpers/types";
import { PlayScreen } from "./PlayScreen";
import { TFScreen } from "./TFScreen";
import "./guessing.css"

const reducer = (state: StateType, action: number) => {
  switch (action) {
    case 0:
      return {
        counter: state.counter - 1,
        poke: state.poke,
        score: state.score,
        pg: 0,
      };

    case 1:
      return {
        counter: state.counter - 1,
        poke: state.poke,
        score: state.score + 1,
        pg: 1,
      };

    case 2: {
      return {
        ...state,
        pg: 2,
        poke: getPokemon(),
      };
    }
    default:
      return state;
  }
};
const getPokemon = () => {
  let index = 0;
  index++;
  console.log(index)
  return pokeData[Math.floor(Math.random() * pokeData.length)];
};

const initialState: StateType = {
  counter: 10,
  poke: getPokemon(),
  score: 0,
  pg: 2,
};

export const GuessingScreen = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const evaluatePokemon = (val: boolean) => {
    if (state.poke.isPoke === val) {
      dispatch(1);
    } else {
      dispatch(0);
    }
  };

  return (
    <>{state.counter > 0 ? <>{state.pg === 2 ? (
      <PlayScreen state={state} evaluatePokemon={evaluatePokemon} />
    ) : (
      <TFScreen state={state} dispatch={dispatch} />
    )}</> : <div className="end-game-container"><p className="end-game-text">{`You have guessed ${state.score} correctly`}</p></div>}

    </>
  );
};



