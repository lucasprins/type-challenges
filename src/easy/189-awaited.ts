type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

type MyAwaited2<T> = T extends Promise<infer R> ? R : never;

type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
  T extends PromiseLike<infer V>
    ? V extends PromiseLike<any>
      ? MyAwaited<V>
      : V
    : never

