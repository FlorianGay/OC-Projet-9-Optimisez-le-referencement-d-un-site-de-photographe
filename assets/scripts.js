$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

function setLazyImg() {
    const screenWidth = window.innerWidth;
    const screenMobile = 768;
    const imgCarousel = document.querySelectorAll('.carousel_img_load')

    imgCarousel.forEach(image => {
        if(screenWidth <= screenMobile){
        image.setAttribute('loading', 'lazy')
    }else {
        image.removeAttribute('loading')
    }
    })
}

setLazyImg();
window.addEventListener('resize', setLazyImg);

