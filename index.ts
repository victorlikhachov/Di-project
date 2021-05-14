// Import stylesheets
import './style.css';
import { IWarrior } from './warrior';
import { TYPES } from './types';
import { IWarriorFactory } from './iwarriorfactory';
import { container } from './inversify.config';
import { PropertyInjectionWarrior } from './property-injection-warrior';

var ninja = container.get<IWarrior>(TYPES.Warrior);

const factoryGenerator = container.get<IWarriorFactory>(TYPES.WarriorFactory);
const namedWarrior = factoryGenerator.getWarriorFactory()('Victor');

const warrior_factory_func = container.get<(name: string) => IWarrior>(
  TYPES.WarriorFactoryFunc
);
const teerathWarrior = warrior_factory_func('Teerath');

const propertyInjectionWarrior = new PropertyInjectionWarrior('Hela');
const helaWarriorCry = propertyInjectionWarrior.fight();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>[factory class] ${namedWarrior.fight()}</h1>
                    <h1>[resolved] ${ninja.fight()}</h1>
                    <h1>[factory func] ${teerathWarrior.fight()}</h1>
                    <h1>${helaWarriorCry}</h1>`;
