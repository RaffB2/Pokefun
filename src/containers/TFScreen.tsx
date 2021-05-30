import { useEffect } from "react";
import { StateType } from "../helpers/types";
import "./TFScreen.css";

interface TFScreenType {
  state: StateType;
  dispatch: (v: number) => void;
}
export const TFScreen: React.FC<TFScreenType> = (props) => {

  return (
    <div className="container">
      {props.state.pg === 1 ? (
        <Correct state={props.state} dispatch={props.dispatch} />
      ) : (
        <Incorrect state={props.state} dispatch={props.dispatch} />
      )}
    </div>
  );
};

interface GroupsType {
  state: StateType,
  dispatch: (x: number) => void
}

const Correct: React.FC<GroupsType> = (props) =>
(
  <div className="text-wrapper">
    <img src={props.state.poke.img} width="300" height="300" />
    <p className="p-correct">
      {`Correct, ${props.state.poke.name} is a ${props.state.poke.isPoke ? "Pokemon!" : "Library"
        }`}</p>
    <p className="desc">{props.state.poke.desc}</p>

    <button onClick={() => props.dispatch(2)} className="button-blue">{props.state.counter === 0 ? `Finish` : `Next`}</button>
  </div>)


const Incorrect: React.FC<GroupsType> = (props) => (
  <div className="text-wrapper">
    <img src={props.state.poke.img} width="300" height="300" />
    <p className="p-incorrect">
      {`That is Incorrect, ${props.state.poke.name
        } is a ${props.state.poke.isPoke ? "Pokemon!" : "Library"
        }`}</p>
    <p className="desc">{props.state.poke.desc}</p>
    <button onClick={() => props.dispatch(2)} className="button-blue">{props.state.counter === 0 ? `Finish` : `Next`}</button>
  </div>
)