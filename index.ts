// Import stylesheets
import './style.css';
import { container, lazyInject } from './dicontainer';
import { IWarrior } from './warrior';
import { TYPES } from './types';
import { IWeapon } from './iweapon';

class WarriorFactory {
  public getWarriorByName(name: string): IWarrior {
    return new NamedWarrior(name);
  }
}

class NamedWarrior implements IWarrior {
  @lazyInject(TYPES.Weapon)
  public weapon: IWeapon;
  public constructor(public name: string) {}
  public fight() {
    return `My name: '${this.name}';  I do: '${this.weapon.hit()}''`;
  }
  public sneak() {
    return 'sneak';
  }
}

var ninja = container.get<IWarrior>(TYPES.Warrior);
const fight = ninja.fight();

const factory = new WarriorFactory();
const namedWarrior = factory.getWarriorByName('Victor');
const namedWarriorCry = namedWarrior.fight();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ninja says: ${namedWarriorCry}</h1>`;
