const nomePetshop = "Petshop dH";

let pets = [
    {
        nome: 'Granolinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso:  3,
        tutor: 'Mari',
        contato: '(84) 99999-5555',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Miu',
        tipo: 'gato',
        idade: 6,
        raca: 'Vira-lata',
        peso:  5,
        tutor: 'Marcia',
        contato: '(84) 99999-6666',
        vacinado: false,
        servicos: ['banho', 'tosa do bumbum']
    },
    {
        nome: 'Morcega',
        tipo: 'gato',
        idade: 4,
        raca: 'Vira-lata',
        peso:  5,
        tutor: 'humano',
        contato: '(84) 99999-7777',
        vacinado: false,
        servicos: ['banho', 'tosa', 'corte de unha']
    }    
];


/*
Uma forma de definir que todos os pets estão vacinados
const vacinarPets = () => {
    for(let pet of pets){ 
        console.log(`O pet está vaciado? ${pet.vacinado = true}`);
    }   
}
vacinarPets();
*/

/*const vacinarPets = (nome) => {
    for (let pet of pets){
        if(pet.nome == nome){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} está vacinade`);
        }
    }
}
vacinarPets("Miu");
*/

const campanhaVacina = () => {
    var petsVacinados = 0;
    for (let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            petsVacinados++;
        }
    }
    console.log(`O número de pets vacinados é ${petsVacinados}`);
}
campanhaVacina();

const novoCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    pets.push({ nome: nome, tipo: tipo, idade: idade, raca: raca, peso:peso, tutor: tutor, contato: contato, vacinado: vacinado, servicos: servicos});
}

novoCliente("Elsa", "cachorro", 5, "poodle", 10, "Lúcio", "(81) 99990-5555", true, "banho");

//Função dar banho
const darBanhoPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("banho");
            console.log(`O pet ${pet.nome} está de banho tomado!`);
        }        
    }    
}
darBanhoPet("Miu");

//Função tosar
const tosarPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("tosar");
            console.log(`O pet ${pet.nome} está tosado!`);
        }        
    }    
}
tosarPet("Miu");

//Função aparar unhas
const apararUnhasPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("apararUnhasPet");
            console.log(`O pet ${pet.nome} está de unhas aparadas!`);
        }        
    }    
}
apararUnhasPet("Miu");

const listarPets = () => {
    for(let pet of pets){
    //for(let i = 0; i < pets.length; i++){
        // console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.peso}, ${pet.tutor}, ${pet.contato}, ${pet.vacinado}, ${pet.servicos}`);
    }
}
//listarPets();