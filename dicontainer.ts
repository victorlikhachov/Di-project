import { injectable } from 'inversify';
import 'reflect-metadata';

export interface Warrior {
  fight: () => string;
  sneak: () => string;
}

@injectable()
class Ninja implements Warrior {
  public constructor() {}

  public fight() {
    return 'fight!';
  }
  public sneak() {
    return 'sneak';
  }
}

export let TYPES = {
  Warrior: Symbol('Warrior'),
  Weapon: Symbol('Weapon'),
  ThrowableWeapon: Symbol('ThrowableWeapon')
};

export var container = new di.Container();

container.bind<Warrior>(TYPES.Warrior).to(Ninja);
