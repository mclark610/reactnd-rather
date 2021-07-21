 
project: reactnd-rather
description:
    reactnd-rather is a queston answer type application that tracks users answers 
  to questions they and other users create.   It then gives each user a score 
  based on the number of questions answered as well as the number of questions 
  the user generated.

backend:
  the backend is simulated by canned data as well as functions to pull the data.  

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
    - Home
    - New Question
    - Leaderboard
    - Login [user name if logged in]
    - Log out [ if user logged in]

    Home: // landing page
    - contains
      - nav
      - unanswered questions [timestamp order]
      - answered questions [timestamp order]

      if user is not logged in, go to login information
    
    New Question: // User may create new question here
    - 