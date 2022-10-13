// fetch("https://swapi.dev/api/people/1/")
// .then(res=>{
//     console.log("RESolved!", res)
//     return res.json()
// })
// .then((data) => {
//     console.log("jason done!!", data)
// })
// .catch(e => {
//     console.log("ERROR!", e)
// })

// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("Response: ", res)
// })
// .catch((e)=>{
//     console.log("Error!: ",e)
// })

// const getSWPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("Error!!!", e);
//     }
// };
// getSWPerson(3);


const jokes = document.querySelector("#jokes")
const button = document.querySelector("button");



const getDadJoke = async () => {
    try{
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e){ 
        return ("No jokes for you!")
    }
};

const addNewJoke = async() =>{
    const newJoke = await getDadJoke()
    const newLi = document.createElement("li");
    newLi.append(newJoke);
    jokes.append(newLi);
};
button.addEventListener("click", addNewJoke);
