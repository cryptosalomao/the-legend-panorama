const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/panorama.jpg',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  longitude_range: [0, 245],
  markers: [
    {
      id: 'marker1',
      longitude: 0.7,
      latitude: -0.07,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Shopping Ibirapuera`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 4min | Lazer'
      }
    },
    {
      id: 'marker2',
      longitude: 0.9,
      latitude: -0.3,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Metrô Eucalipto`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 4min | Conveniência'
      }
    },
    {
      id: 'marker3',
      longitude: -2.4,
      latitude: 0.17,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Rua Normandia`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 3min | Lazer'
      }
    },
    {
      id: 'marker4',
      longitude: -2.6,
      latitude: -0.025,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Hocca Bar Moema`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 3min | Lazer'
      }
    },
    {
      id: 'marker5',
      longitude: -1.92,
      latitude: 0.22,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Hannover Fondue`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 6min | Lazer'
      }
    },
    {
      id: 'marker6',
      longitude: -2.12,
      latitude: 0.32,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> St. Marche`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 13min | Conveniência'
      }
    },
    {
      id: 'marker7',
      longitude: -2.61,
      latitude: 0.36,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Hosp. Santa Paula`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 14min | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker8',
      longitude: -1.61,
      latitude: 0.25,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Bo.Bô`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 8min | Lazer'
      }
    },
    {
      id: 'marker9',
      longitude: -0.72,
      latitude: 0.47,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Parque do Ibirapuera`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 30min | Distância de carro: 10min | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker10',
      longitude: -0.46,
      latitude: 0.35,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Pizzaria Speranza`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 14min | Lazer'
      }
    },
    {
      id: 'marker11',
      longitude: 0.99,
      latitude: 0.47,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Aeroporto de Congonhas`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 36min | Distância de Carro: 6min | Conveniência'
      }
    },
    {
      id: 'marker12',
      longitude: 1.49,
      latitude: 0.28,
      html: `<img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img><br/> Bourbon Street`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      tooltip: {
        content: 'Distância andando: 6min | Lazer'
      }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
