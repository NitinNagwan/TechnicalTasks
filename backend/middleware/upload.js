const multer = require("multer")

const store = multer.diskStorage({
    filename: (req,file,cb)=> {
        var fileType =""

        if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
            cb(null, file.originalname)
        }else{
           cb("File formats other than jpg/png not allowed") 
        }
    },
    destination: (req,file,cb) => {
        cb(null, './assets')
    }
})


const upload = multer({storage: store, limits: {fileSize: 1*1000*1000}})

module.exports = upload