# DealYouNeed API

A Mini SaaS Deal + Wallet API built with Node.js, Express, and MongoDB.

## Features

- User management with wallet functionality
- Deal management
- Secure deal claiming with wallet balance validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/dealyouneed
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Users

- `POST /user` - Create a new user
  ```json
  {
    "id": "u123",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

- `GET /user/:id` - Get user details

### Deals

- `POST /deals` - Create a new deal
  ```json
  {
    "id": "d456",
    "title": "50% Off Notion Pro",
    "price": 20,
    "category": "Productivity",
    "partner": "Notion"
  }
  ```

- `GET /deals` - Get all available deals

### Claiming Deals

- `POST /user/claim/:userId/:dealId` - Claim a deal (deducts price from user's wallet)

## Example Usage

1. Create a user:
   ```bash
   curl -X POST http://localhost:3000/user \
     -H "Content-Type: application/json" \
     -d '{"id":"u123","name":"John Doe","email":"john@example.com"}'
   ```

2. Create a deal:
   ```bash
   curl -X POST http://localhost:3000/deals \
     -H "Content-Type: application/json" \
     -d '{"id":"d456","title":"50% Off Notion Pro","price":20,"category":"Productivity","partner":"Notion"}'
   ```

3. Claim a deal:
   ```bash
   curl -X POST http://localhost:3000/user/claim/u123/d456
   ```

## License

MIT
# dealYouNeed
