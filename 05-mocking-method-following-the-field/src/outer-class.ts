import { InnerClass } from "./inner-class";

export class OuterClass {   
    pubsub: InnerClass;
    constructor(innerClassObj: InnerClass) {
      this.pubsub = innerClassObj;
    }
  }
  