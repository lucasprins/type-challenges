export type tesla = ["tesla", "model 3", "model X", "model Y"];
export type spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"];

export type teslaLength = Length<tesla>; // expected 4
export type spaceXLength = Length<spaceX>; // expected 5

export type Length<T extends [...any]> = T["length"];


// let y = x['forEach']((el) => {

// })