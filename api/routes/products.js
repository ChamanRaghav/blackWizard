import express from 'express';
const router = express.Router();

import Product from '../models/products';

router.post('/', (req, res) => {
    Product.create({
        sem: req.body.semester,
        sessional: req.body.sessional,
        sub1: {
            subName: req.body.subName1,
            marks: req.body.marks1
        },
        sub2: {
            subName: req.body.subName2,
            marks: req.body.marks2
        },
        sub3: {
            subName: req.body.subName3,
            marks: req.body.marks3
        },
        sub4: {
            subName: req.body.subName4,
            marks: req.body.marks4
        },
        sub5: {
            subName: req.body.subName5,
            marks: req.body.marks5
        },
        sub6: {
            subName: req.body.subName6,
            marks: req.body.marks6
        }
    }, function (err, mark) {
        if (err) {
            console.log(err);
        } else {
            student.save();
            console.log(mark, 'Saved!');
            res.redirect("/student/" + student._id);
        }
    })
})

export default router;