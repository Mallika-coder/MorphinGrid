const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');
const { Queue } = require('bullmq');

let io;

const initSocket = (ioInstance) => {
  io = ioInstance;
  
  // Redis pub/sub for scaling
  const pubClient = createClient({ url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
  const subClient = pubClient.duplicate();
  
  Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
    io.adapter(createAdapter(pubClient, subClient));
    console.log('Socket.IO Redis adapter initialized');
  });

  // Socket.IO connection handler
  io.on('connection', (socket) => {
    console.log('New client connected');

    // Join a room for a specific ranger
    socket.on('joinRangerRoom', (rangerId) => {
      socket.join(`ranger_${rangerId}`);
      console.log(`User joined ranger room: ranger_${rangerId}`);
    });

    // Handle telemetry data updates
    socket.on('telemetryUpdate', (data) => {
      // Broadcast to all clients in the ranger's room
      io.to(`ranger_${data.rangerId}`).emit('telemetryData', data);
      
      // Emit to admin dashboard for monitoring
      io.to('admin_dashboard').emit('telemetryUpdate', data);
    });

    // Handle anomaly detection alerts
    socket.on('anomalyAlert', (alert) => {
      // Notify specific ranger and admin dashboard
      io.to(`ranger_${alert.rangerId}`).emit('newAnomaly', alert);
      io.to('admin_dashboard').emit('newAnomalyAlert', alert);
    });

    // Join admin dashboard room
    socket.on('joinAdminDashboard', () => {
      socket.join('admin_dashboard');
      console.log('Admin dashboard connected');
    });

    // Disconnect handler
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  // Initialize BullMQ queue for background processing
  const telemetryQueue = new Queue('telemetryProcessing', {
    connection: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    }
  });

  // Process telemetry data in the background
  telemetryQueue.process(async (job) => {
    const { data } = job;
    // Process telemetry data here
    console.log('Processing telemetry data:', data.rangerId);
    
    // Emit processed data via Socket.IO
    io.emit('telemetryProcessed', { 
      rangerId: data.rangerId, 
      status: 'processed',
      timestamp: new Date()
    });
    
    return { success: true };
  });
};

// Helper function to emit events from anywhere in the app
const emitTelemetryUpdate = (rangerId, data) => {
  if (io) {
    io.to(`ranger_${rangerId}`).emit('telemetryData', data);
  }
};

const emitAnomalyAlert = (alert) => {
  if (io) {
    io.to(`ranger_${alert.rangerId}`).emit('newAnomaly', alert);
    io.to('admin_dashboard').emit('newAnomalyAlert', alert);
  }
};

module.exports = {
  initSocket,
  emitTelemetryUpdate,
  emitAnomalyAlert
};
