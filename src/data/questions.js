const questions = [
  {
    id: 1,
    type: "image",
    question: "What does a red traffic light mean?",
    image: "/images/driving_image_2.png",
    options: ["Go", "Prepare to go", "Stop", "Speed up"],
    correctAnswer: 2,
    explanation: "A red traffic light always means you must stop.",
  },
  {
    id: 2,
    type: "image",
    question: "What does this motorway sign mean?",
    image: "/images/driving_image_1.jpg", 
    options: [
      "Use the hard shoulder if traffic is slow",
      "All lanes including the hard shoulder have a 40 mph limit",
      "Do not use the hard shoulder; all open lanes have a 40 mph speed limit",
      "All lanes are closed; stop immediately",
    ],
    correctAnswer: 2,
    explanation:
      "The red X over the hard shoulder means it is closed to traffic. The 40 signs above the other lanes indicate a mandatory 40 mph speed limit for those lanes.",
  },
  {
    id: 3,
    type: "video",
    question:
      "What should you be aware of when driving next to this cycle lane?",
    video: "/images/driving_video_3.mp4", 
    options: [
      "You can drive in the cycle lane at all times",
      "The cycle lane is separated, so cyclists must give way",
      "You may use the cycle lane briefly if necessary and safe to do so",
      "You should always drive at 30 mph next to a cycle lane",
    ],
    correctAnswer: 2,
    explanation:
      "A cycle lane with a broken (non-continuous) white line means you may enter it if it's safe and necessary. However, always check for cyclists and respect the 20 mph speed limit.",
  },
  {
    id: 4,
    type: "video",
    question:
      "When is it appropriate to use the right-hand lane on a motorway?",
    video: "/images/driving_video_1.mp4", 
    options: [
      "When overtaking slower vehicles or turning right",
      "When you're in a hurry",
      "Whenever you prefer to drive faster",
      "At all times on three-lane motorways",
    ],
    correctAnswer: 0,
    explanation:
      "On UK motorways, the right-hand lane is for overtaking only or turning right. Once you've overtaken, you should return to the left-hand lane when it's safe to do so.",
  },
  {
    id: 5,
    type: "video",
    question:
      "What is the maximum speed limit for cars on a UK motorway unless otherwise indicated?",
    video: "/images/driving_video_2.mp4", 
    options: ["60 mph", "70 mph", "80 mph", "There is no limit"],
    correctAnswer: 1,
    explanation:
      "Unless otherwise indicated by signs, the maximum legal speed limit for cars on UK motorways is 70 mph.",
  },
  {
    id: 6,
    type: "video",
    question:
      "When are you allowed to enter a yellow box junction like the one shown?",
    video: "/images/driving_video_4.mp4",
    options: [
      "Whenever the light is green",
      "If your exit is clear",
      "When following another vehicle closely",
      "Only if turning left",
    ],
    correctAnswer: 1,
    explanation:
      "You may only enter a yellow box junction if your exit is clear, so you don’t block the junction. The only exception is when turning right and you’re stopped by oncoming traffic or other vehicles waiting to turn.",
  },
  {
    id: 7,
    type: "text",
    question: "When can you overtake another vehicle on the left?",
    options: [
      "On a one-way street",
      "When the car ahead is turning left",
      "When you're in a hurry",
      "Anytime the right lane is busy",
    ],
    correctAnswer: 0,
    explanation:
      "You may overtake on the left in a one-way street where traffic moves in the same direction.",
  },
  {
    id: 8,
    type: "text",
    question:
      "What should you do when you see a pedestrian with a white cane and red band?",
    options: [
      "Give them extra room",
      "Sound your horn",
      "Expect them to hear your engine",
      "They are deafblind; be prepared for unexpected movements",
    ],
    correctAnswer: 3,
    explanation:
      "A white cane with a red band means the pedestrian is deafblind. Be especially cautious.",
  },
  {
    id: 9,
    type: "text",
    question:
      "You're driving in fog. Why should you keep well back from the vehicle in front?",
    options: [
      "To allow time to stop safely",
      "To let other drivers overtake you",
      "Because the road may be slippery",
      "Because your brakes may fail",
    ],
    correctAnswer: 0,
    explanation:
      "In fog, keeping a safe distance gives you more time to react to any hazards ahead.",
  },
  {
    id: 10,
    type: "text",
    question: "When must you stop your vehicle at a pedestrian crossing?",
    options: [
      "Only if someone is on the crossing",
      "If there are flashing amber lights",
      "When pedestrians are waiting to cross",
      "When a school crossing patrol shows a stop sign",
    ],
    correctAnswer: 3,
    explanation:
      "You must stop when a school crossing patrol signals you to do so.",
  },
  {
    id: 11,
    type: "text",
    question: "What should you do before making a U-turn?",
    options: [
      "Signal and turn immediately",
      "Look over your shoulder for a final check",
      "Flash your headlights",
      "Sound your horn",
    ],
    correctAnswer: 1,
    explanation:
      "Always perform a final shoulder check before making a U-turn to ensure it's safe.",
  },
  {
    id: 12,
    type: "text",
    question: "You are approaching a roundabout. Who has priority?",
    options: [
      "Traffic coming from your right",
      "Traffic coming from your left",
      "Traffic already on the roundabout",
      "No one has priority",
    ],
    correctAnswer: 2,
    explanation: "Traffic already on the roundabout has priority in the UK.",
  },
  {
    id: 13,
    type: "text",
    question:
      "What is the national speed limit on a single carriageway road for cars and motorcycles?",
    options: ["50 mph", "60 mph", "70 mph", "80 mph"],
    correctAnswer: 1,
    explanation:
      "The national speed limit for cars and motorcycles on single carriageways is 60 mph.",
  },
  {
    id: 14,
    type: "text",
    question: "Why should you be cautious when driving past parked cars?",
    options: [
      "They might start suddenly",
      "The road surface is poor",
      "There may be hidden dips",
      "Pedestrians may step out from between them",
    ],
    correctAnswer: 3,
    explanation:
      "Pedestrians, especially children, may step out from between parked cars.",
  },
  {
    id: 15,
    type: "text",
    question: "What should you do if your vehicle starts to skid on ice?",
    options: [
      "Brake firmly and quickly",
      "Accelerate gently",
      "Steer into the skid",
      "Steer away from the skid",
    ],
    correctAnswer: 2,
    explanation:
      "Steer into the skid and avoid harsh braking or acceleration to regain control.",
  },
  {
    id: 16,
    type: "text",
    question: "When should you use hazard warning lights?",
    options: [
      "When you are being towed",
      "When driving in heavy traffic",
      "To warn of a temporary obstruction",
      "When reversing",
    ],
    correctAnswer: 2,
    explanation:
      "Use hazard lights to warn others of a temporary hazard or obstruction.",
  },
  {
    id: 17,
    type: "text",
    question: "What does a broken white line in the centre of the road mean?",
    options: [
      "No overtaking allowed",
      "Give way to oncoming traffic",
      "You may overtake if the road ahead is clear",
      "You must stop",
    ],
    correctAnswer: 2,
    explanation:
      "A broken white centre line means you may overtake if it's safe and the road ahead is clear.",
  },
  {
    id: 18,
    type: "text",
    question: "Why should you check your mirrors before slowing down?",
    options: [
      "To check for traffic signals",
      "To look for road signs",
      "To see what's behind you",
      "To signal your intentions",
    ],
    correctAnswer: 2,
    explanation:
      "Checking your mirrors lets you see how your actions will affect the traffic behind you.",
  },
  {
    id: 19,
    type: "text",
    question: "What is the purpose of a catalytic converter?",
    options: [
      "To improve acceleration",
      "To reduce fuel consumption",
      "To reduce harmful emissions",
      "To increase engine power",
    ],
    correctAnswer: 2,
    explanation:
      "Catalytic converters reduce harmful emissions from a vehicle's exhaust system.",
  },
  {
    id: 20,
    type: "text",
    question:
      "You're approaching a zebra crossing. Pedestrians are waiting to cross. What should you do?",
    options: [
      "Ignore them and continue",
      "Speed up to get past quickly",
      "Stop and let them cross",
      "Flash your lights at them",
    ],
    correctAnswer: 2,
    explanation:
      "You must stop and let pedestrians cross at zebra crossings if they are waiting.",
  },
  {
    id: 21,
    type: "text",
    question: "When should you flash your headlights at other road users?",
    options: [
      "To tell them to hurry up",
      "To greet other drivers",
      "To warn them of your presence",
      "To let them know you are angry",
    ],
    correctAnswer: 2,
    explanation:
      "You should only flash your headlights to let others know you are there.",
  },
  {
    id: 22,
    type: "text",
    question:
      "What should you do if you are dazzled by headlights behind you at night?",
    options: [
      "Brake sharply",
      "Pull over immediately",
      "Adjust your rear-view mirror",
      "Switch on your hazard lights",
    ],
    correctAnswer: 2,
    explanation:
      "Use the anti-dazzle setting on your rear-view mirror to reduce glare from behind.",
  },
  {
    id: 23,
    type: "text",
    question: "When are you allowed to stop on a motorway?",
    options: [
      "When you need to check a map",
      "If you miss your exit",
      "In an emergency or when told by police",
      "To pick up a passenger",
    ],
    correctAnswer: 2,
    explanation:
      "Stopping on a motorway is only allowed in an emergency or if directed to do so.",
  },
  {
    id: 24,
    type: "text",
    question:
      "What should you do if you see a disabled person about to cross the road?",
    options: [
      "Rev your engine to alert them",
      "Wave them across quickly",
      "Stop and be patient",
      "Shout to get their attention",
    ],
    correctAnswer: 2,
    explanation:
      "Always stop and allow disabled people to cross safely and without rushing them.",
  },
  {
    id: 25,
    type: "text",
    question:
      "You’re at a junction and your view is restricted. What should you do?",
    options: [
      "Use your horn as you move out",
      "Edge forward slowly and look both ways",
      "Move out quickly and hope for the best",
      "Stop only if traffic is coming",
    ],
    correctAnswer: 1,
    explanation:
      "Creeping forward slowly improves your view while still being safe and cautious.",
  },
  {
    id: 26,
    type: "text",
    question:
      "When driving in heavy rain, your vehicle begins to aquaplane. What’s the first thing you should do?",
    options: [
      "Brake firmly",
      "Steer sharply",
      "Ease off the accelerator",
      "Turn on your hazard lights",
    ],
    correctAnswer: 2,
    explanation:
      "If aquaplaning occurs, ease off the accelerator to regain traction. Do not brake or steer sharply.",
  },
  {
    id: 27,
    type: "text",
    question: "What does it mean if your vehicle starts to skid?",
    options: [
      "The tyres have good grip",
      "The engine is running smoothly",
      "The tyres have lost grip on the road",
      "You are driving at a safe speed",
    ],
    correctAnswer: 2,
    explanation:
      "Skidding occurs when the tyres lose their grip on the road, usually due to excessive speed or poor road conditions.",
  },
  {
    id: 28,
    type: "text",
    question:
      "What is the national speed limit on a single carriageway road for cars in the UK?",
    options: ["30 mph", "50 mph", "60 mph", "70 mph"],
    correctAnswer: 2,
    explanation:
      "The national speed limit for cars on a single carriageway road in the UK is 60 mph.",
  },
  {
    id: 29,
    type: "text",
    question:
      "Why should you maintain a safe distance from the vehicle in front?",
    options: [
      "To avoid being flashed by headlights",
      "To improve fuel consumption",
      "To give yourself time to react",
      "To see road signs clearly",
    ],
    correctAnswer: 2,
    explanation:
      "A safe distance allows time to react and stop safely if the vehicle in front suddenly slows down or stops.",
  },
  {
    id: 30,
    type: "text",
    question: "When must you use dipped headlights during the day?",
    options: [
      "When parking",
      "When driving on a motorway",
      "When visibility is seriously reduced",
      "When driving over speed bumps",
    ],
    correctAnswer: 2,
    explanation:
      "Use dipped headlights when visibility is reduced to less than 100 metres, such as in heavy rain or fog.",
  },
  {
    id: 31,
    type: "text",
    question: "What should you do if you approach a horse rider on the road?",
    options: [
      "Rev your engine to warn them",
      "Pass quickly and closely",
      "Slow down and give plenty of space",
      "Use your horn to signal your presence",
    ],
    correctAnswer: 2,
    explanation:
      "Always slow down and give horse riders plenty of space when passing to avoid startling the animal.",
  },
  {
    id: 32,
    type: "text",
    question: "How should you overtake a cyclist?",
    options: [
      "Sound your horn as you pass",
      "Drive very close to them",
      "Pass with plenty of room, at a low speed",
      "Only overtake when they signal left",
    ],
    correctAnswer: 2,
    explanation:
      "You should pass cyclists slowly and leave at least 1.5 metres (5 feet) of space.",
  },
  {
    id: 33,
    type: "text",
    question: "What should you do before making a U-turn?",
    options: [
      "Look over your shoulder and check for traffic",
      "Signal and turn without checking",
      "Rev your engine before turning",
      "Flash your headlights",
    ],
    correctAnswer: 0,
    explanation:
      "Before making a U-turn, ensure the road is clear in both directions and check over your shoulder.",
  },
  {
    id: 34,
    type: "text",
    question: "Why are mirrors important before changing direction?",
    options: [
      "To check your hair",
      "To ensure the road ahead is clear",
      "To see what’s behind and to the sides",
      "To adjust your seating position",
    ],
    correctAnswer: 2,
    explanation:
      "Checking your mirrors allows you to assess the traffic situation before changing lanes or direction.",
  },
  {
    id: 35,
    type: "text",
    question: "What should you do if you're being overtaken?",
    options: [
      "Increase your speed",
      "Move to the right",
      "Maintain a steady speed or slow down slightly",
      "Brake hard",
    ],
    correctAnswer: 2,
    explanation:
      "Maintain a steady speed or slow down slightly to allow the vehicle to pass safely.",
  },
  {
    id: 36,
    type: "text",
    question: "When should you use your hazard warning lights?",
    options: [
      "When you’re parked on a yellow line",
      "When you’re being towed",
      "When your vehicle is temporarily obstructing traffic",
      "When reversing",
    ],
    correctAnswer: 2,
    explanation:
      "Use hazard warning lights if your vehicle is causing a temporary obstruction, such as when broken down.",
  },
  {
    id: 37,
    type: "text",
    question: "What should you do if your vehicle breaks down on the motorway?",
    options: [
      "Stand in front of your car to signal traffic",
      "Stay in your car with seatbelt fastened",
      "Exit the vehicle and wait behind the barrier",
      "Try to repair the car yourself on the hard shoulder",
    ],
    correctAnswer: 2,
    explanation:
      "If your vehicle breaks down on the motorway, you should leave the vehicle via the passenger side and wait behind a safety barrier.",
  },
  {
    id: 38,
    type: "text",
    question:
      "What is the meaning of a solid white line at the side of the road?",
    options: [
      "It marks the edge of the carriageway",
      "It indicates a cycle lane",
      "You must not cross it at any time",
      "It means overtaking is prohibited",
    ],
    correctAnswer: 0,
    explanation:
      "A solid white line at the side of the road marks the edge of the carriageway, particularly in poor visibility.",
  },
  {
    id: 39,
    type: "text",
    question: "When is it safe to remove your seatbelt in a car?",
    options: [
      "When reversing",
      "When driving slowly",
      "Never while the engine is running",
      "When parking",
    ],
    correctAnswer: 0,
    explanation:
      "You may remove your seatbelt when reversing, but must refasten it once moving forward again.",
  },
  {
    id: 40,
    type: "text",
    question: "What does an amber traffic light mean?",
    options: [
      "Go if the way is clear",
      "Stop unless it's unsafe to do so",
      "Slow down and proceed",
      "Speed up to clear the junction",
    ],
    correctAnswer: 1,
    explanation:
      "An amber light means stop unless you’re too close to the junction to stop safely.",
  },
  {
    id: 41,
    type: "text",
    question: "When are you allowed to wait in a box junction?",
    options: [
      "If you're turning right and your exit is clear",
      "Only if traffic lights are green",
      "When following other cars through",
      "Only when stopping for a pedestrian",
    ],
    correctAnswer: 0,
    explanation:
      "You may only wait in a box junction if you're turning right and your exit road is clear but you're prevented from turning by oncoming traffic.",
  },
  {
    id: 42,
    type: "text",
    question: "What must you do when approaching a zebra crossing?",
    options: [
      "Slow down and be prepared to stop",
      "Speed up to clear the crossing quickly",
      "Stop only if people are on the crossing",
      "Honk to warn pedestrians",
    ],
    correctAnswer: 0,
    explanation:
      "Drivers must slow down and be prepared to stop if pedestrians are waiting to cross at a zebra crossing.",
  },
  {
    id: 43,
    type: "text",
    question: "What does a blue circular sign with a white number mean?",
    options: [
      "Recommended speed limit",
      "Minimum speed limit",
      "Maximum speed limit",
      "Motorway route number",
    ],
    correctAnswer: 1,
    explanation:
      "A blue circular sign with a number indicates a minimum speed limit on that stretch of road.",
  },
  {
    id: 44,
    type: "text",
    question: "Why should you check your blind spots before changing lanes?",
    options: [
      "To adjust your mirrors",
      "To ensure you're not speeding",
      "To check for vehicles not visible in your mirrors",
      "To improve fuel economy",
    ],
    correctAnswer: 2,
    explanation:
      "Blind spots are areas not visible in your mirrors, and checking them ensures it's safe to change lanes.",
  },
  {
    id: 45,
    type: "text",
    question: "What is the purpose of a catalytic converter in a car?",
    options: [
      "To reduce fuel consumption",
      "To clean exhaust gases",
      "To improve engine performance",
      "To reduce engine noise",
    ],
    correctAnswer: 1,
    explanation:
      "A catalytic converter reduces harmful emissions by cleaning exhaust gases before they exit the vehicle.",
  },
  {
    id: 46,
    type: "text",
    question: "What should you do before driving in snowy conditions?",
    options: [
      "Check your satnav settings",
      "Warm up your engine for 30 minutes",
      "Clear all snow and ice from windows, lights and mirrors",
      "Drive with hazard lights on",
    ],
    correctAnswer: 2,
    explanation:
      "Always clear snow and ice from your car completely to ensure visibility and avoid endangering others.",
  },
  {
    id: 47,
    type: "text",
    question: "What should you do when driving through a flood?",
    options: [
      "Drive quickly to avoid getting stuck",
      "Drive slowly in a low gear",
      "Change to the highest gear and speed up",
      "Stop and reverse through the water",
    ],
    correctAnswer: 1,
    explanation:
      "You should drive slowly in a low gear to avoid creating a wave and risking water entering your engine.",
  },
  {
    id: 48,
    type: "text",
    question: "When are you allowed to use your horn in a built-up area?",
    options: [
      "At any time of day",
      "Only between 11:30 pm and 7:00 am",
      "Only when stationary",
      "Only between 7:00 am and 11:30 pm",
    ],
    correctAnswer: 3,
    explanation:
      "In built-up areas, you must not use your horn between 11:30 pm and 7:00 am unless another road user poses a danger.",
  },
  {
    id: 49,
    type: "text",
    question: "What should you do if a driver is tailgating you?",
    options: [
      "Brake suddenly to warn them",
      "Increase the gap between you and the vehicle in front",
      "Speed up to get away",
      "Sound your horn continuously",
    ],
    correctAnswer: 1,
    explanation:
      "Create more space ahead so you have time to react smoothly, reducing the chance of a rear-end collision.",
  },
  {
    id: 50,
    type: "text",
    question: "What does an anti-lock braking system (ABS) help prevent?",
    options: [
      "The wheels from locking under heavy braking",
      "The engine from stalling",
      "The car from skidding during acceleration",
      "Excess fuel usage",
    ],
    correctAnswer: 0,
    explanation:
      "ABS prevents the wheels from locking during emergency braking, helping you maintain steering control.",
  },
];

export default questions;
