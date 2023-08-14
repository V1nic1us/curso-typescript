type VotationOptions = {
  numberOfVotes: number;
  option: languages | colors;
};

type languages = 'javascript' | 'python' | 'typescript';

type colors = 'azul' | 'vermelho' | 'verde';

export class Votation {
  private _votationOptions: VotationOptions[] = [];
  constructor(public details: string) {}

  addVotationOptions(votationOptions: VotationOptions) {
    this._votationOptions.push(votationOptions);
  }

  vote(votationIndex: number) {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  public get votationOption(): VotationOptions[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  showVotation() {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
    console.log('--------------------------------');
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOptions({ option: 'javascript', numberOfVotes: 1 });
votation1.addVotationOptions({ option: 'python', numberOfVotes: 2 });
votation1.addVotationOptions({ option: 'typescript', numberOfVotes: 4 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);

const votationApp1 = new VotationApp();
votationApp1.addVotation(votation1);

votationApp1.showVotation();

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOptions({ option: 'azul', numberOfVotes: 1 });
votation2.addVotationOptions({ option: 'verde', numberOfVotes: 2 });
votation2.addVotationOptions({ option: 'vermelho', numberOfVotes: 4 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);

const votationApp2 = new VotationApp();
votationApp2.addVotation(votation2);

votationApp2.showVotation();
