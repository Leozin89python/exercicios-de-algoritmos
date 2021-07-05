type Games = {
    game    :string,
    company :string,
    print   :(  game :string, company :string) => void
}

let ea :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}

let ubisoft :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}

let sega :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}


let nintendo :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}

let playstation :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}

let xbox :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}


let capcom :Games = {
    game    :'',
    company :'',
    print   :(  game :string, company :string) => {
        console.log(`name: ${game}, comapny: ${company} `)
    }
}


xbox.print('lost planet 3', 'X-box live')
ea.print('crysis 2','Electronic Arts')
ea.print('crysis ','Electronic Arts')
sega.print('sonic the hedgehog', 'Sega')
ubisoft.print('splinter cell :chaos theory', 'Ubisoft')
ubisoft.print('cold fear', 'Ubisoft')
nintendo.print('mario world','Nintendo')
playstation.print('crash 3','PlayStation')
capcom.print('resident evil 4','Capcom')
capcom.print('super street fighter II','Capcom')

//===================================================================================


interface hero  {
    name        :string,
    ed          :string,
    level       :number,
    heroFactory :( name :string, ed :string, level :number) => void
}

let Marvel :hero = {
    name        :'',
    ed          :'',
    level       :0,
    heroFactory :( name :string, ed :string, level :number) => {
        console.log(`Character: ${name}, Team: ${ed}, Character level (1 to 5): ${level}`)
    }
}

let Dc :hero = {
    name        :'',
    ed          :'',
    level       :0,
    heroFactory :( name :string, ed :string, level :number) => {
        console.log(`Character: ${name}, Team: ${ed}, Character level (1 to 5): ${level}`)
    }
}

Marvel.heroFactory('Bruce Banner','Marvel', 5)
Dc.heroFactory('Bruce Wayne','Dc', 5)
Marvel.heroFactory('Natasha Homanoff','Marvel', 3)
Dc.heroFactory('Wally West','Dc', 5)
Dc.heroFactory('Oliver Queen','Dc', 4)
Marvel.heroFactory('Pietro Maximoff','Marvel', 4)
Marvel.heroFactory('Nat Grey','Marvel', 5)
Dc.heroFactory('Brainiac','Dc', 5)
Dc.heroFactory('Virgil Hawkins','Dc', 5)
