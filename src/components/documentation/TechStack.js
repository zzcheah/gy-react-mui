const TechnologiesInvolved = `

# Tech Stack ⚙️

This section discusses on the technologies used in the project.

## Programming languages

* Java
* JavaScript
* Python


## Main Tech Stack

### Spring Boot

Spring Boot is a popular open-source Java framework to create microservice. 
Spring Boot is heavily utilized in the system which can be found in the main server and task worker module. 

### React JS 

React JS is a modern front-end library used to build the user interview of web applciation.
It boosts the productvity by using component-based building block which are highly dynamic and reusable. It also has good support in the community.

### MongoDB

MongoDB is a popular NoSQL database which is document-based. This database is used by big companies including Google, Adobe, and ebay.
In this project, it is used to store data and also used as a file system (GridFS).

---

## More Technologies

### Docker

Docker is a containerization technology that provides various benefits. 
In this project, docker is used to provide isolation betwen user requests by processing the resquest in isolated container. 

Docker is used along with Nvidia-Docker to provide a GPU-accelerated environment for the container. It is crucial in speeding up processing time for GPU-intensive tasks.


### Nvidia-Docker

Nvidia-Docker is the technology that helps in providing GPU-accelerated environment for Docker container.
It is powered by CUDA which application can take the advantage of parallel processing.


### TensorFlow

TensorFlow is a popular framework used for machine learning. For the scope of this project, this system is built to run Machine Learning application.
In the project, TensorFlow is used to write the sample script to train machine learning model.


### GraphQL (Apollo)

GraphQL is a relatively new technologies maintained by Facebook. It is an API query language that is highly descriptive in nature. 

Apollo (GraphQL library) is used to provide additional benefits such as caching to reduce the traffic to the main server.

More on GraphQL, [Click Here](https://graphql.org/)


### JSON Web Token / JWT Token

JWT Token is used for the authentication process in the system as well as maintaining the user session. By using JWT, it makes the server stateless.

It is integrated with Spring Security to verify the user based on a secret key. 

More on JWT and playground, [Click Here](https://jwt.io/)


### Material UI (Material Design)

Material Design is a design system developed by Google. This design language provides guidelines and best practices on how to create a good user interface.

The front of the system uses Material-UI (Material Design library) to build the front end with some minor tweaks.


---

## Deployment on Cloud

### S3 - AWS Simple Cloud Storage

S3 Bucket is a storage service provided by Amazon Web Services (AWS). With S3 Bucket, the static files built using ReactJS are hosted on the cloud. 

### EC2 - AWS Elastic Compute Cloud

EC2 is a virtual computer service provided by Amazon Web Services (AWS). The main server jar executable (application logic) and MongoDB (database) are run on this virtual computer. 

---

## Development Tools

### WSL2 - Windows Subsystem for Linux 2

The development of the system is done on a Windows machine. To ensure that the system can run on Linux, WSL2 is used to mimic the envionment in Windows machine.

By using WSL2, Windows machine can run Linix kernel executable. During the development phase, MongoDB and Docker Daemon run using Ubuntu powered by WSL2. 

Hence, the system can **run on both Windows and Linux machine.** 


### Docker Desktop

Docker Desktop is a software that connects to the Docker Daemon to provide GUI. Docker Desktop helps in improving productivity.

Instead of using command line to check the processing status, Docker Desktop is used to directly access to the container and obtain useful information.


### Postman

Postman is a software/tool that is popular in testing API endpoints. Postman mimics how a user send the API call to the main server.

Postman also allows the use of authentication token (see JWT token above) when sending API.


### Robo3T

Robo3T is a GUI for MongoDB. It is used to boost productivity by viewing and editing documents in the database easily.

--- 

## IDE

* IntelliJ (Java Backend)
* VSCode (Web Development)

## Authors

- [@zzcheah](https://www.github.com/zzcheah)

`;

export default TechnologiesInvolved;
