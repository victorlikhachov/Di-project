// Import stylesheets
import './style.css';
import { container, Warrior, TYPES } from './dicontainer';

var ninja = container.get<Warrior>(TYPES.Warrior);
const fight = ninja.fight();

// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ninja says: ${fight}</h1>`;
