
export function randomColor() {

    let random = Math.floor(Math.random() * 6) + 1;

    let color;

    switch (random) {
        case 1:
            color = "#FF8096";
            break;
        case 2:
            color = "#FF9C7E";
            break;
        case 3:
            color = "#FFBA7F";
            break;
        case 4:
            color = "#42D5B6";
            break;
        case 5:
            color = "#F1E9D6";
            break;
        case 6:
            color = "#FFCABA";
            break;
        case 7:
            color = "#E6D8B8";
            break;
        case 8:
            color = "#FE997A";
            break;
        default:
            break;
    }

    return color;

}