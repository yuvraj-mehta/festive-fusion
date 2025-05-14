# FestiveFusion

FestiveFusion is a comprehensive platform dedicated to celebrating and preserving India's rich cultural heritage through its diverse festivals. The platform serves as a bridge between cultural enthusiasts and authentic festival experiences across India.

## 🌟 Features

### Core Features

- **Festival Discovery**: Explore a curated collection of festivals from across India
- **Cultural Insights**: Deep dive into the history, significance, and traditions of each festival
- **Interactive Calendar**: Plan your cultural journey with our comprehensive festival calendar
- **Hidden Gems**: Discover lesser-known but culturally significant festivals
- **Community Engagement**: Connect with fellow cultural enthusiasts and share experiences

### Technical Features

- **Responsive Design**: Seamless experience across all devices
- **Modern UI/UX**: Built with Material-UI for a polished look and feel
- **Real-time Updates**: Stay informed about upcoming festivals and events
- **Interactive Forms**: Easy-to-use forms for planning visits and inquiries
- **Secure Authentication**: Protected user accounts and data

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/festiveFusion.git
   cd festiveFusion
   ```

2. Install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:

   ```bash
   # In the server directory, create a .env file:
   PORT=5001
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:

   ```bash
   # Start the backend server (from server directory)
   npm run dev

   # Start the frontend development server (from client directory)
   npm start
   ```

## 📁 Project Structure

```
festiveFusion/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── context/       # React context providers
│       ├── hooks/         # Custom React hooks
│       ├── services/      # API services
│       └── utils/         # Utility functions
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── utils/           # Utility functions
```

## 🛠️ Technology Stack

### Frontend

- React
- TypeScript
- Material-UI
- React Router
- Axios
- React Query

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## 📱 Key Pages

1. **Home**: Landing page with featured festivals and cultural highlights
2. **Festivals**: Comprehensive list of festivals with filtering options
3. **Hidden Gems**: Discover lesser-known but culturally significant festivals
4. **About**: Information about FestiveFusion's mission and vision
5. **Contact**: Get in touch with the team
6. **User Dashboard**: Personalized festival recommendations and saved items

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Rate limiting

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
cd server
npm test
```

## 📈 Future Enhancements

- [ ] Festival recommendation system
- [ ] Social media integration
- [ ] Virtual festival experiences
- [ ] Multi-language support
- [ ] Mobile application
- [ ] Advanced search filters
- [ ] User reviews and ratings
- [ ] Festival photo gallery

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: [Your Name]
- Frontend Developer: [Team Member]
- Backend Developer: [Team Member]
- UI/UX Designer: [Team Member]

## 📞 Support

For support, email support@festivefusion.com or join our Slack channel.

## 🙏 Acknowledgments

- All contributors who have helped shape this project
- The open-source community for their invaluable tools and libraries
- Cultural organizations and experts who have provided insights and guidance
