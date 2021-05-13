// Import stylesheets
import './style.css';
import { IWarrior } from './warrior';
import { TYPES } from './types';
import { IWarriorFactory } from './iwarriorfactory';
import { container } from './inversify.config';
import { PropertyInjectionWarrior } from './property-injection-warrior';

var ninja = container.get<IWarrior>(TYPES.Warrior);
const fight = ninja.fight();

const factory = container.get<IWarriorFactory>(TYPES.WarriorFactory);
const namedWarrior = factory.getWarriorByName('Victor');
const namedWarriorCry = namedWarrior.fight();

const propertyInjectionWarrior = new PropertyInjectionWarrior('Hela');
const helaWarriorCry = propertyInjectionWarrior.fight();

const factoryFn = container.get<() => (name:string) => IWarrior>('Factory<IWarrior>');
const warriorsFactory=factoryFn()

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>[from factory] ${namedWarriorCry}</h1>
                    <h1>[resolved] ${warriorsFactory('Prabh').fight()}</h1>
                    <h1>[resolved] ${fight}</h1>
                    <h1>${helaWarriorCry}</h1>`;
