var config_data = `
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
    { "name": "Able to Climb L1",
      "code": "cl1",
      "type": "checkbox"
    },
    { "name": "Able to Climb L2",
      "code": "cl2",
      "type": "checkbox"
    },
    { "name": "Able to Climb L3",
      "code": "cl3",
      "type": "checkbox"
    },
    { "name": "Shoots on the Move",
      "code": "shm",
      "type": "checkbox"
    },
    { "name": "Shoots Touching Hub",
      "code": "shh",
      "type": "checkbox"
    },
    { "name": "Shoots Close",
      "code": "shc",
      "type": "checkbox"
    },
    { "name": "Shoots Far",
      "code": "shf",
      "type": "checkbox"
    },
    { "name": "Shoots from Anywhere",
      "code": "sha",
      "type": "checkbox"
    },
    { "name": "Cannot Shoot (Nowhere)",
      "code": "shn",
      "type": "checkbox"
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
