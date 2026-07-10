document.addEventListener("DOMContentLoaded", function () {
    const topMenuHeight = document.getElementById('top-menu')?.offsetHeight || 0;

    document.querySelectorAll(".toc a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element, adjusting for the top menu height
                window.scrollTo({
                    top: targetElement.offsetTop - topMenuHeight,
                    behavior: "smooth"
                });

                console.log(targetElement.offsetTop + topMenuHeight);

                // Update the URL in the address bar without reloading
                history.pushState(null, "", `#${targetId}`);
            }
        });
    });
});

// .toc_wrapper
