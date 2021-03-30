let bancoDados = require('./bancoDados.json');

let pets = bancoDados.pets;


const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    servico ? servico() : console.log('só vim dar uma olhadinha')
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

const apararUnhasPet = () => {
    console.log('Aparando unhas...');
}
atenderCliente(pets[0], darBanhoPet);
console.log("---------")
atenderCliente(pets[2], apararUnhasPet);
console.log("---------")
atenderCliente(pets[1]);