import { inject, injectable } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { IWarrior } from './warrior';

@injectable()
export class WarriorFactory implements IWarriorFactory {
  private _warriorFactory: (name: string) => IWarrior;
  public constructor(
    @inject('Factory<IWarrior>') factoryFn: () => (name: string) => IWarrior
  ) {
    this._warriorFactory = factoryFn();
  }
  public getWarriorFactory(): (name: string) => IWarrior {
    return this._warriorFactory;
  }
}
