var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Into The Deep",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width (bumpers included)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
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
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Game pieces manipulated",
      "code": "pul",
      "type":"radio",
      "choices": {
        "sp": "Specimen only <br>",
        "sa": "Samples only br>",
        "b": "All game pieces<br>",
        "x": "Can not manipulate game pieces"
      },
      "defaultValue": "sa"
    },
	{ "name": "Floor pick up efficency",
      "code": "fpu",
      "type":"radio",
      "choices": {
        "e": "excellent<br>",
        "aa": "above avarage<br>",
        "a": "avarage<br>",
	"ba": "Below avarage<br>",
        "x": "Can not manipulate game pieces"
     },
      "defaultValue": "x"
       },
	{ "name": "Auton Start Positions<br>(include all options)<br>(if can start from anywhere, leave blank)",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "shape": "circle 5 black red true"
    },
	{ "name": "Confidence engaging in auton",
      "code": "aec",
      "type":"radio",
      "choices": {
        "1": "1 (not tested at all, no confidence)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
		"5": "5 (highly tested, repeatable)<br>",
		"x": "Cannot engage in auton"
	  },
	  "defaultValue": "x"
    },
    	{ "name": "Tele-op prefrence",
      "code": "top",
      "type":"radio",
      "choices": {
        "zzz": "specimen<br>",
        "zz": "above avarage<br>",
        "z": "either<br>",
     },
      "defaultValue": "e"
       },
	{ "name": "Teleop scoring ability<br>(bottom, middle, top, or all rows)",
      "code": "ts",
      "type": "text",
      "size": 20,
      "maxSize": 250
	},
	{ "name": "# of samples on teleop",
      "code": "tc",
      "type": "counter"
    },
    { "name": "# of specimen on teleop",
      "code": "tc",
      "type": "counter"
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
