// Import stylesheets
import './style.css';
import { container, lazyInject } from './dicontainer';
import { IWarrior } from './warrior';
import { TYPES } from './types';

class WarriorFactory {
  @lazyInject(TYPES.Warrior)
  warrior: IWarrior;
}

class NamedWarrior implements IWarrior {
  public constructor(public name:string){}
  fight: () => string;
  sneak: () => string;
;
}

var ninja = container.get<IWarrior>(TYPES.Warrior);
const fight = ninja.fight();

const a = new WarriorFactory();
const s = a.warrior.fight();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ninja says: ${fight}</h1>`;
