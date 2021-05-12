import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { Ninja } from './ninja';
import { TYPES } from './types';
import { IWarrior } from './warrior';
import getDecorators from 'inversify-inject-decorators';

export var container = new Container();

container.bind<IWarrior>(TYPES.Warrior).to(Ninja);

const { lazyInject } = getDecorators(container, false);

export { lazyInject };
