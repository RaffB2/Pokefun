import { StateType } from "../helpers/types";
import "./playScreen.css";

interface playScreenType {
  evaluatePokemon: (b: boolean) => void;
  state: StateType;
}

export const PlayScreen: React.FC<playScreenType> = (props) => (
  <div className="main-container">
    <div className="window">
      <div className="text">{props.state.poke.name}</div>
      <div className="button-container">
        <button
          onClick={() => props.evaluatePokemon(true)}
          className="button button-blue"
        >
          Pokémon
        </button>
        <button
          onClick={() => props.evaluatePokemon(false)}
          className="button button-blue"
        >
          Language
        </button>
      </div>
    </div>
  </div>
);
