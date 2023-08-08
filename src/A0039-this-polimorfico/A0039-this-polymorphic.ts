export class Calculator {
  constructor(protected value: number) {}

  sum(n: number): this {
    this.value += n;
    return this;
  }

  sub(n: number): this {
    this.value -= n;
    return this;
  }

  mul(n: number): this {
    this.value *= n;
    return this;
  }

  div(n: number): this {
    this.value /= n;
    return this;
  }
}

export class Subcalculator extends Calculator {
  pot(n: number): this {
    this.value **= n;
    return this;
  }
}

const calculator = new Calculator(5);
calculator.sum(5).sub(5).mul(2).div(2);
console.log(calculator);

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    if (this.method !== null && this.url !== null) {
      console.log(`Conectando ao ${this.url} com metodo ${this.method} `);
    } else {
      console.log('Não possui uma url ou um metodo valido');
    }
  }
}

const request = new RequestBuilder();
request.setMethod('get');
request.setUrl('www.google.com');
request.send();
