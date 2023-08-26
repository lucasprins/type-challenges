export type arr1 = ["a", "b", "c"];
export type arr2 = [3, 2, 1];
export type arr3 = [3];

export type head1 = First<arr1>; // expected to be 'a'
export type head2 = First<arr2>; // expected to be 3
export type head3 = First<arr3>; // expected to be 3

export type First<T> = T extends [infer A, ...infer _] ? A : never;
