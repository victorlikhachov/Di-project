import { IWarrior } from './warrior';

export interface IWarriorFactory {
  getWarriorFactory(): (name: string) => IWarrior;
}
