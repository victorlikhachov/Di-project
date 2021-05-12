import { lazyInject } from './inversify.config';
import { IWeapon } from './iweapon';
import { TYPES } from './types';
import { IWarrior } from './warrior';

export class PropertyInjectionWarrior implements IWarrior {
  @lazyInject(TYPES.Weapon)
  public weapon: IWeapon;
  public constructor(public name: string) {}
  public fight() {
    return `[property injection] My name: '${
      this.name
    }';  I do: '${this.weapon.hit()}''`;
  }
  public sneak() {
    return 'sneak';
  }
}
