export type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

export type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

export type Todo = DeepReadonly<X>; // should be same as `Expected`

export type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    };
