export class InnerClass {
    acceptLambda(lambda: (str: string) => string) {
      return lambda("original string");
    }
  }