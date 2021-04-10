const lazyImages = document.querySelectorAll(".lazy > source, .lazy > img");
if ("IntersectionObserver" in window) {
  let lazyImageObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          if ((lazyImage.tagName = "SOURCE")) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          } else {
            lazyImage.src = lazyImage.dataset.srcset;
          }
          lazyImage.parentElement.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    },
    {
      rootMargin: "350px 0px 100px 0px",
    }
  );

  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
} else {
  lazyImages.forEach(function (image) {
    if ((image.tagName = "SOURCE")) {
      image.srcset = image.dataset.srcset;
    } else {
      image.src = image.dataset.srcset;
    }
  });
}
