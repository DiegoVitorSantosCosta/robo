const puppeteer = require('puppeteer');
const Fs = require('fs');

(async () => {
    let url = 'https://pokeapi.co/api/v2'
    let nomePoke = 'https://www.mundodeeluna.com/150pokemonsevolucao/'
    const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
//   await page.goto('https://pokeapi.co/api/v2/pokemon?offset=0&limit=800');
   await page.goto(nomePoke);

  const values = await page.evaluate(() => {

    let a = document.querySelector('tr')
    // let data = [...a].map( e => e.cells[0].innerText)
    // return JSON.parse(a)
    return a
  });

  // Fs.writeFile('teste.json',JSON.stringify(values,null,2),err =>{
  //     if(err) throw new Error('error')
  //     console.log('sucess');
  // })
console.log(a)
  await browser.close();
})();
