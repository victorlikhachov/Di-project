import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { Ninja } from './ninja';
import { TYPES } from './types';
import { IWarrior } from './warrior';
import getDecorators from 'inversify-inject-decorators';
import { IWeapon } from './iweapon';
import { Katana } from './katana';

export var container = new Container();

container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<IWarrior>(TYPES.Warrior).to(Ninja);

const { lazyInject } = getDecorators(container, false);

export { lazyInject };
