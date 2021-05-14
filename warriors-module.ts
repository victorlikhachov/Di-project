import { ContainerModule, interfaces } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { IWeapon } from './iweapon';
import { NamedWarrior } from './named-warrior';
import { Ninja } from './ninja';
import { TYPES } from './types';
import { IWarrior } from './warrior';
import { WarriorFactory } from './warrior_factory';

export const warriors_module = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound
  ) => {
    bind<IWarrior>(TYPES.Warrior).to(Ninja);
    bind<IWarriorFactory>(TYPES.WarriorFactory).to(WarriorFactory);
    bind<interfaces.Factory<IWarrior>>('Factory<IWarrior>').toFactory<IWarrior>(
      context => {
        return () => (name: string) => {
          let weapon = context.container.get<IWeapon>(TYPES.Weapon);
          return new NamedWarrior(name, weapon);
        };
      }
    );

    bind<interfaces.Factory<IWarrior>>('Factory2<IWarrior>').toFactory<
      IWarrior
    >((context: interfaces.Context) => {
      return (name: string) => {
        let weapon = context.container.get<IWeapon>(TYPES.Weapon);
        return new NamedWarrior(name, weapon);
      };
    });
  }
);
