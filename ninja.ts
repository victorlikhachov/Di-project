import { injectable } from 'inversify';
import { IWarrior } from './warrior';

@injectable()
export class Ninja implements IWarrior {
  public constructor() {}

  public fight() {
    return 'fight!';
  }
  public sneak() {
    return 'sneak';
  }
}
