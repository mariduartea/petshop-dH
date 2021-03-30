const moment = require('moment');
const nomePetshop = "PETSHOP2.0";
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de objeto javastript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualizaçao do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8'); 
}

//Função para listar os pets:
const listarPets = () => {
    for (let pet of bancoDados.pets) {
        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}`);

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);            
        }        
    }
}

//Vamos vacinar os pets:
const vacinarPets = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinade! :)`);      
    } else {
        console.log(`${pet.nome} já está vacinade.`);        
    }
}
//vacinarPets(pets[2]);

//Campanha de vacinação, vamos descobrir quantos pets estão vacinados!
const campanhaVacina = () => {
    console.log("Campanha de vacina oferecida pelo Petshop2.0");

    let petsVacinadosCampanha = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPets(pet);
            petsVacinadosCampanha++;
        }
        return pet;
    });
    // atualizarBanco();
    console.log(`${petsVacinadosCampanha} pets foram vacinados nessa campanha.`);
    campanhaVacina();

    // for (let pet of bancoDados.pets) {
    //     if (!pet.vacinado) {
    //         vacinarPets(pet);
    //         petsVacinadosCampanha++;
    //     }
    // }
    // console.log(`O número de pets vacinados é: ${petsVacinadosCampanha}`);
}
// campanhaVacina();

//Vamos adicionar novos pets!
const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso.`);
} 

//Serviço de banho:
const darBanho = pet => {
    pet.servicos.push({
        'nome': 'tomou banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`)
}

// darBanho(bancoDados.pets[0]);

//Serviço de tosa:
const tosarPet = pet => {
    pet.servicos.push({
        'nome': 'tosou os pelos',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está tosado!`)
}

// tosarPet(bancoDados.pets[1]);

//Serviço de aparar as unhas:
const apararUnhas = pet => {
    pet.servicos.push({
        'nome': 'aparou as unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`)
}

// apararUnhas(bancoDados.pets[2]);

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome} seja bem vinde!`)
    servico(pet);
    atualizarBanco();
    console.log("Tchau!");
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com esse nome ${nomePet}`
}


const filtrarTipoPet = (tipoPet) => {
    let petsEncontados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet && !pet.vacinado;
    });

    return petsEncontados;
}

filtrarTipoPet();

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}


darBanho(bancoDados.pets[4]);
darBanho(bancoDados.pets[4]);
darBanho(bancoDados.pets[4]);
darBanho(bancoDados.pets[4]);
darBanho(bancoDados.pets[4]);
clientePremium(bancoDados.pets[4])
console.log(buscarPet('Miu'));
console.log(clientePremium(bancoDados.pets[2]));


//atenderCliente(bancoDados.pets[0], apararUnhas)

adicionarPet(
    {
        "nome": "Mu",
        "tipo": "gato",
        "idade": 4,
        "raca": "Vira-lata",
        "peso": 15,
        "tutor": "Siq",
        "contato": "(84) 99999-0011",
        "vacinado": false,
        "servicos": []    
    }
);

//console.log("---------------------------")
//listarPets();