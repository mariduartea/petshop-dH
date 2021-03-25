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
        vacinado: true,
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
        vacinado: true,
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
        vacinado: true,
        servicos: ['banho', 'tosa', 'corte de unha']
    }    
];

const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets();

// console.log(pets);