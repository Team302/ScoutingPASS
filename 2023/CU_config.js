var config_data = `
{
  "title": "Scouting PASS 2023-24 FTC edition",
  "page_title": "Centerstagey",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Qualifications<br>",
        "de": "Eliminations"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot Position",
      "code": "r",
      "type": "robot",
      "choices": {
		"r1": "Red backdrop",
        "b1": "Blue backdrop<br>",
        "r2": "Red landing zone",
        "b2": "Blue landing zone<br>",
        "r3": " ",
		"b3": " "
	  },
	  "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
	{ "name": "Are they using<br>a pixel or team prop?",
	  "code": "spi",
	  "type": "radio",
	  "choices": {
		  "px": "Pixel",
		  "tp": "Team Prop"
	  },
	  "defaultValue": "px"
	},
    { "name": "Is their robot<br>on the field?",
      "code": "as",
      "type": "bool"
	}
  ],
  "auton": [
    { "name": "Did the robot park<br>in the Backstage?",
	  "code": "prk",
	  "type": "bool"
	},
	{ "name": "Purple pixel on<br>randomized line",
	  "code": "plr",
	  "type": "bool"
	},
	{ "name": "Yellow pixel on<br>correct Backdrop position",
	  "code": "ybr",
	  "type": "bool"
	},
	{ "name": "All pixels they placed<br>in the Backdrop",
	  "code": "abd",
	  "type": "counter"
	},
	{ "name": "All pixels they placed<br>in the Backstage",
	  "code": "abs",
	  "type": "counter"
	}
  ],
  "teleop": [
    { "name": "Pixel's placed on<br>Backdrop in teleop",
	  "code": "tbd",
	  "type": "counter"
    },
    { "name": "Pixels placed in<br>Backstage in teleop",
      "code": "tbs",
      "type": "counter"
    },
    { "name": "Lines crossed on<br>the backdrop",
      "code": "bdl",
      "type": "radio",
	  "choices": {
		  "l0": "No lines<br>",
		  "l1": "First line<br>",
		  "l2": "Second line<br>",
		  "l3": "Third line"
	  },
	  "defaultValue": 0
    }
  ],
  "endgame": [
    { "name": "Final Position",
      "code": "fp",
      "type":"radio",
      "choices": {
        "p": "Parked in the Backstage<br>",
        "s": "Suspended from the rigging<br>",
		"a": "Attempted suspension<br>",
		"x": "No special position"
      },
      "defaultValue": "x"
    },
    { "name": "Drone launch zone",
      "code": "dlz",
      "type": "radio",
	  "choices": {
		  "z0": "No drone launch<br>",
		  "z1": "Zone 1<br>",
		  "z2": "Zone 2<br>",
		  "z3": "Zone 3"
	  },
	  "defaultValue": "z0"
    }
  ],
  "postmatch": [
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Pixels (>4)",
      "code": "dp",
      "type": "bool"
    },
	{ "name": "Many penalties? (noticable)",
	  "code": "p",
	  "type": "bool"
	},
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 100000
    }
  ]
}`;
