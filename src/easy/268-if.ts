export type A = If<true, "a", "b">; // expected to be 'a'
export type B = If<false, "a", "b">; // expected to be 'b'

export type If<C, T, F> = C extends true ? T : F;
