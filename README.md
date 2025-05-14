# FestiveFusion – Discover India Through Its Festivals

FestiveFusion is a culturally immersive tourism platform designed to help travelers explore India's vibrant festivals—across regions, seasons, and traditions. Whether it's a well-known celebration like Durga Puja or a hidden gem like the Bhagoria Festival of Madhya Pradesh's tribal communities, the app serves as a dynamic planner and cultural guide.

## Features

- **Festival Discovery**: Explore festivals by region, date, or type (religious, tribal, harvest, seasonal)
- **Visual Cards**: View origin stories, pictures, and local cultural insights
- **Dynamic Calendar**: Filter upcoming festivals by tourist-friendly options
- **Hidden Gems**: Discover lesser-known but culturally rich festivals
- **Data-Driven Insights**: Get recommendations based on crowd data, weather conditions, and accessibility

## Tech Stack

- **Frontend**: React with TypeScript, Material-UI
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/festive-fusion.git
   cd festive-fusion
   ```

2. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. Create a `.env` file in the server directory with the following variables:

   ```
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/festive-fusion
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

5. Create a `.env` file in the client directory:
   ```
   REACT_APP_API_URL=http://localhost:5001/api
   ```

## Running the Application

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
festive-fusion/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── types/        # TypeScript interfaces
│   │   └── theme.ts      # Material-UI theme
│   └── public/           # Static files
└── server/               # Backend Node.js application
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── models/       # MongoDB models
    │   ├── routes/       # API routes
    │   └── middleware/   # Custom middleware
    └── .env             # Environment variables
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- MongoDB for the database
- React and Node.js communities for their excellent documentation
