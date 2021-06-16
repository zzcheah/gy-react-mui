const Installation = `

# Installation Guide 🪄

This section discusses on how to set up the system.

## Front End 

The front end is built using React JS, ref: [gy-react-mui](https://github.com/zzcheah/gy-react-mui). The production build of React JS library is just bunch of static files. 
Hence, the static files can be hosted on any machine. While this project has it hosted on AWS S3, it is not a must. It can be hosted anywhere, on EC2 or even on server in an organization.

** Note: You may want to change the main server endpoint address and create a production build. 
You can do it by modifying the value of *BACKEND_HOST* in *src/app/constants.js*.

To run the app in development mode, first clone the project then run the following at root directory: 

~~~bash 
  npm install
  npm start
~~~

To build the app for production: 

~~~bash 
  npm run build
~~~

For more information on React Development: [React](https://reactjs.org/)

---

## MongoDB 

Installation Guide: [Install MongoDB - MongoDB Manual](https://docs.mongodb.com/manual/installation/)


## Main Server 

The Main Server is built using Spring Boot, ref: [GPU-Yard](https://github.com/zzcheah/GPU-Yard). The main server can be set up easily by running the [jar executable](https://gpuyard.s3.amazonaws.com/docs/gy-mainserver.jar). 

** Note that the main server can only start when MongoDB connection is valid. By default, the main server expects MongoDB to be hosted on the same machine. You can change the connection by override the application properties.

Guide on overriding application properties: [20. Externalized Configuration](https://docs.spring.io/spring-boot/docs/1.0.0.RC5/reference/html/boot-features-external-config.html)


## Task Worker

The Task Worker is built using Spring Boot, ref: [GPU-Yard](https://github.com/zzcheah/GPU-Yard). The Task Worker comes in the form of [jar executable](https://gpuyard.s3.amazonaws.com/docs/gy-taskworker.jar). 

The Task Worker application can only run under 3 conditions: 

- Valid Main Server Connection
- Running Docker Daemon
- Task Worker registered on main server

Similar to Main Server, you can change the connection to main server by override the application properties. 

When you first run the application, you will be prompted to enter your workerID (obtained after registering worker on main server).
Upon entering valid id, the application will start and poll job from the main server. Else if invalid id is entered, the application will terminate, and you will be allowerd to re-enter id.

** Note that entering id is only required for the first time of setting up.

### Docker Setting Up 

Since this system is designed to run on Linux kernel, additional configuration is required for setting up Docker on **Windows** machine.

For **Windows** machine, first set up WSL2 to enable running command using Linux Kernel. Guide: [Install WSL on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Docker installation guide (Linux/WSL2): [Install Docker Engine | Docker Documentation](https://docs.docker.com/engine/install/)
   

## Authors

- [@zzcheah](https://www.github.com/zzcheah)



`;

export default Installation;

// ## Potential/Example Use Cases

// This sub-section discusses on how this system can be used, focusing on the benifit of having GPU-accelerated environment.

// ### Learning Institutions

// learning institution can set up this system to provide MLaaS to the students.
// It will be helpful for the students that cannot afford a good GPU for machine learning tasks. Having this system in a learning institution can also encourage students to look more into the ML and AI fields.

// ### Organization

// Any organization can set up this system to share its underutilized GPU resources with its members.
