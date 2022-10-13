const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash)
};

const login = async(pw, hashedPw)=>{
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("Logged in!!!")
    } else{
        console.log("Incorrect!")
    }
}

// hashPassword("lol");
login("lol", "$2b$10$hhuTh3kHrIBrsuo6yLY.QeLpdeTGMuDf6.onO.seaH717IB0ZufbC");
