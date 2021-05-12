import { inject, injectable } from 'inversify';
import { IWeapon } from './iweapon';
import { TYPES } from './types';
import { IWarrior } from './warrior';

@injectable()
export class Ninja implements IWarrior {
  public constructor(@inject(TYPES.Weapon) private katana: IWeapon) {}

  public fight() {
    return 'fight: ' + this.katana.hit();
  }
  public sneak() {
    return 'sneak';
  }
}
