# 🧘 Humble Superhero API

## 📌 Description
This API allows you to add and retrieve superheroes, sorted based on their humility score.

## 🚀 How to Run?
1. Install dependencies:  
   ```sh
   npm install
   ```
2. Create .env file with port value:  
   ```sh
   PORT:3000
   ```
2. Start the server:  
   ```sh
   npm start
   ```

## 🔧 API Endpoints
### ➕ Add a Superhero  
- **URL:** `POST /superheroes`  
- **Body:**  
  ```json
  {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
  ```
- **Response:**  
  ```json
  {
    "id": 1,
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
  ```

### 🐜 Get All Superheroes  
- **URL:** `GET /superheroes`  
- **Response:**  
  ```json
  [
    {
      "id": 1,
      "name": "Superman",
      "superpower": "Flight",
      "humilityScore": 8
    }
  ]
  ```

## 🔥 Future Improvements (If More Time Available)
- Add a database (MongoDB or PostgreSQL)
- Implement user authentication
- Build a frontend
- Develop a scalabile system with various of predefined helpers and functions to easly handle simular tasks
- use desing patterns for structure
- Introduce advanced validation techniques
- Connect some third-part API for superheros
- Use asynchronous programming for better performance
- Implement a job queue to handle background tasks efficiently
- Set up a WebSocket server for real-time updates

## 🏆 How I Would Collaborate in a Team
- Use more efficent git verion controll techniques not only simple adding created task  
- Write **clear and reusable functions**  
- Follow **code review best practices**
- Make better comment structure inside app

