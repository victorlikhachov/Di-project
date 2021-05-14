import { ContainerModule, interfaces } from 'inversify';
import { IWeapon } from './iweapon';
import { Katana } from './katana';
import { TYPES } from './types';

export const weapons_module = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound
  ) => {
    bind<IWeapon>(TYPES.Weapon).to(Katana);
  }
);
