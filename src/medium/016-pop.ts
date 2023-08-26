export type arr1 = ['a', 'b', 'c', 'd']
export type arr2 = [3, 2, 1]

export type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
export type re2 = Pop<arr2> // expected to be [3, 2]

export type Pop<T> = T extends [...infer B , infer _] ? B : never; 