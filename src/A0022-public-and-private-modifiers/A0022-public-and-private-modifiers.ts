class Company {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
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

class Collaborators {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Company('Udemy', '11.111.111/0001-11');
const collaborators1 = new Collaborators('Marcus', 'Vinícius');
const collaborators2 = new Collaborators('colaborador', '2');
const collaborators3 = new Collaborators('colaborador', '3');
company1.setCollaborator(collaborators1);
company1.setCollaborator(collaborators2);
company1.setCollaborator(collaborators3);
company1.getCollaborator();
console.log(company1);
console.log(company1.name);
