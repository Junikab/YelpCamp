const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    makeImages(res.data);
    form.elements.query.value = "";
});

const makeImages = (shows) => {
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};

form.addEventListener("submit", function(){
    deleteImg()
})

const deleteImg = function(){
    let images = document.querySelectorAll("img")
    for(let img of images){
        img.remove();
    }
}