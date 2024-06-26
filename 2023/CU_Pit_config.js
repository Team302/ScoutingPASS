var config_data = `
{
  "title": "Crescendo 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
	  "code": "s", 
	  "type": "text",
	  "size": 10,
	  "maxsize": 15
	},
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Dimensions",
      "code": "dm",
      "type": "text",
      "size": 10,
      "maxSize": 15
    },
	{ "name": "Can they drive under<br>the stage?",
	  "code": "dus",
	  "type": "bool"
	},
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio (speed)",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1 or 12-13 ft/sec)<br>",
        "2": "L2 (6.75:1 or 14-16 ft/sec)<br>",
        "3": "L3 (6.12:1 or 16-18 ft/sec)<br>",
		"d": "Doesn't Know<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Game piece pick up location",
      "code": "pul",
      "type":"radio",
      "choices": {
        "d": "Source/H.P. station only<br>",
		"f": "Floor pick-up only<br>",
        "b": "All locations<br>",
        "x": "Can not manipulate game pieces"
      },
      "defaultValue": "x"
    },
	{ "name": "Auton Start Position Preference<br>(Based on RED side)",
      "code": "sp",
      "type": "radio",
	  "choices": {
	    "r": "Right<br>",
		"c": "Center<br>",
		"l": "Left<br>",
		"o": "Off Speaker<br>",
		"v": "Varies/doesn't matter"
	  },
	  "defaultValue": "v"
    },
	{ "name": "Auton Scoring",
      "code": "asc",
      "type": "radio",
	  "choices": {
		  "s": "Speaker only<br>",
		  "a": "Amp only<br>",
		  "b": "Both/varies<br>",
		  "x": "no scoring<br>"
	  },
	  "defaultValue": "x"
    },
	{ "name": "How many in auto?",
	  "code": "ac", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "Teleop scoring",
      "code": "ts",
      "type": "radio",
	  "choices": {
		  "s": "Speaker only<br>",
		  "a": "Amp only<br>",
		  "b": "Both<br>",
		  "x": "no scoring"
	  },
	  "defaultValue": "x"
    },
	{ "name": "How many in teleop?",
	  "code": "tc", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "Able to do trap?",
	  "code": "tra",
	  "type": "bool"
	},
	{ "name": "Able to climb?",
	  "code": "clm",
	  "type": "bool"
	},
	{ "name": "What do they want to use<br>their human player for?",
	  "code": "hp",
	  "type": "radio",
	  "choices": {
		  "s": "Source<br>",
		  "a": "Amp<br>",
		  "d": "Either<br>",
		  "n": "No human player"
	  },
	  "defaultValue": "n"
	},
	{ "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
