export const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

export type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P;
};
