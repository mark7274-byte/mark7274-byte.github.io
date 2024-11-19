// Form submission handler (for demo purposes)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset(); // Reset the form
  });
    // Define selector for selecting
        // anchor links with the hash
        let anchorSelector = 'a[href^="#"]';

        // Collect all such anchor links
        let anchorList =
            document.querySelectorAll(anchorSelector);

        // Iterate through each of the links
        anchorList.forEach(link => {
            link.onclick = function (e) {

                // Prevent scrolling if the
                // hash value is blank
                e.preventDefault();

                // Get the destination to scroll to
                // using the hash property
                let destination =
                    document.querySelector(this.hash);

                // Scroll to the destination using
                // scrollIntoView method
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
         // Get all elements with the class 'highlight-text'
         const highlightElements = document.querySelectorAll('.hoveri');

         // Add event listener to each element
         highlightElements.forEach(element => {
             element.addEventListener('mouseenter', function () {
                 // Change the background color and text color when mouse enters
                 this.style.backgroundColor = 'yellow';
                 this.style.color = 'red';
             });
 
             element.addEventListener('mouseleave', function () {
                 // Reset the background color and text color when mouse leaves
                 this.style.backgroundColor = '';
                 this.style.color = '';
             });
         });
