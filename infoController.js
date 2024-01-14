const { Student } = require("../model")

exports.createBlog = async (req, res)=>{
    console.log(req)
    let data = {
        rollNo: req.body.rollNo,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        faculty: req.body.faculty,
        semester: req.body.semester,
    }
    let createdBlog = await Student.create(data)

    if(createdBlog){
        res.status(200).json({
            data: createdBlog,
            message: "Created Successfully"
        })
    }
    console.log(createdBlog)
}
exports.getBlogs = async(req,res)=>{
    let result = await Student.findAll();
    res.status(200).send(result);
}
exports.getBlogsById = async(req,res)=>{
    let result = await Student.findByPk(req.params.id);
    res.status(200).send(result);
}
exports.deleteBlogsById = async(req,res)=>{
    let result = await Student.destroy({
        where:{
            id: req.params.id,
        }
    })
    res.status(200).json({
        success: true,
        message:"Deleted Successfully",
    })
}