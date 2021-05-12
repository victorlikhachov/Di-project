import { injectable } from 'inversify';
import { IWeapon } from './iweapon';

@injectable()
export class Katana implements IWeapon {
  public hit() {
    return 'cut!';
  }
}
