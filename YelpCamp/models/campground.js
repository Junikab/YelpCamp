const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const ImageSchema = new Schema({
    url: String,
    filename: String,
});

ImageSchema.virtual("thumbnail").get(function(){
    return this.url.replace("/upload", "/upload/w_200")
})

const CampgroundSchema = new Schema(
    {
        name: String,
        images: [ImageSchema],
        geometry: {
            type: {
                type: String,
                enum: ["Point"],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
        price: Number,
        description: String,
        location: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: "Review",
            },
        ],
    },
    opts
);

CampgroundSchema.virtual("properties.popUpMarkup").get(function () {
    return `
    <strong><a href="/campgrounds/${this._id}">${this.name}</a></strong>
    <h5><p>Location: ${this.location}</p></h5>`;

});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await review.deleteMany({
            _id: {
                $in: doc.reviews,
            },
        });
    }
});

module.exports = mongoose.model("Campground", CampgroundSchema);
