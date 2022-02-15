const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/medium.png',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  markers: [
    // Acessos
    {
      id: 'marker1',
      longitude: 0.03,
      latitude: -0.05,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Shopping Cidade Jardim</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
             </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        textAlign: 'center',
      },
      className: 'conv',
    },
    {
      id: 'marker2',
      longitude: 0.20,
      latitude: -0.12,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>D&D / CENU</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker3',
      longitude: 0.26,
      latitude: 0.01,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Hilton Hotel</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker4',
      longitude: 0.47,
      latitude: -0.48,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Grand Hyatt Hotel</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker5',
      longitude: 0.80,
      latitude: -0.49,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Avenida Berrini</span>
              </div>              
              <img class='pin' src='./img/pin-red.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '30px',
        textAlign: 'center'
      },
      className: 'acesso hide-show',
    },
    {
      id: 'marker6',
      longitude: 1.32,
      latitude: -0.04,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>St. March Brooklin</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker7',
      longitude: 1.48,
      latitude: -0.04,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Colégio Vértice</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
    },
    {
      id: 'marker8',
      longitude: 1.76,
      latitude: -0.08,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Avenida Santo Amaro</span>
              </div>              
              <img class='pin' src='./img/pin-red.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso hide-show',
    },
    {
      id: 'marker9',
      longitude: 1.90,
      latitude: -0.09,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Pão de Açúcar</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker10',
      longitude: 2.78,
      latitude: -0.29,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Av. Roque Petroni Jr.</span>
              </div>              
              <img class='pin' src='./img/pin-red.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso hide-show',
    },
    {
      id: 'marker11',
      longitude: 2.98,
      latitude: -0.22,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Morumbi Shopping</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    {
      id: 'marker12',
      longitude: 3.01,
      latitude: -0.27,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Restaurante Pobre Juan</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
    },
    // Conveniência
    {
      id: 'static1',
      longitude: 3.02,
      latitude: -0.47,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Teatro Vivo</span>
              </div>              
              <img class='pin' src='./img/pin-yellow.png' width='32'/>
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
    },
    {
      id: 'static2',
      longitude: -0.06,
      latitude: -0.48,
      html: `<div class='boxed'>
              <div class="wrapper">
                <span class='description'>Marginal Pinheiros</span>
              </div>              
              <img class='pin' src='./img/pin-red.png' />
            </div>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'acesso',
    },
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
