# Shortest Path Algorithm Visualizer

A comprehensive Data Structures and Algorithms (DSA) project that provides an interactive web-based visualization tool for various shortest path algorithms. This full-stack application allows users to create graphs, run different algorithms, and visualize the results in real-time.

## 🚀 Features

### Algorithms Implemented
- **Dijkstra's Algorithm** - Finds shortest paths from a source node to all other nodes in a weighted graph
- **Bellman-Ford Algorithm** - Handles graphs with negative edge weights and detects negative cycles
- **Floyd-Warshall Algorithm** - Finds shortest paths between all pairs of nodes
- **Prim's Algorithm** - Constructs minimum spanning trees
- **Kruskal's Algorithm** - Another approach for minimum spanning trees

### Core Functionality
- **Interactive Graph Editor** - Create and modify graphs with drag-and-drop nodes and edges
- **Real-time Visualization** - Watch algorithms execute step-by-step with animated highlights
- **User Authentication** - Register and login to save your graphs and results
- **Graph Library** - Save and manage multiple graphs
- **Result History** - View past algorithm executions and their results
- **Algorithm Comparison** - Run multiple algorithms on the same graph for comparison

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Python** for algorithm implementations
- **JWT Authentication** with bcrypt password hashing
- **CORS** enabled for cross-origin requests

### Frontend
- **React 18** with modern hooks and functional components
- **React Router** for client-side routing
- **Vis.js Network** for interactive graph visualization
- **Tailwind CSS** for responsive styling
- **Context API** for state management

### Development Tools
- **Nodemon** for backend development
- **Concurrently** for running multiple services
- **ESLint** for code linting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **Python 3.x** (for running algorithms)
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd shortest-path-project
```

### 2. Install Dependencies
```bash
# Install all dependencies (backend + frontend)
npm run install-all

# Or install manually:
# Backend dependencies
npm run install-server

# Frontend dependencies
npm run install-client
```

### 3. Environment Configuration
Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/shortest-path-db
# Or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/shortest-path-db

JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB installation
mongod

# Or use MongoDB Compass/Atlas for cloud database
```

### 5. Run the Application
```bash
# Development mode (runs both frontend and backend concurrently)
npm run dev

# Or run services separately:
# Terminal 1: Start backend server
npm run server

# Terminal 2: Start frontend client
npm run client
```

The application will be available at:
- **Frontend**: http://localhost:3000 (React app)
- **Backend API**: http://localhost:5000 (Express server)

## 📖 Usage

### Creating a Graph
1. Open the application in your browser
2. Use the graph editor to add nodes (click on empty space)
3. Add edges by dragging from one node to another
4. Set edge weights by clicking on edges and entering values

### Running Algorithms
1. Select an algorithm from the dropdown menu
2. Choose a starting node (for applicable algorithms)
3. Click "Run Algorithm" to execute and visualize
4. View the results in the output panel

### User Features
- **Register/Login** to save your work
- **Save Graphs** to your personal library
- **View History** of previous algorithm runs
- **Compare Results** across different algorithms

## 🏗️ Project Structure

```
shortest-path-project/
├── backend/                    # Express.js server
│   ├── algorithms/            # Python algorithm implementations
│   │   ├── dijkstra.py
│   │   ├── bellman_ford.py
│   │   ├── floyd_warshall.py
│   │   ├── kruskal.py
│   │   └── prims.py
│   ├── config/                # Database configuration
│   ├── controllers/           # Route controllers
│   ├── middleware/            # Authentication middleware
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── server.js             # Main server file
│   └── package.json
├── frontend/                  # React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── contexts/         # React context providers
│   │   ├── api.js           # API service functions
│   │   └── App.jsx          # Main app component
│   └── package.json
├── package.json              # Root package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Graph Operations
- `POST /api/graphs/dijkstra` - Run Dijkstra's algorithm
- `POST /api/graphs/bellman-ford` - Run Bellman-Ford algorithm
- `POST /api/graphs/floyd-warshall` - Run Floyd-Warshall algorithm
- `POST /api/graphs/prims` - Run Prim's algorithm
- `POST /api/graphs/kruskal` - Run Kruskal's algorithm
- `POST /api/graphs/save` - Save a graph
- `GET /api/graphs/library` - Get user's saved graphs
- `GET /api/graphs/history` - Get algorithm execution history

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure Python is available on the server
3. Deploy to services like Heroku, Railway, or Vercel

### Frontend Deployment
```bash
npm run build
```
Deploy the `build` folder to services like Netlify, Vercel, or GitHub Pages.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built as a comprehensive DSA learning tool
- Uses Vis.js for graph visualization
- Python algorithms for computational efficiency
- React ecosystem for modern web development

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include error messages, screenshots, and steps to reproduce

---

**Happy Learning! 🎓** Explore the fascinating world of graph algorithms through interactive visualization.
