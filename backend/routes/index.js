const express = require("express")
const QR = require("../components/tast1.2")
const UploadImage = require("../components/UploadImage")
const upload = require("../middleware/upload")

const router = express.Router()


router.get('/',(req,res)=> {
    res.send("Helloo")
})

router.post('/upload', upload.single("image"), UploadImage.image)
router.get('/QR', QR.qrGenerator)

router.post('/QR/decode', QR.decode)

module.exports = router