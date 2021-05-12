import { IWarrior } from "./warrior";

export interface IWarriorFactory {
  getWarriorByName(name: string): IWarrior;
}