import { Container } from 'inversify';
import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { weapons_module } from './weapons-module';
import { warriors_module } from './warriors-module';

export var container = new Container();

container.load(weapons_module, warriors_module);
const { lazyInject } = getDecorators(container, false);
export { lazyInject };
