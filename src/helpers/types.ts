export interface StateType {
  counter: number;
  poke: pokeDataType;
  score: number;
  pg: number;
}

export interface pokeDataType {
  name: string;
  isPoke: boolean;
  desc: string;
  img:string
}
