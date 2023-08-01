export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborators[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setCollaborator(collaborators: Collaborators): void {
    this.collaborators.push(collaborators);
  }

  getCollaborator(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborators(): Collaborators | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;
    return null;
  }
}

export class Collaborators {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Udemy();
const collaborators1 = new Collaborators('Marcus', 'Vinícius');
const collaborators2 = new Collaborators('colaborador', '2');
const collaborators3 = new Collaborators('colaborador', '3');
company1.setCollaborator(collaborators1);
company1.setCollaborator(collaborators2);
company1.setCollaborator(collaborators3);
company1.popCollaborators();
console.log(company1);
