 
project: reactnd-rather

description:
    reactnd-rather is a queston answer type application that tracks users answers 
  to questions they and other users create.   It then gives each user a score 
  based on the number of questions answered as well as the number of questions 
  the user generated.

backend:
  the backend is simulated by canned data and functions used to pull push data.  

redux/data:
  redux will be used to control the state and make fetching data from state more accessible.
  data to store in state:
    users:   // users that have access to the application
    - contains
      - id : user id 
      - name: users full name
      - avatarURL: link to the users avatar
      - answers:  [object]
        - id of question answered
        - either Option One or Two
      - questions: [array]
        - id of question created

    questions: // questions that have been created by users.
    - array[question id] of questions
      - id: question id
      - author: user id
      - timestamp:
      - optionOne: 
          votes: [user names]
          text: question one
      - optionTwo: 
          votes: [user names]
          text: question two
      

  frontend 
    Nav Bar: // displayed on every page
    - Home  (Dashboard)
    - New Question
    - Leaderboard
    - Login [user name if logged in]
    - Log out [ if user logged in]
    * display logged in username

    Dashboard: // landing page
    - contains
      - nav
      - unanswered questions [timestamp order]
        - polls display
        - shown by default
      - answered questions [timestamp order]
        - polls display
      
     * if user is not logged in, go to login information
     * double-click opens unanswered question

    New Question: // User may create new question here
    - contains
      - label: would you rather
      - textbox: optionOne
      - textbox: optionTwo
      - button: submit

    Leaderboard: // Listing
    - graph
      - user
      - points (questions+answers)
      - questions made
      - questions answered
    
    Login
    - contains
      - listbox
        - picture 
        - name
      - button: submit

    * authedUser becomes name

    Question
    - label : Would you rather
    - radio button: optionOne
    - label : ------ or ------
    - radio button: optionTwo
    - button: Submit
    
    * onSubmit : save answer
                 - update question.option[One|Two].votes[] with authUser
                 - update state
                 - close question

    ------------------- BUILD ORDER -----------------------
    - backend
      - redux
        - build per slice instead of action/reducer subdirectories?
      - store
        - test program?
         

  Project Setup: git clone "https://github.com/mclark610/reactnd-rather.git"
    * cd reactnd-rather
    * npm install
    
    To Start the server:   npm run start
    To Stop the server: CTRL-C
