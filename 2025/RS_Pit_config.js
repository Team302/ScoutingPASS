var config_data = `
{
  "title": "Team 302 2026 Pit Scouting",
  "page_title": "Rebuilt",
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
      "type": "text",
      "size": 10,
      "maxSize": 15
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
    { "name": "Estimated Hopper Capacity (# of balls)",
      "code": "hop",
      "type": "text",
      "size": 5,
      "maxSize": 10
    },
    { "name": "Able to Climb L1",
      "code": "cl1",
      "type": "bool"
    },
    { "name": "Able to Climb L2",
      "code": "cl2",
      "type": "bool"
    },
    { "name": "Able to Climb L3",
      "code": "clt",
      "type": "bool"
    },
    { "name": "Where they shoot from",
      "code": "sht",
      "type": "clickable_image",
      "filename": "2020/field_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ]
}`;
