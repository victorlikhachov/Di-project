import { injectable, interfaces } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { IWeapon } from './iweapon';
import { NamedWarrior } from './named-warrior';
import { TYPES } from './types';
import { IWarrior } from './warrior';

@injectable()
export class WarriorFactory implements IWarriorFactory {
  public constructor (private container: interfaces.Container){};
  public getWarriorByName(name: string): IWarrior {
    var weapon = this.container.get<IWeapon>(TYPES.Weapon);
    return new NamedWarrior(name,weapon);
  }
}
