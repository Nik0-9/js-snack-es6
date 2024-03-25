

/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

const guestsVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];

const listOfTypography = guestsVip.map((el, i) => {
    const newList = {
        tableName: 'Tavolo Vip:',
        guestName: el,
        place: i + 1
    }
    return newList;
});

console.log(`
    Lista da mandare alla tipografia`);
listOfTypography.forEach((currentEl) => console.log(currentEl.tableName, currentEl.guestName, currentEl.place));

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

/*
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
*/
const students = [
    {
        id: '213',
        name: 'Marco della Rovere',
        Grades: '78',
    },
    {
        id: '110',
        name: 'Paola Cortellessa',
        grades: '96',
    },
    {
        id: '250',
        name: 'Andrea Mantegna',
        grades: '48',
    },
    {
        id: '145',
        name: 'Gaia Borromini',
        grades: '74',
    },
    {
        id: '196',
        name: 'Luigi Grimaldello',
        grades: '68',
    },
    {
        id: '102',
        name: 'Piero della Francesca',
        grades: '50',
    },
    {
        id: '120',
        name: 'Francesca da Polenta',
        grades: '84',
    },
];

const studentsUpperCase = students.map((el) => {
    return el.name.toUpperCase();
})

console.log(`
    Targhette nomi in maiuscolo`);
for (let student of studentsUpperCase) {

    console.log(student);
}

const studentsPlus70 = students.filter((el) => {
    return el.grades > 70;
})

console.log(`
    Studenti con voti superiori a 70`);
for (let plus70 of studentsPlus70)
    console.log(plus70.id, plus70.name, plus70.grades);

const studentsGrades70Id120 = students.filter((el) => {
    return el.grades > 70 && el.id > 120
});

console.log(`
    Studenti con voti superiori a 70 e id superiore a 120`);
for (let best of studentsPlus70)
    console.log('id:' + best.id, best.name + ' voto', + best.grades);

console.log('NUOVI SNACK 3 & 4');

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bicycle = [
    {
        name: 'pippo',
        weight: 300
    },
    {
        name: 'pluto',
        weight: 600
    },
    {
        name: 'paperino',
        weight: 200
    }
];

let { name, weight } = bicycle[0];
console.log(name, weight);

for (let i = 1; i < bicycle.length; i++) {
    if (bicycle[i].weight < weight) {
        weight = bicycle[i].weight;
        name = bicycle[i].name;
    }
}
console.log(`la bici meno pesante è quella di:${name}`);

/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let squads = [
    {
        nome: 'barletta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'bari',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'foggia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'brindisi',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'lecce',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'taranto',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

squads.forEach((el) => {
    el.puntiFatti = getRndInteger(1, 99);
    el.falliSubiti = getRndInteger(1, 50);
});
for(let squad of squads){console.log(squad)};

const newSquads = squads.map((el) => {
    const squad = {
        nome: el.nome,
        falliSubiti: el.falliSubiti
    }
    return squad;
});
for(let squad of newSquads){console.log(squad)};


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



