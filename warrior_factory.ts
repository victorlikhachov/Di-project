import { injectable } from 'inversify';
import { IWarriorFactory } from './iwarriorfactory';
import { NamedWarrior } from './named-warrior';
import { IWarrior } from './warrior';

@injectable()
export class WarriorFactory implements IWarriorFactory {
  public getWarriorByName(name: string): IWarrior {
    return new NamedWarrior(name);
  }
}
