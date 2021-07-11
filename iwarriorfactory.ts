import { IWarrior } from './warrior';

export interface IWarriorFactory {
  createWarriorByName(name: string): IWarrior;
}
