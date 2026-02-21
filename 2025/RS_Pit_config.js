var config_data = `
{
  "title": "Team 302 2026 Pit Scouting",
  "page_title": "Rebuilt Pit Scouting",
  "pitConfig": "true",
  "checkboxAs": "10",
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
    { "name": "Shooting Locations",
      "code": "shl",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "shape": "circle 5 black red true"
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
