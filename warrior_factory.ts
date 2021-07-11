import { inject, injectable } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { TYPES } from './types';
import { IWarrior } from './warrior';

@injectable()
export class WarriorFactory implements IWarriorFactory {
  private _warriorFactory: (name: string) => IWarrior;
  public constructor(
    @inject(TYPES.WarriorFactoryBuilder) factoryFn: () => (name: string) => IWarrior
  ) {
    this._warriorFactory = factoryFn();
  }
  public createWarriorByName(name: string): IWarrior {
    return this._warriorFactory(name);
  }
}
