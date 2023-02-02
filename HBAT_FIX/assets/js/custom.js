

setTimeout(
()=>{
    const container = document.querySelector('#header-mobile-menu');
    document.querySelector('#header-mobile-burger').onclick = function () {
      container.classList.toggle('header-menu-show')
    };
}, 1000)

// setTimeout(
//   () => {
//     const container = document.querySelector('.user-items-list-carousel__slideshow-holder');
//     let scrollAmount = 0;
//     document.getElementById('mobileSlideRight').onclick = function () {
//       scrollAmount += 300
//       container.scrollTo({
//         top: 0,
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     };
//   }, 1000)


// setTimeout(
//   () => {
//     const container = document.querySelector('.user-items-list-carousel__slideshow-holder');
//     let scrollAmount = 0;
//     document.getElementById('slideLeft').onclick = function () {
//       scrollAmount -= 300
//       container.scrollTo({
//         top: 0,
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     };
//   }, 1000)


// setTimeout(
//   () => {
//     const container = document.querySelector('.user-items-list-carousel__slideshow-holder');
//     let scrollAmount = 0;

//     document.getElementById('mobileSlideLeft').onclick = function () {
//       console.log("LEFT called")

//       scrollAmount -= 300
//       container.scrollTo({
//         top: 0,
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     };

//   }, 1000)


