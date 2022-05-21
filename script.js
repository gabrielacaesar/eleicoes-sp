mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGFjYWVzYXIiLCJhIjoiY2wzYnNkMTNtMGljbzNqbzE3dmw5Z2w2ZCJ9.P46AUfDHOf004qL6rCXFLw';
 

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gabrielacaesar/cl3c7kgdh005n15pfsjmxyv1q',
  center: [-60,-15],
  zoom: 3,
  pitch: 0,
  scrollWheelZoom: false
})


/////////////

// 1. criar uma função para verificar 
// se o gatilho chegou ao topo da página
function escutaScroll(event){
    // A função deve...
    // Pegar a lista de gatilhos
    let gatilhos = document.querySelectorAll(".gatilhos > section");

    // A função deve...
    // Fazer loop pela lista de gatilhos
    for(let gatilho of gatilhos){
        // Para cada um deles, pegar a posição atual
        let posicao = gatilho.getBoundingClientRect();
        // Para cada um deles, pegar o valor da propriedade data-alvo
        let local = gatilho.dataset.local;

        
        // Verificar se o gatilho está acima do topo da página
        if(posicao.top <= 0 && posicao.top > -posicao.height){
          if(local == "UF"){
              // se sim, adiciona a classe que exibe o gráfico
              // posicao.classList.add('passo-ativo');
              // posicao.style.display = 'flex'
              map.flyTo({
                center: [-48, -22], // estado de sp
                zoom: 6,
                pitch: 20
              }) 
          } 
          else if(local == "home"){
            map.flyTo({
              center: [-60, -15], // home
              zoom: 3,
              pitch: 0
            }) 
          }
          else if(local == "saltinho"){
            map.flyTo({
              center: [-47.67652, -22.81049], // saltinho
              zoom: 11,
              pitch: 90,
              bearing: 40
            }) 
          }
          else if(local == "birigui"){
            map.flyTo({
              center: [-50.2817, -21.2969], // birigui
              zoom: 10,
              pitch: 63,
              bearing: 49
            }) 
          }
          else if(local == "lins"){
            map.flyTo({
              center: [-49.7196, -21.6611], // birigui
              zoom: 10,
              pitch: 64,
              bearing: 63
            }) 
          }
          else if(local == "limeira"){
            map.flyTo({
              center: [-47.3618, -22.5918], // limeira
              zoom: 10.35,
              pitch: 88,
              bearing: 69
            }) 
          }
          else if(local == "piracicaba"){
            map.flyTo({
              center: [-47.7946, -22.7115], // piracicaba
              zoom: 10,
              pitch: 39.2,
              bearing: 65
            }) 
          }
        else if(local == "sj-rio-preto"){
            map.flyTo({
              center: [-49.3777, -20.8494], // sao jose do rio preto
              zoom: 10.34,
              pitch: 20,
              bearing: 72
            }) 
          }
          else if(local == "ec-paulista"){
            map.flyTo({
              center: [-52.5394, -22.6326], // euclides da cunha paulista
              zoom: 8.59,
              pitch: 92,
              bearing: 67
            }) 
          }
          else if(local == "itapura"){
            map.flyTo({
              center: [-51.495, -20.6265], // itapura
              zoom: 9.75,
              pitch: 42,
              bearing: 70
            }) 
          }
          else if(local == "sandovalina"){
            map.flyTo({
              center: [-51.6914, -22.5742], // sandovalina
              zoom: 10.35,
              pitch: 131.2,
              bearing: 67
            }) 
          }
          else if(local == "taboao-da-serra"){
            map.flyTo({
              center: [-46.77954, -23.61416], // taboao da serra
              zoom: 12.82,
              pitch: 47.2,
              bearing: 71
            }) 
          }
          else if(local == "diadema"){
            map.flyTo({
              center: [-46.6144, -23.69821], // diadema
              zoom: 12.18,
              pitch: 0,
              bearing: 70
            }) 
          }
          else if(local == "itaquaquecetuba"){
            map.flyTo({
              center: [-46.336, -23.4665], // itaquaquecetuba
              zoom: 10.95,
              pitch: 135.2,
              bearing: 62
            }) 
          }
          else if(local == "capital"){
            map.flyTo({
              center: [-46.6236, -23.5829], // capital
              zoom: 11.15,
              pitch: 30
            })
          }
          else if(local == "final"){
            map.flyTo({
                center: [-48, -22], // estado de sp
                zoom: 6,
                pitch: 0
            })
          }
        }
    }
}

// 2. pedir ao navegador para escutar 
// o evento de rolagem da página
window.addEventListener('scroll', escutaScroll);