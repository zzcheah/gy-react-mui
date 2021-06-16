const SystemArchitecture = `

# System Architecture 🛠️

This section discusses on the architecture of GPU Yard.

## Architecture Diagram

![Architecture](https://gpuyard.s3.amazonaws.com/docs/SystemArchitecture.png)

The diagram  above shows the current architecture of GPU Yard.   

### Physical Aspect

* The Front End is hosted using **Amazon Web Services S3 Static Hosting** where the production build of ReactJS static files made public in the bucket.

* The Backend is divided to 2 main parts which are the *Main Server* and *Task Worker*:
    * Main Server  - hosted on **AWS EC2** 
    * Task  Worker - any machine with proper environment (disucss in Installation section)


### Logical Aspect

GPU Yard is a 3-tier implements a **3-tier architecture** which consists of **Presentation** layer, **Application** layer and **Database** layer.

| Layer        | Technology              |
| -----------: | :---------------------- |
| Presentation | ReactJS                 |
| Application  | Spring Boot             |
| Database     | MongoDB                 |

---

## Backend Components 

### Main Server 

The main server serves as the "middleman" between the user and the workers. The main server does not process the reqeust but act as a queue for the user requests.   

It handles the following:

* job/task scheduling
* queueing mechanism
* read/write operation to the database (MongoDB) 
* hosting endpoint to serve frontend data (GraphQL & REST API). 


### Task Worker

The task workers are the actual processing units of the system. It connects with Docker Daemon to process the user request within container.

The environment is **GPU-accelerated** such that application can take advantage of parallel processing. This is enabled by CUDA through [nvidia-docker](https://github.com/NVIDIA/nvidia-docker).

## Authors

- [@zzcheah](https://www.github.com/zzcheah)

`;

export default SystemArchitecture;
