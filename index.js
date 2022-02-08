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
      longitude: 0.01,
      latitude: -0.01,
      html: `<span class='description'>Shopping Cidade Jardim</span>
             <img src='./img/pin-green.png' width='32'/>`,
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
      id: 'marker2',
      longitude: 0.17,
      latitude: -0.06,
      html: `<span class='description'>D&D / CENU</span>
             <img src='./img/pin-green.png' width='32'/>`,
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
      longitude: 0.27,
      latitude: -0.1,
      html: `<span class='description'>Hilton Hotel</span>
              <img src='./img/pin-green.png' width='32'></img>`,
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
      latitude: -0.39,
      html: `<span class='description'>Grand Hyatt Hotel</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      longitude: 0.88,
      latitude: -0.49,
      html: `<span class='description'>Avenida Berrini</span>
             <img src='./img/pin-blue.png' width='32'></img>`,
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
      id: 'marker6',
      longitude: 1.32,
      latitude: -0.04,
      html: `<span class='description'>St Marche Brooklin</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      html: `<span class='description'>Colégio Vértice</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      html: `<span class='description'>Avenida Santo Amaro</span>
             <img src='./img/pin-blue.png' width='32'></img>`,
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
      html: `<span class='description'>Pão de Açúcar</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      html: `<span class='description'>Avenida Vicente Rao</span>
             <img src='./img/pin-blue.png' width='32'></img>`,
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
      longitude: 2.87,
      latitude: -0.26,
      html: `<span class='description'>Morumbi Shopping</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      longitude: 2.92,
      latitude: -0.32,
      html: `<span class='description'>Restaurante Pobre Juan</span>
             <img src='./img/pin-green.png' width='32'></img>`,
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
      html: `<span class='description'>Teatro Vivo</span>
             <img src='./img/pin-green.png' width='32'/>`,
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
      html: `<span class='description'>Marginal Pinheiros</span>
             <img src='./img/pin-blue.png' width='32'/>`,
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
