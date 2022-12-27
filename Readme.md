Backend tasks
1. go to Task/backend 
2. run "npn i" then run 'npm run dev' this will start backend server on port 6001
3. PRINT STAR PATTERN
    3.1) run 'node /components/starPattern.js'

4. UPLOAD IMAGE
    4.1) go to postman create new request 
    4.2) use url "http://localhost:6001/api/upload"  and send a file 
    4.3) in response you will get image url    

 5. For task 1.2 the iutput will be shown on the terminal e.g. { name: 'nitin', phone: 128181787, iat: 1672128800, exp: 1672215200 }

 6. LANGUAGE FILE
    6.1) run command "node /language_files/readFiles.js"
    6.2)  output will look like 
            { name: 'User Name', dob: 'Date of birth' }
            { name: 'उपयोगकर्ता नाम', dob: 'जन्म की तारीख' }

 FRONTEND PART
** run "npm i" then run "npm start" it will start the app at localhost:3000

 1. TASK 1.1 QR Generator
    1.1) Enter value in the input box and press submit button.
    1.2) It will create a QR Code and you can scan with your phone.
    1.3) file QrCode.jsx at /src/components/QrCode.jsx for the code.

 2. OCR
    2.1) first click on the button choose file it will show you a file/image below that button.
    2.2) Now you click on the button "convert to text" to get the text of the image as an editable text.
    2.3) for the code go to /src/components/Ocr.jsx.

 3. TASK 4
    alternate background color it is visible in the app itself  
    4.1) for the code go to /src/components/task4.jsx.

 4. TASK 1.2 
    4.1) Half of the code is in backend and on front end we are reading the file from the response of api.
    4.2) when you click on the button "Read image" you will see the content of the image down there as it is a excode data which we will send to the server and decode it.
    4.3) for code go to /src/components/task1.2.jsx.    
