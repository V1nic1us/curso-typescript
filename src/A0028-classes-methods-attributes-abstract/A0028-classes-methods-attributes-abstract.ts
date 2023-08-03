export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  strike(character: Character): void {
    console.log(`${this.name} esta atacando...`);
    this.speak();
    character.loseLife(this.attack);
  }

  loseLife(attackStrength: number): void {
    this.life -= attackStrength;
    console.log(`${this.emoji} - ${this.name} agora tem ${this.life} de vida...`);
  }

  abstract speak(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';
  speak(): void {
    console.log(`${this.emoji} Ataque com a espada`);
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';
  speak(): void {
    console.log(`${this.emoji} AAAAAAAAAAAA!!!`);
  }
}

const warrior = new Warrior('Guerreira', 100, 100);
const monster = new Monster('Monstro', 200, 1000);

warrior.strike(monster);
warrior.strike(monster);
warrior.strike(monster);
warrior.strike(monster);

monster.strike(warrior);
monster.strike(warrior);
monster.strike(warrior);
monster.strike(warrior);
