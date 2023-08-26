type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type Replace<T extends string, V extends string, N extends string> = V extends ""
  ? T
  : T extends `${infer A}${V}${infer B}`
  ? `${A}${N}${B}`
  : T;
