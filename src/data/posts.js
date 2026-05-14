export const posts = [
  {
    slug: "Planning Robot Arm Project",
    title: "Planning Robot Arm Project",
    date: "May 12, 2026",
    excerpt:
      "Initial planning for my robot arm project.",
    tags: ["Chess Robot Arm", "Media"],
    content: [
      "I have a 3D printed robot arm, a small one, that I have had since my grade 12 robotics class which I was wondering how to use, and decided to link together multiple disciplines in order to create a nearly fully autonomous chess robot arm.",
      "The arm itself was for a project to manually move it through switches with 4 degrees of freedom. One to rotate the base, one to rotate the first arm, one to rotate the second arm, and one to open and close the gripper, all connected to a breadboard with wires. I researched what other hardware I needed in order to power and send instructions to the arm from a program, as the original board was given back, and landed on an Arduino Uno which will be ordered once I reach the point of needing to have the arm physcially move.",
      "The goal is for an autonomous arm that can play against a human. So there needed to be the following, a way to see the board and track the pieces, a game engine to determine the best moves against a human, a way to process a move into instructions that can be sent to the arm to play.",
      "As I wanted to mainly use what I have, I decided to use my laptop, which will be running the programs needed, to view the chessboard. Of course it will need to be static during a game but as I wish to get a working model that's as simple as possible, the downside is fine.",
      "Overall, I created a repository for each component of the project, and a main repository to link them together. The repositories are as follows:",
      "- [Chessboard Detection](https://github.com/rayyanmshaikh/ArmVisionService)",
      "- [Chess Engine](https://github.com/rayyanmshaikh/ArmGameEngineService)",
      "- [Robot Arm Control](https://github.com/rayyanmshaikh/ArmControllerService)",
      "- [Robot Arm Firmware](https://github.com/rayyanmshaikh/ArmFirmware)",
      "- [Arm Orchestration](https://github.com/rayyanmshaikh/ChessRobotArmOrchestration)",
      "All bar the firmware, which is for the arm, will be ran in Docker containers with the orchestration repository linking them together and handling the communication between them. The vision service will use OpenCV to process the video feed from the laptop's webcam to determine the state of the board, the game engine will use Stockfish to determine the best move, and the controller service will take in the move and convert it into instructions for the arm. The firmware will be ran on the Arduino and control the servos of the arm based on instructions sent from the controller service.",
      "The plan is to start working on each component as listed above, as they all feed into the next, and once I have a working prototype of each, I will link them together and test the full system. I am excited to see how this project turns out and what I can learn from it :)"
    ],
    media: ["InitialArm.jpg"],
  },
];
