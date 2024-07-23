class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque indefinido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new Hero('Arthas', 30, 'guerreiro');
  heroi1.atacar(); // Saída: "O guerreiro atacou usando espada"
  
  const heroi2 = new Hero('Gandalf', 1000, 'mago');
  heroi2.atacar(); // Saída: "O mago atacou usando magia"
  
  const heroi3 = new Hero('Bruce', 35, 'monge');
  heroi3.atacar(); // Saída: "O monge atacou usando artes marciais"
  
  const heroi4 = new Hero('Hanzo', 25, 'ninja');
  heroi4.atacar(); // Saída: "O ninja atacou usando shuriken"
  