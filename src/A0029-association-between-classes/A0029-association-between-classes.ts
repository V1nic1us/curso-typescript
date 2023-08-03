export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não tem ferramenta para escrever');
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  get nameTool(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pen extends Tool {
  write(): void {
    console.log('Escrevendo de caneta');
  }
}

export class Machine extends Tool {
  write(): void {
    console.log('Escrevendo na maquina');
  }
}

const w1 = new Writer('marcus');
const w2 = new Writer('Vinicius');
const p1 = new Pen('caneta');
const m1 = new Machine('Maquina de escrever');
w1.tool = p1;
w2.tool = m1;
// console.log(w1);
w1.write();
// console.log(w2);
w2.write();
