import { Container, injectable, interfaces } from 'inversify';
import 'reflect-metadata';
import { Ninja } from './ninja';
import { TYPES } from './types';
import { IWarrior } from './warrior';
import getDecorators from 'inversify-inject-decorators';
import { IWeapon } from './iweapon';
import { Katana } from './katana';
import { IWarriorFactory } from './iwarriorfactory';
import { WarriorFactory } from './warrior_factory';
import { NamedWarrior } from './named-warrior';
import { weapons_module } from './weapons-module';

export var container = new Container();

//container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<IWarrior>(TYPES.Warrior).to(Ninja);
container.bind<IWarriorFactory>(TYPES.WarriorFactory).to(WarriorFactory);

container
  .bind<interfaces.Factory<IWarrior>>('Factory<IWarrior>')
  .toFactory<IWarrior>(context => {
    return () => (name: string) => {
      let weapon = context.container.get<IWeapon>(TYPES.Weapon);
      return new NamedWarrior(name, weapon);
    };
  });

container
  .bind<interfaces.Factory<IWarrior>>('Factory2<IWarrior>')
  .toFactory<IWarrior>((context: interfaces.Context) => {
    return (name: string) => {
      let weapon = context.container.get<IWeapon>(TYPES.Weapon);
      return new NamedWarrior(name, weapon);
    };
  });

container.load(weapons_module);
const { lazyInject } = getDecorators(container, false);
export { lazyInject };
