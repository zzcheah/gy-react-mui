const SystemArchitecture = `

# System Architecture

This section disucss on the architecture of GPU Yard.

## Architecture Diagram

![Architecture](https://gpuyard.s3.amazonaws.com/docs/SystemArchitecture.png)

The digram above shows the current architecture of GPU Yard.   

### Physical Aspect

* The Front End is hosted using **Amazon Web Services S3 Static Hosting** where the production build of ReactJS static files made public in the bucket.

* The Backend is divided to 2 main parts which are the *Main Server* and *Task Worker*:
    * Main Server  - hosted on **AWS EC2** 
    * Task  Worker - any machine with proper environment (discussed in *Add New Worker* section)


### Logical Aspect

GPU Yard is a 3-tier implements a **3-tier architecture** which consists of **Presentation** layer, **Application** layer and **Database** layer.

| Layer        | Technology              |
| -----------: | :---------------------- |
| Presentation | ReactJS                 |
| Application  | Spring Boot             |
| Database     | MongoDB                 |


* Presentation  - built using **React JS**
* Application   - built using **Spring Boot**
* Database      - built using Mongo


`;

export default SystemArchitecture;
