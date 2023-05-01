const LEFT_SLIDE = document.getElementById('left');
const RIGHT_SLIDE = document.getElementById('right');
const slider_cards = document.querySelector('.past_slider_cards');

let line_score = 0;
let line_page = 0;

RIGHT_SLIDE.addEventListener('click', () => {
    if (line_page == 4) {
        line_page = 0;
        line_score = 0;
        slider_cards.style.right = line_score + "px";
    }
    line_score += 350;
    slider_cards.style.right = line_score + "px";
    line_page++;
    if (line_score > 1200) {
        line_score = 0;
        slider_cards.style.right = line_score + "px";
        line_page = 0;
    }
})
LEFT_SLIDE.addEventListener('click', () => {
    if (line_score > 0) {
        line_score -= 400;
        slider_cards.style.right = line_score + "px";
    }
    if (line_score < 0) {
        line_score = 400;
        line_score = line_score * 4;
        slider_cards.style.right = line_score + "px";
        line_page = 4;

    }
    if (line_page == 0) {
        line_score = 400;
        line_score = line_score * 4;
        slider_cards.style.right = line_score + "px";
        line_page = 4;
        
    
    } else if (line_page > 3) {
        line_page = 0;
    }
    line_page--
})