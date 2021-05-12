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

export var container = new Container();


container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<IWarrior>(TYPES.Warrior).to(Ninja);
container.bind<IWarriorFactory>(TYPES.WarriorFactory)
     .toDynamicValue((context: interfaces.Context) => {
             return new WarriorFactory()}); 

const { lazyInject } = getDecorators(container, false);
export { lazyInject };
