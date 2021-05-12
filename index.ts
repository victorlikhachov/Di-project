// Import stylesheets
import './style.css';
import { container, lazyInject } from './dicontainer';
import { IWarrior } from './warrior';
import { TYPES } from './types';
import { IWeapon } from './iweapon';
import { NamedWarrior } from './named-warrior';

class WarriorFactory {
  public getWarriorByName(name: string): IWarrior {
    return new NamedWarrior(name);
  }
}


var ninja = container.get<IWarrior>(TYPES.Warrior);
const fight = ninja.fight();

const factory = new WarriorFactory();
const namedWarrior = factory.getWarriorByName('Victor');
const namedWarriorCry = namedWarrior.fight();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ninja says: ${namedWarriorCry}</h1>`;
