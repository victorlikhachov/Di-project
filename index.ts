// Import stylesheets
import './style.css';
import { IWarrior } from './warrior';
import { TYPES } from './types';
import { IWarriorFactory } from './iwarriorfactory';
import { container } from './inversify.config';
import { PropertyInjectionWarrior } from './property-injection-warrior';

var ninja = container.get<IWarrior>(TYPES.Warrior);
const fight = ninja.fight();

const factoryGenerator = container.get<IWarriorFactory>(TYPES.WarriorFactory);
const namedWarrior = factoryGenerator.getWarriorFactory()('Victor');
const namedWarriorCry = namedWarrior.fight();

const warrior_factory = container.get<(name: string) => IWarrior>(
  TYPES.WarriorFactoryFunc
);
const teerathWarrior = warrior_factory('Teerath');

const propertyInjectionWarrior = new PropertyInjectionWarrior('Hela');
const helaWarriorCry = propertyInjectionWarrior.fight();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>[from factory] ${namedWarriorCry}</h1>
                    <h1>[resolved] ${fight}</h1>
                    <h1>[resolved] ${teerathWarrior.fight()}</h1>
                    <h1>${helaWarriorCry}</h1>`;
