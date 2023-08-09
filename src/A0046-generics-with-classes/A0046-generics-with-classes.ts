export class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T) {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  size(): number {
    return this.counter;
  }

  allElements(): { [k: number]: T } {
    return this.elements;
  }
}

const pilha = new Stack();
pilha.push({ name: 'a' });
pilha.push({ name: 'b' });
pilha.push({ name: 'c' });
console.log(pilha);
pilha.pop();
console.log(pilha);

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
