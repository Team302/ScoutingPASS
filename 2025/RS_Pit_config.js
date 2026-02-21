{
  "title": "Scouting PASS 2026",
  "page_title": "Rebuilt",
  "pitConfig": "true",
  "prematch": [
    { "name": "Scouter Name",
      "code": "sn",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Can they fit under the trench?",
      "code": "trn",
      "type": "radio",
      "choices": {
        "y": "Yes<br>",
        "n": "No"
      },
      "defaultValue": "n"
    },
    { "name": "Can they go over the bump?",
      "code": "bmp",
      "type": "radio",
      "choices": {
        "y": "Yes<br>",
        "n": "No"
      },
      "defaultValue": "n"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank<br>",
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
    { "name": "Estimated Hopper Capacity (# of balls)",
      "code": "hop",
      "type": "text",
      "size": 10,
      "maxSize": 10
    },
    { "name": "Able to Climb In Auton",
      "code": "cl1",
      "type": "checkbox"
    },
  { "name": "Whats the highest level they can climb",
      "code": "hcl",
      "type": "radio",
      "choices": {
        "o": "L1 Climb<br>",
        "w": "L2 Climb<br>",
        "r": "L3 Climb"
        },
          "defaultValue": "n"
      },
        { "name": "Can they shoot while moving",
      "code": "swm",
      "type": "checkbox"
    },
    { "name": "Where do they shoot",
      "code": "wts",
      "type": "radio",
      "choices": {
        "a": "Anywhere<br>",
        "h": "Touching Hub<br>",
        "y": "Close Distance Only<br>",
        "m": "Upto Mid Distance<br>",
        "f": "Upto Far Distance<br>",
        "n": "Cant shoot"
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
};
