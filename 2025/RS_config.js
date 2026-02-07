var config_data = `
{
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name1",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025dal",
      "required": "true",
      "disabled": "false"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
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
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Is their robot<br>on the field?",
      "code": "as",
      "type": "bool"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Auton Pickup Location",
      "code": "apl",
      "type": "radio",
      "choices": {
        "h": "HP Hopper fed<br>",
        "g": "Ground Intake<br>",
        "n": "Neutral zone<br>",
        "x": "No Intake"
      },
      "defaultValue": "x"
    },
    { "name": "Auton Climb",
      "code": "ac",
      "type": "radio",
      "choices": {
        "f": "Failed Climb<br>",
        "s": "Successful L1 climb<br>",
        "x": "Didnt attempt"
      },
      "defaultValue": "x"
    },
    { "name": "Auton End Position",
      "code": "aep",
      "type": "radio",
      "choices": {
        "n": "In neutral zone<br>",
        "c": "Climb attempt<br>",
        "a": "In Alliance Zone"
      },
      "defaultValue": "a"
    },
    { "name": "How much fuel did they<br>approx make in the hub",
      "code": "afh",
      "type": "counter"
    },
    { "name": "How many Cycles<br>did they do",
      "code": "acy",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Launching Location",
      "code": "tll",
      "type": "radio",
      "choices": {
        "t": "Touching Hub<br>",
        "c": "Close to Hub<br>",
        "f": "Far from Hub<br>",
        "e": "Everywhere"
      },
      "defaultValue": "e"
    },
    { "name": "Pickup Location",
      "code": "tpl",
      "type": "radio",
      "choices": {
        "h": "HP Hopper fed<br>",
        "g": "Ground Intake<br>",
        "x": "No Intake"
      },
      "defaultValue": "x"
    },
    { "name": "Can launch while moving",
      "code": "tlm",
      "type": "radio",
      "choices": {
        "y": "Yes<br>",
        "n": "No"
      },
      "defaultValue": "n"
    },
    { "name": "How do they go to<br>neutral zone",
      "code": "tnz",
      "type": "radio",
      "choices": {
        "r": "Ramp<br>",
        "t": "Trench<br>",
        "b": "Both<br>",
        "x": "None"
      },
      "defaultValue": "x"
    },
    { "name": "How much fuel did they<br>approx launch",
      "code": "tfl",
      "type": "counter"
    },
    { "name": "How accurate is<br>their robot",
      "code": "tar",
      "type": "radio",
      "choices": {
        "10": "0-30%<br>",
        "20": "30-60%<br>",
        "30": "60-80%<br>",
        "40": "80-90%<br>",
        "50": "90+%<br>",
        "60": "Didnt shoot"
      
      },
      "defaultValue": "50"
    },
    { "name": "Balls Fed",
      "code": "tbf",
      "type": "counter"
    },
    { "name": "Amount of cycles",
      "code": "tcy",
      "type": "counter"
    },
    { "name": "How do they feed balls",
      "code": "tfb",
      "type": "radio",
      "choices": {
        "l": "Launching<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Didnt feed"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "ec",
      "type": "radio",
      "choices": {
        "f": "Failed Climb<br>",
        "l1": "L1<br>",
        "l2": "L2<br>",
        "l3": "L3<br>",
        "x": "Didnt attempt"
      },
      "defaultValue": "x"
    },
    { "name": "Time to Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "ft": "First Try ~5 sec<br>",
        "g": "Great Climb ~10 sec<br>",
        "s": "Solid Climb >15 sec<br>",
        "x": "Didnt Climb"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average (the thought was there)<br>",
        "a": "Average (got in the way from time to time)<br>",
        "g": "Good (was very annoying)<br>",
        "e": "Excellent (An absolute menace)<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Who did they defend?",
      "code": "who",
      "type": "text"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 10000
    }
  ]
}`;
