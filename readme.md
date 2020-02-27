
# Node WebSocket 
##Project Architecture Layered

[![Architecture]( https://res.cloudinary.com/practicaldev/image/fetch/s--NBWarb6c--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8ujhfk47a3ciluri0wfx.png)]( https://res.cloudinary.com/practicaldev/image/fetch/s--NBWarb6c--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8ujhfk47a3ciluri0wfx.png)

 
 - Based on https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf
  
##Project Structure
  src
  │   app.js          # App entry point
  └───websocket       # Routes for websocket endpoints and routes
  └───config          # Environment variables and configuration related stuff
  └───jobs            # Jobs definitions 
  └───loaders         # Split the startup process into modules
  └───models          # Database models
  └───services        # All the business logic is here
  └───subscribers     # Event handlers for async task
  └───types           # Type declaration files (d.ts) for Typescript