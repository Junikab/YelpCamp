// function Color (r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
    }
}

const c1 = new Color(40, 255, 35);
