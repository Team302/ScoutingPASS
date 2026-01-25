var config_data = `
{
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "checkboxAs": "10",
  "prematch": [
       { "name": "Scouter Name7",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026MICHE",
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
      "type": "apick",
      "choices": {
        "a: "HP Hopper fed<br>",
        "a": "Ground Intake<br>",
        "a": "No Intake"
   		 },
	 "defaultValue": "ag"
	 },
        { "name": "Aprox Auton Fuel Launched",
      "code": "afl",
      "type": "counter"
    },
      { "name": "Auton Launch Completion Percentage",
      "code": "ac",
      "type": "Aperc",
      "choices": {
        "z": "0% Completion<br>",
        "e": "~10% Completion<br>",
        "w": "~20% Completion<br>",
        "h": "~30% Completion<br>",
        "o": "~40% Completion<br>",
        "i": "~50% Completion<br>",
        "i": "~60% Completion<br>",
        "e": "~70% Completion<br>",
        "g": "~80% Completion<br>",
        "i": "More then 90% Completion<br>",
        "u": "100% Completion"
      },
	   "defaultValue": "se"
	   },
	   
    { "name": "Auton Climb",
      "code": "ac",
      "type": "Aclimb",
      "choices": {
        "f": "Failed Climb<br>",
        "o": "L1 Climb<br>",
        "t": "L2 Climb<br>",
        "x": "L3 Climb<br>",
        "m": "Didnt Attempt"
      },
	   "defaultValue": "am"
	   }
  ],
  "teleop": [
    { "name": "Coral Scored in L1",
      "code": "ton",
      "type": "counter"
    },
    { "name": "Coral Scored in L2",
      "code": "ttw",
      "type": "counter"
    },
	{ "name": "Coral Scored in L3",
	  "code": "tth",
	  "type": "counter"
	},
	 { "name": "Coral Scored in L4",
	  "code": "tfo",
	  "type": "counter"
	},
  { "name": "Coral Missed",
	  "code": "tcm",
	  "type": "counter"
	},
   { "name": "Algae Scored in Processor",
	  "code": "tap",
	  "type": "counter"
	},
 { "name": "Algae Scored in dA Net",
	  "code": "tan",
	  "type": "counter"
	}, 
 { "name": "Algae Missed ",
	  "code": "tam",
	  "type": "counter"
	},
	{ "name": "Were they defended<br>",
	  "code": "wdt",
	  "type": "text"
	},
    { "name": "Coral Pickup:",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "HP Station <br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
      { "name": "Algae Pickup:",
      "code": "apu",
      "type": "radio",
      "choices": {
        "s": "Reef (Includes Removing It) <br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame":[
   { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
	"j": "Shallow Climb<br>",
	"g": "Deep Climb<br>",
      	"o": "Failed Deep Climb<br>",
	"h": "Failed Shallow Climb<br>",
        "x": "Not attempted<br>"
      },
      "defaultValue": "x"
    },
     { "name": "Time to Climb",
      "code": "tc",
      "type":"radio",
      "choices": {
		    "o": "First Try ~10 Sec<br>",
		    "h": "Solid Climb ~15 Sec<br>",
      	    "l": "Struggled ~20 Sec<br>",
        "x": "Didnt Climb<br>"
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
