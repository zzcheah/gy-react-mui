const WorkFlow = `

# Work Flow ▶️

This section explains the end-to-end flow from user making the request to user download the output.

### Front End 

1. User choose desired docker image (consists script on how to process a task)
2. User enters image-specific parameters and upload input files.
3. User submits the request.
   
### Backend (MainServer)

1. Main Server receives request along with the input file. 
2. Main Server stores the input file in File System (GridFS) powered by MongoDB.
3. Main Server adds the request to job queue and write neccesary information to database.

### Backend (TaskWorker)

1. Task Worker polls job from the Main Server through API call.
    1. Main Server verifies if the request is from registered machine.
    2. Main Server updates request status to *Processing*.
2. Task Worker pulls image from **Docker Hub** (docker image regisrty) if the specified image is not available locally.
3. Task Worker create an docker container from the image and inject related information as environment variables.
4. Task Worker runs the created container.

### Backend (Inside the container)

1. Script is run to preprocess the request by:
- base64 decoding the parameters (encoded during request submission)
- download input file from the main server and extract it
2. Run the image specific script to process the request using the paramters and input file
3. Compress the output files and upload it to the main server. 
    1. Main server stores the output file and update related request status to *COMPLETED*. 
    2. Main server notify user.

### Front End 

1. User receives notificaiton regarding request completion.
2. User views the request detail page and download the output file.

## Screenshots

![EnvVariables](https://gpuyard.s3.amazonaws.com/docs/ss/docker-env-variables.png)  

## Authors

- [@zzcheah](https://www.github.com/zzcheah)


`;

export default WorkFlow;
