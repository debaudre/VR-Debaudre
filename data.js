var APP_DATA = {
  "scenes": [
    {
      "id": "0-cour_carre",
      "name": "Cour carré",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.0788984456380959,
        "pitch": -0.04002405794008723,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -0.1151562932672654,
          "pitch": 0.11149114187577958,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2502642883921801,
          "pitch": -0.33755105090892528,
          "title": "lycée",
          "text": "Le lycée Jean Baptiste Debaudre a ouvert pour la première fois le 1 novembre 1924, Cette école devient collège technique en 1953, puis lycée technique en 1960. Le lycée prend le nom de l'ingénieur Jean-Baptiste De Baudre en 1992, le lycée offre aujourd’hui plusieurs possibilités d’enseignement général et technique et post bac ."
        },
	  ]
    },
    {
      "id": "1-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.14345171934199286,
        "pitch": -0.01000601448502536,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 0.04290123868620199,
          "pitch": 0.1571041639471531,
          "rotation": 0,
          "target": "3-cour"
        },
        {
          "yaw": 1.6285262917554988,
          "pitch": 0.08536149051368902,
          "rotation": 0,
          "target": "5-cour_passerelle"
        },
        {
          "yaw": -1.5764031825992166,
          "pitch": 0.09608849814049591,
          "rotation": 0,
          "target": "2-cdi"
        },
        {
          "yaw": 0.3254148029089734,
          "pitch": -0.24830727564563304,
          "rotation": 0,
          "target": "9-etage_science"
        },
        {
          "yaw": -3.0806422455777707,
          "pitch": 0.33184267332294937,
          "rotation": 0,
          "target": "0-cour_carre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cdi",
      "name": "CDI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3839344926056416,
          "pitch": 0.2675243847696418,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2018569109778312,
          "pitch": -1.5159387523056012e-7,
          "title": "cdi",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-cour",
      "name": "Cour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.02187312342593728,
        "pitch": -0.005689727338857864,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 0.008897288613319176,
          "pitch": 0.0651535654294122,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -0.986646276090692,
          "pitch": 0.021125525163936842,
          "rotation": 0,
          "target": "5-cour_passerelle"
        },
        {
          "yaw": 2.377029075825651,
          "pitch": 0.06312617693644285,
          "rotation": 0,
          "target": "4-cours_indus"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7532053413232536,
          "pitch": -0.31776171518253093,
          "title": "general",
          "text": "Le Bac général prépare les élèves à une formation académique complète, leur permettant de s'orienter vers de nombreux domaines d'études supérieures. Ce parcours comprend trois spécialités : Le Littéraire, Scientifique et l’Économique et Sociale. Pour plus d’information : <a href="http://lyceedebaudre.net/formations/baccalaureat/la-voie-generale/">ici</a>"

        },
        {
          "yaw": -1.5921745169522392,
          "pitch": -0.023185279891478672,
          "title": "gymnase (photo a faire)",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-cours_indus",
      "name": "Cours Indus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.7340731676551506,
        "pitch": 0.07768227764870339,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -2.5883608052514475,
          "pitch": 0.0682511919462847,
          "rotation": 0,
          "target": "3-cour"
        },
        {
          "yaw": 1.8669208212743928,
          "pitch": -0.0031921391176332747,
          "rotation": 0,
          "target": "8-bat_indus_interieur"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4502642883921801,
          "pitch": 0.13755105090892528,
          "title": "salle NSI",
          "text": "Text"
        },
        {
          "yaw": 2.3456093905274518,
          "pitch": 0.03752255431884066,
          "title": "400m",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-cour_passerelle",
      "name": "Cour Passerelle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.8374067541566266,
        "pitch": -0.03752255431884066,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 3.0948511551750197,
          "pitch": 0.10695262058192512,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": 0.07139778674064345,
          "pitch": -0.15280388443348158,
          "rotation": 0,
          "target": "6-passerell_internat"
        },
        {
          "yaw": -1.809754361579806,
          "pitch": 0.07428963815305423,
          "rotation": 0,
          "target": "3-cour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-passerell_internat",
      "name": "Passerelle Internat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.6150498383573009,
        "pitch": 0.22763682953426034,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 3.1262798456336807,
          "pitch": 0.04282760232773697,
          "rotation": 0,
          "target": "5-cour_passerelle"
        },
        {
          "yaw": -1.3337187659351777,
          "pitch": 0.5747710971123396,
          "rotation": 0,
          "target": "7-self"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01186281578687165,
          "pitch": 0.03261038827390905,
          "title": "internat",
          "text": "L’internat offre un service d’hébergement pour toute personne habitant loin, plusieurs tarifs sont disponibles, un diner et un petit déjeuner sont disponible ainsi qu’un hébergement pour chaque jour y compris le weekend. Pour plus d’information : http://lyceedebaudre.net/tarifs-service-restauration-et-hebergement/ "
        }
      ]
    },
    {
      "id": "7-self",
      "name": "Self",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.2994504666389055,
        "pitch": 0.04502706518259458,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.1440059213538056,
          "pitch": -0.13726520256147268,
          "rotation": 0,
          "target": "6-passerell_internat"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2283295863500978,
          "pitch": 0.07233891150417193,
          "title": "self",
          "text": "Le Self est l’endroit ou les élèves et étudiants peuvent se restaurer et manger durant la pause méridienne, comme tout self, il faut crée son repas entre les différents choix qui sont proposé chaque jour selon son envie et ses goûts. "
        }
      ]
    },
    {
      "id": "8-bat_indus_interieur",
      "name": "Batiment Industriel Interieur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.7316024722122698,
        "pitch": 0.09005413036519627,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -3.0033850622887144,
          "pitch": 0.24936044422055303,
          "rotation": 0,
          "target": "4-cours_indus"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4217407372479762,
          "pitch": -0.08701828618131913,
          "title": "STMG",
          "text": "Le bac STMG (Sciences et Technologies du Management et de la Gestion) permet d’appréhender et de comprendre l’organisation et le fonctionnement des entreprises. Pour plus d’information : http://lyceedebaudre.net/formations/baccalaureat/bac-stmg/"
        },
        {
          "yaw": 0.6190953788939382,
          "pitch": -0.02329939446043383,
          "title": "BTS STMG",
          "text": "Text"
        },
        {
          "yaw": -1.061285294325483,
          "pitch": -0.04966755415745716,
          "title": "STI2D",
          "text": "Le bac STI2D (Sciences et Technologies de l’Industrie et du Développement Durable) met l’accent sur les démarches d’investigation et de projet, les études de cas associées à des activités pratiques, de façon à acquérir des compétences et des connaissances scientifiques et technologiques polyvalentes liées à l’industrie et au développement durable. Pour plus d’information : http://lyceedebaudre.net/formations/baccalaureat/bac-sti2d/"
        },
        {
          "yaw": -1.123564602536927,
          "pitch": 0.04728957927085986,
          "title": "BTS STI2D",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-etage_science",
      "name": "Etage Science",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.4432574480716482,
        "pitch": 0.15685641004127326,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 2.7962862686686956,
          "pitch": 0.34860612295365634,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -2.809528774767422,
          "pitch": -0.023028551618745396,
          "rotation": 0,
          "target": "10-etage_bts"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4789011199472242,
          "pitch": 0.017925345733031506,
          "title": "salle svt",
          "text": "Text"
        },
        {
          "yaw": 1.4351644179169183,
          "pitch": 0.01321810083210373,
          "title": "salle physique-chimie",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-etage_bts",
      "name": "Etage BTS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.1115847161762353,
        "pitch": 0.14218093978531954,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 1.3194589746689669,
          "pitch": 0.3076650743754996,
          "rotation": 0,
          "target": "9-etage_science"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.16000445376303674,
          "pitch": -0.05156466194621423,
          "title": "bts eco",
          "text": "Secteur de l’économie concernant les services. Les formations en BTS tertiaires : Comptabilité et Gestion (CG), Gestion de la PME (GPME), Support à l'Action Managériale (SAM), Management Commercial Opérationnel (MCO). Pour plus d’information : http://lyceedebaudre.net/formations/bts/ts-tertiaires/"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
