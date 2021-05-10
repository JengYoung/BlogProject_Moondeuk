import multer from 'multer';
import moment from 'moment';
import path from 'path';
/* 
! 파일을 저장하기 위한 업로드 모듈
* storage: 파일을 저장하기 위한 제어 기능
* limits: 선택적 속성의 크기 제한 
*/
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + moment().format('YYYYMMDDHHmmss' + ext));
    }
});

const fileFilter = function(req, file, cb) {
    const fileFormat = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
    const ext = path.extname(file.originalname);
    if (!fileFormat.includes(ext)) {
        return cb(new Error("Please send me '.jpg / .png / .jpeg file'"))
    }
    cb(null, true)
}

const limits = {
    filesize: 5 * 1024 * 1024 // 5MB 제한
}

const uploadImgFile = multer({
    storage,
    fileFilter,
    limits
})

export default uploadImgFile;