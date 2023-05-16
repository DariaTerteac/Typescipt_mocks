import { InnerClass } from "./inner-class";
import { OuterClass } from "./outer-class";

export function main() {
  const myClass = new OuterClass(new InnerClass());
  return myClass.pubsub.acceptLambda((input: string) => {
    return input; //need to test this
  });
}