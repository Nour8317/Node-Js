import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My Express API',
    description: 'Automatically generated API documentation',
  },
  host: 'localhost:5001',
  // 1. Define the Global Security Scheme (This creates the Lock Icon / Authorize Button)
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: "Type 'Bearer ' followed by your token (e.g., 'Bearer abc123xyz')"
    }
  },
  // 2. Apply it globally to all endpoints by default (Optional)
  security: [
    {
      bearerAuth: []
    }
  ]
};

const outputFile = './swagger-output.json';
const routesFiles = ['./src/server.js']; 

swaggerAutogen()(outputFile, routesFiles, doc);
