/*!
* Start Bootstrap - Stylish Portfolio v6.0.3 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// Fades the scroll-to-top button in once the page has been scrolled a little.
//
// The theme this came from also wired up a sidebar menu. This page has never
// had one, so querying for it returned null and the listener below was never
// reached, which is why the button stayed hidden however far you scrolled.
window.addEventListener('DOMContentLoaded', () => {
    const scrollToTop = document.body.querySelector('.scroll-to-top');
    if (!scrollToTop) return;

    let visible = false;
    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
            if (!visible) {
                fadeIn(scrollToTop);
                visible = true;
            }
        } else if (visible) {
            fadeOut(scrollToTop);
            visible = false;
        }
    });
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
