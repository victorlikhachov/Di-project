import { inject } from 'inversify';
import { lazyInject } from './dicontainer';
import { IWeapon } from './iweapon';
import { TYPES } from './types';
import { IWarrior } from './warrior';

export class NamedWarrior implements IWarrior {
  //@lazyInject(TYPES.Weapon)
  //public weapon: IWeapon;
  public constructor(
    public name: string,
    @inject(TYPES.Weapon) public weapon: IWeapon
  ) {}
  public fight() {
    return `My name: '${this.name}';  I do: '${this.weapon.hit()}''`;
  }
  public sneak() {
    return 'sneak';
  }
}
