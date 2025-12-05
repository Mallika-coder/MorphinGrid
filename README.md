# MorphinGrid

Ranger Bio-Telemetry Processing Platform with AI/ML capabilities

## Getting Started

### Prerequisites
- Node.js 16.0.0 or later
- npm or yarn
- MongoDB (for the backend)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MorphinGrid.git
   cd MorphinGrid
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your environment variables (refer to `.env.example` if available)

### Running Locally

1. Start the development server:
   ```bash
   # From the root directory
   npm run dev
   ```
   - Frontend will be available at `http://localhost:3001`
   - Backend API will be available at `http://localhost:5000` (default)

## Deployment

This project is configured to be deployed on Vercel. The frontend will be automatically built and deployed when you push to the main branch.

## Tech Stack

- **Frontend**: Next.js 13+ with TypeScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Real-time**: Socket.IO
- **Styling**: Tailwind CSS

## License

This project is licensed under the MIT License.
