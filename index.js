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
      html: `<a href='https://www.google.com.br/maps/@-23.6098687,-46.6678036,3a,75y,93.62h,94.34t/data=!3m8!1e1!3m6!1sAF1QipMvKM-h0DvbWDUPlNdTEVrFR7v0P3VXhseWteMf!2e10!3e11!6shttps://lh5.googleusercontent.com/p/AF1QipMvKM-h0DvbWDUPlNdTEVrFR7v0P3VXhseWteMf=w203-h100-k-no-pi-0-ya166.34555-ro-0-fo100!7i2508!8i1254' target='_blank'>
              <span class='description'>Shopping Ibirapuera</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'/>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 4min | Lazer'
      }
    },
    {
      id: 'marker2',
      longitude: 0.9,
      latitude: -0.98,
      html: `<a href='https://www.google.com.br/maps/@-23.6100195,-46.6683591,3a,75y,324.31h,94.29t/data=!3m7!1e1!3m5!1sL-Y4PNnvlorqSuMwkyREjw!2e0!6s//geo3.ggpht.com/cbk?panoid=L-Y4PNnvlorqSuMwkyREjw&output=thumbnail&cb_client=maps_sv.tactile.gps&thumb=2&w=203&h=100&yaw=78.558205&pitch=0&thumbfov=100!7i16384!8i8192' target='_blank'>
              <span class='description'>Metrô Eucalipto</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'/>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: 'Distância andando: 4min | Conveniência'
      }
    },
    {
      id: 'marker3',
      longitude: -2.4,
      latitude: -0.37,
      html: `<a href='https://www.google.com.br/maps/@-23.6082044,-46.6711358,3a,75y,337.06h,87.53t/data=!3m6!1e1!3m4!1s39EcMyl8lUjq-jtkb8jZvg!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Rua Normandia</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 3min | Lazer'
      }
    },
    {
      id: 'marker4',
      longitude: -2.6,
      latitude: -0.55,
      html: `<a href='https://www.google.com.br/maps/@-23.6087005,-46.670683,3a,75y,95.08h,98.23t/data=!3m6!1e1!3m4!1sAF1QipPAZlQYCWrBwW2MpkZ2LZBB5mWZHXHcfa_IUR2u!2e10!7i2508!8i1254' target='_blank'>
              <span class='description'>Hocca Bar Moema</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 3min | Lazer'
      }
    },
    {
      id: 'marker5',
      longitude: -2.02,
      latitude: -0.26,
      html: `<a href='https://www.google.com.br/maps/@-23.6066598,-46.6715987,3a,60y,51.65h,88.79t/data=!3m6!1e1!3m4!1svtllx6rKATte-cUJ2PCUZw!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Hannover Fondue</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 6min | Lazer'
      }
    },
    {
      id: 'marker6',
      longitude: -2.32,
      latitude: -0.16,
      html: `<a href='https://www.google.com.br/maps/@-23.6018315,-46.6741171,3a,75y,61.51h,92.51t/data=!3m6!1e1!3m4!1sb1mKltAyF2JUAagAOtK-aQ!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>St. Marche</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: 'Distância andando: 13min | Conveniência'
      }
    },
    {
      id: 'marker7',
      longitude: -2.61,
      latitude: -0.16,
      html: `<a href='https://www.google.com.br/maps/@-23.6056678,-46.6755846,3a,75y,314.7h,101.31t/data=!3m7!1e1!3m5!1sGgf4iaHgDU1YZj-xn8QJZw!2e0!6s//geo0.ggpht.com/cbk?panoid=Ggf4iaHgDU1YZj-xn8QJZw&output=thumbnail&cb_client=maps_sv.tactile.gps&thumb=2&w=203&h=100&yaw=114.13289&pitch=0&thumbfov=100!7i16384!8i8192' target='_blank'>
              <span class='description'>Hosp. Santa Paula</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      tooltip: {
        content: 'Distância andando: 14min | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker8',
      longitude: -1.61,
      latitude: -0.28,
      html: `<a href='https://www.google.com.br/maps/@-23.6061853,-46.6701015,3a,75y,115.58h,95.54t/data=!3m6!1e1!3m4!1s5p-ORrGxYj7B4Ob_Rp_AcQ!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Bo.Bô</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 8min | Lazer'
      }
    },
    {
      id: 'marker9',
      longitude: -0.89,
      latitude: 0.05,
      html: `<a href='https://www.google.com.br/maps/@-23.5951848,-46.6644684,3a,75y,20.01h,104.28t/data=!3m6!1e1!3m4!1sAF1QipPt_S10jXoVt1qwhRU661JePkJcuD7Moe2u5klP!2e10!7i7680!8i3840' target='_blank'>
              <span class='description'>Parque do Ibirapuera</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      tooltip: {
        content: 'Distância andando: 30min | Distância de carro: 10min | Saúde e Bem-Estar'
      }
    },
    {
      id: 'marker10',
      longitude: -0.75,
      latitude: -0.08,
      html: `<a href='https://www.google.com.br/maps/@-23.6026934,-46.6626704,3a,75y,177.53h,100.92t/data=!3m6!1e1!3m4!1s6sD5YPeDupyfpaNl3RsvJQ!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Pizzaria Speranza</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 14min | Lazer'
      }
    },
    {
      id: 'marker11',
      longitude: 0.99,
      latitude: 0.04,
      html: `<a href='https://www.google.com.br/maps/@-23.6258182,-46.6613993,3a,75y,53.23h,98.25t/data=!3m6!1e1!3m4!1sQnVFK6Ta_NQ6Uc3Q7ynUNw!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Aeroporto de Congonhas</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      tooltip: {
        content: 'Distância andando: 36min | Distância de Carro: 6min | Conveniência'
      }
    },
    {
      id: 'marker12',
      longitude: 1.49,
      latitude: -0.21,
      html: `<a href='https://www.google.com.br/maps/@-23.612734,-46.6691695,3a,60y,76.77h,84.47t/data=!3m6!1e1!3m4!1s6Um5o09gBKmSSwEEYNOV3A!2e0!7i16384!8i8192' target='_blank'>
              <span class='description'>Bourbon Street</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-blue.png' width='32'></img>
            </a>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 6min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 2min | Lazer'
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
        content: 'Distância andando: 3min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 4min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 8min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 8min | Lazer'
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
      className: 'health',
      tooltip: {
        content: 'Distância andando: 9min | Saúde e Bem-Estar'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 12min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 13min | Lazer'
      }
    },
    {
      id: 'static9',
      longitude: -1.36,
      latitude: -0.04,
      html: `<span class='description'>Supermercado Mambo</span>
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
        content: 'Distância andando: 18min | Distância de Carro: 6min | Conveniência'
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
      className: 'health',
      tooltip: {
        content: 'Distância andando: 19min | Distância de Carro: 8min | Saúde e Bem-Estar'
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
        content: 'Distância andando: 24min | Distância de Carro: 8min | Saúde e Bem-Estar'
      }
    },
    {
      id: 'static12',
      longitude: -1.08,
      latitude: 0.06,
      html: `<span class='description'>Museu de Arte Moderna</span>
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
        content: 'Distância andando: 30min | Distância de Carro: 10min | Lazer'
      }
    },
    {
      id: 'static13',
      longitude: -1.08,
      latitude: -0.01,
      html: `<span class='description'>Museu de Arte Contemporânea</span>
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
        content: 'Distância andando: 30min | Distância de Carro: 10min | Lazer'
      }
    },
    {
      id: 'static14',
      longitude: -0.98,
      latitude: 0.02,
      html: `<span class='description'>Museu Afro Brasil</span>
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
        content: 'Distância andando: 30min | Distânciade de Carro: 10min | Lazer'
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
      className: 'lazer',
      tooltip: {
        content: 'Distância andando: 30min | Distância de Carro: 10min | Lazer'
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
        content: 'Distância andando: 3min | Conveniência'
      }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
