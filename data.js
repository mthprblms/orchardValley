var APP_DATA = {
  "scenes": [
    {
      "id": "0-courtyard",
      "name": "Courtyard",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4048772505256952,
          "pitch": 0.19171822605090583,
          "rotation": 0,
          "target": "2-activities"
        },
        {
          "yaw": -1.663086433314481,
          "pitch": 0.028175334723730572,
          "rotation": 0,
          "target": "5-room"
        },
        {
          "yaw": -0.9870657852487348,
          "pitch": -0.0018015596766698394,
          "rotation": 0,
          "target": "6-therapy"
        },
        {
          "yaw": -2.8158736010819663,
          "pitch": 0.017732067202727464,
          "rotation": 0,
          "target": "5-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7918734455333025,
          "pitch": 0.05827304966106439,
          "rotation": 0,
          "target": "0-courtyard"
        },
        {
          "yaw": 0.9290075988994957,
          "pitch": 0.009060715405727393,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 0.6231075966792687,
          "pitch": 0.0024402231261841933,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-activities",
      "name": "Activities",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8642796896037659,
          "pitch": 0.06041828086764944,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -2.147413557555888,
          "pitch": 0.1021505326731198,
          "rotation": 0,
          "target": "0-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8826410820148212,
          "pitch": 0.03368653556642087,
          "rotation": 0,
          "target": "5-room"
        },
        {
          "yaw": 0.1908552402106114,
          "pitch": 0.04732807723589971,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.61994550804069,
          "pitch": 0.06714393531268925,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-room",
      "name": "Room",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9841920382755873,
          "pitch": 0.16715426676684686,
          "rotation": 0,
          "target": "6-therapy"
        },
        {
          "yaw": 2.395926737532628,
          "pitch": 0.06918200264115804,
          "rotation": 0,
          "target": "0-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-therapy",
      "name": "Therapy",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.245108498097597,
          "pitch": 0.06305591426846391,
          "rotation": 0,
          "target": "5-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
