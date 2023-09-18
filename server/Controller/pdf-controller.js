import path from 'path';
import multer from 'multer';

var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null , '/uploads')
    },
    filename : function(req,file,cb){
        let ext = path.extname(file.originalname)
        cd(null,Date.now()+ext)
    }
})