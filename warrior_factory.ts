import { IWarriorFactory } from "./iwarriorfactory";
import { NamedWarrior } from "./named-warrior";
import { IWarrior } from "./warrior";

export class WarriorFactory implements IWarriorFactory {
  public getWarriorByName(name: string): IWarrior {
    return new NamedWarrior(name);
  }
}