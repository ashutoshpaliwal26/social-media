import dbConnection from "@/config/dbconnection";
import user from "@/models/user";

const login = (req,res) => {
    try{
        const { email , password} = req.body;
        console.log(email, password);
        dbConnection();
        res.send("Succesfull");
    }catch(err){
        console.log(err);
    }
}

export default login