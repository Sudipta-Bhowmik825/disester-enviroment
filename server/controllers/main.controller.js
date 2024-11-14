const dashboard=async(req,res)=>{
    try {
        res.render("index")
    } catch (error) {
        console.log(`Dashboard error : ${error}`);
        res.status(500),json({
            message:error
        })
    }
}
const users=async(req,res)=>{
    try {
        res.render("users")
    } catch (error) {
        console.log(`Dashboard error : ${error}`);
        res.status(500),json({
            message:error
        })
    }
}
const error=async(req,res)=>{
    try {
        res.render("error")
    } catch (error) {
        console.log(`Dashboard error : ${error}`);
        res.status(500),json({
            message:error
        })
    }
}
const person=async(req,res)=>{
    try {
        res.render("person")
    } catch (error) {
        console.log(`Dashboard error : ${error}`);
        res.status(500),json({
            message:error
        })
    }
}
export{
    dashboard,
    users,
    error,
    person
}