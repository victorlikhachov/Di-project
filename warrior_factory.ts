import { inject, injectable, interfaces } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { IWeapon } from './iweapon';
import { NamedWarrior } from './named-warrior';
import { TYPES } from './types';
import { IWarrior } from './warrior';

@injectable()
export class WarriorFactory implements IWarriorFactory {
  private _warriofFactory: (name: string) => IWarrior;
  public constructor (@inject("Factory<IWarrior>") factoryFn: () => (name:string) => IWarrior){
    this._warriofFactory=factoryFn();
  };
  public getWarriorByName(name: string): IWarrior {    
    return this._warriofFactory(name);
  }
}
