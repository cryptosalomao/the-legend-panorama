const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/medium.jpeg',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  markers: [
    {
      id: 'marker1',
      longitude: 0.50,
      latitude: -0.26,
      html: `<span class='description'>Shopping Ibirapuera</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: '4min à pé | Lazer'
      }
    },
    {
      id: 'marker2',
      longitude: 0.9,
      latitude: -0.98,
      html: `<span class='description'>Metrô Eucalipto</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: '4min à pé | Conveniência'
      }
    },
    {
      id: 'marker3',
      longitude: -2.4,
      latitude: -0.37,
      html: `<span class='description'>Rua Normandia</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: '3min à pé | Lazer'
      }
    },
    {
      id: 'marker4',
      longitude: -2.6,
      latitude: -0.55,
      html: `<span class='description'>Hocca Bar Moema</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: '3min à pé | Lazer'
      }
    },
    {
      id: 'marker5',
      longitude: -2.02,
      latitude: -0.26,
      html: `<span class='description'>Hannover Fondue</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '6min à pé | Lazer'
      }
    },
    {
      id: 'marker6',
      longitude: -2.32,
      latitude: -0.16,
      html: `<span class='description'>St. Marche</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: '13min de bike | Conveniência'
      }
    },
    {
      id: 'marker7',
      longitude: -2.61,
      latitude: -0.16,
      html: `<span class='description'>Hosp. Santa Paula</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health hide-show',
      tooltip: {
        content: '14min de bike | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker8',
      longitude: -1.61,
      latitude: -0.28,
      html: `<span class='description'>Bo.Bô</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '8min à pé | Lazer'
      }
    },
    {
      id: 'marker9',
      longitude: -0.89,
      latitude: 0.05,
      html: `<span class='description'>Parque Ibirapuera</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      tooltip: {
        content: '30min de bike | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker10',
      longitude: -0.75,
      latitude: -0.08,
      html: `<span class='description'>Pizzaria Speranza</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '14min de bike | Lazer'
      }
    },
    {
      id: 'marker11',
      longitude: 0.99,
      latitude: 0.04,
      html: `<span class='description'>Aeroporto de Congonhas</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: '36min de bike | Conveniência'
      }
    },
    {
      id: 'marker12',
      longitude: 1.49,
      latitude: -0.21,
      html: `<span class='description'>Bourbon Street</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: '6min à pé | Lazer'
      }
    },
    {
      id: 'static1',
      longitude: -2.02,
      latitude: -0.65,
      html: `<span class='description'>Windhuck</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '2min à pé | Lazer'
      }
    },
    {
      id: 'static2',
      longitude: -1.08,
      latitude: -0.58,
      html: `<span class='description'>Gajos Moema</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: '3min à pé | Lazer'
      }
    },
    {
      id: 'static3',
      longitude: -1.34,
      latitude: -0.10,
      html: `<span class='description'>Bacio di Latte</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '4min à pé | Lazer'
      }
    },
    {
      id: 'static4',
      longitude: -2.15,
      latitude: -0.13,
      html: `<span class='description'>Pain et Chocolat</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '8min à pé | Lazer'
      }
    },
    {
      id: 'static5',
      longitude: -1.91,
      latitude: 0.02,
      html: `<span class='description'>Stuppendo</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '8min à pé | Lazer'
      }
    },
    {
      id: 'static6',
      longitude: -2.24,
      latitude: 0.02,
      html: `<span class='description'>Studio Velocity</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health hide-show',
      tooltip: {
        content: '9min à pé | Saúde e Bem-Estar'
      }
    },
    {
      id: 'static7',
      longitude: -0.92,
      latitude: -0.25,
      html: `<span class='description'>Restaurante Ayoyama</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '12min de bike | Lazer'
      }
    },
    {
      id: 'static8',
      longitude: -1.84,
      latitude: -0.06,
      html: `<span class='description'>Cabana Burger</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '13min de bike | Lazer'
      }
    },
    {
      id: 'static9',
      longitude: -1.36,
      latitude: 0.04,
      html: `<span class='description'>Supermercado Mambo</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv hide-show',
      tooltip: {
        content: '18min de bike | Conveniência'
      }
    },
    {
      id: 'static10',
      longitude: -1.77,
      latitude: -0.02,
      html: `<span class='description'>HairSpa Laces</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health hide-show',
      tooltip: {
        content: '19min de bike | Saúde e Bem-Estar'
      }
    },
    {
      id: 'static11',
      longitude: -1.06,
      latitude: -0.02,
      html: `<span class='description'>Parque das Bicicletas</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      tooltip: {
        content: '24min de bike | Saúde e Bem-Estar'
      }
    },
    {
      id: 'static15',
      longitude: -1.61,
      latitude: -0.15,
      html: `<span class='description'>Lanchonete da Cidade</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer hide-show',
      tooltip: {
        content: '30min de bike | Lazer'
      }
    },
    {
      id: 'static16',
      longitude: -0.46,
      latitude: -0.85,
      html: `<span class='description'>Pão de Açúcar</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: '3min à pé | Conveniência'
      }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
