

class ApiController{
    constructor(){
        // this.begin()
        // this.asd()
        this.begin();
        this.color = []
    }
   async teste(){
        this.asd().then(succes =>{
           console.log(succes);
        },errr =>{

        })
    }
  async  begin(){

        this.api().then(resp => {
            console.log(resp[0].url);
            let div = document.querySelector('.div');

            for (let i = 0; i < 800; i++) {
                let divChild = document.createElement('div')

            fetch(resp[i].url)
            .then(res => res.json())
            .then(r =>{
           fetch( r.species.url)
           .then(res => res.json())
           .then(data =>{
               console.log(data);
               this.color = data.color.name

               divChild.style.backgroundColor = this.color

           })


                let img = document.createElement('img')

                // console.log(r.sprites.other.dream_world.front_default);

                img.setAttribute('src',r.sprites.other.dream_world.front_default);
                let p = document.createElement('p');
                let name = document.createTextNode(resp[i].name);
                divChild.setAttribute('class','image')
                p.appendChild(name);
                divChild.appendChild(img);
                divChild.appendChild(p);
                div.appendChild(divChild);
            })

            }

        // console.log(fetch(resp[0].url).then(response => response.json()).then(res =>{console.log(res);}));
        
        },
        error =>{

            alert('Ops algo deu errado')

        })
    }
  async api(){
      
        let url =  `https://pokeapi.co/api/v2/pokemon?offset=0&limit=800`;
                return new Promise ((resolve,rejects)=>{
                    fetch(url).then(response =>response.json())
                    .then(data =>{
                        
                        // Retorna os 20 objetos
                    resolve(data.results)
                    })

                    // onerror(event=>{
                    //     rejects(event)
                    // })
        })

    }
}