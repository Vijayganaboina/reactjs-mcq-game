# ReactJS MCQ Game App

## Description
This project is a ReactJS Multiple Choice Questions (MCQ) game app. It displays one question per screen, allows navigation between questions, and shows the final score upon completion.

## Features
- Display of questions one by one with options to select answers
- Navigation between questions with "Next" and "Previous" buttons
- Calculation and display of final score at the end
- User-friendly design

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/reactjs-mcq-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd reactjs-mcq-game
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm start
    ```
2. Open the app in your browser:
    ```
    http://localhost:3000
    ```

## File Structure
src
├── components
│ ├── Quiz.js
│ ├── Question.js
│ ├── Answer.js
│ ├── Navigation.js
├── data
│ └── questions.json
├── App.js
└── index.css


## Data Structure
- `questions.json` contains an array of question objects. Each object has the following structure:
  ```json
  {
    "id": 1,
    "question": "Which function is used to serialize an object into a JSON string in JavaScript?",
    "answers": ["stringify()", "parse()", "convert()", "None of the above"],
    "correct": "stringify()"
  }


## Styling
The app uses basic CSS for styling, defined in index.css.

## Comments
The code is commented to provide clarity on the purpose of each component and function.