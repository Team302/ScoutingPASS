
var config_data = `
{
  "title": "Scouting PASS 2024-25 FTC edition",
  "page_title": "INTO THE DEEP",
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
		"r1": "Red area",
        "b1": "Blue area<br>",
        "r2": "Red away",
        "b2": "Blue away<br>",
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
	{ "name": "Are they using<br>a sample or team prop?",
	  "code": "spi",
	  "type": "radio",
	  "choices": {
		  "sm": "Sample",
		  "tp": "Team Prop"
	  },
	  "defaultValue": "sm"
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
	{ "name": "samples in<br>net zone",
	  "code": "snz",
	  "type": "bool"
	},
	{ "name": "sample in<br>low basket",
	  "code": "slb",
	  "type": "bool"
	},
	{ "name": "sample in<br>high basket",
	  "code": "shb",
	  "type": "counter"
	},
 	{ "name": "specimen in<br>high basket",
	  "code": "sph",
	  "type": "counter"
	},
	{ "name": "specimen in <br>in low basket",
	  "code": "spl",
	  "type": "counter"
	}
  ],
  "teleop": [
   { "name": "samples in<br>net zone",
	  "code": "tsnz",
	  "type": "bool"
	},
	{ "name": "sample in<br>low basket",
	  "code": "tslb",
	  "type": "bool"
	},
	{ "name": "sample in<br>high basket",
	  "code": "tshb",
	  "type": "counter"
	},
 	{ "name": "specimen in<br>high basket",
	  "code": "tsph",
	  "type": "counter"
	},
	{ "name": "specimen in <br>in low basket",
	  "code": "tspl",
   //Teleop specimen low
	  "type": "counter"
	}
  ],
  "endgame": [
    { "name": "Final Position",
      "code": "fp",
      "type":"radio",
      "choices": {
        "l": "Touching low rung<br>",
        "h": "Touching high rung<br>",
	"p": "Parked<br>",
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
    { "name": "Dropped pieces (>4)",
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

