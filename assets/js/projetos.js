function projetos(section) {
  const cards = [{
          title: "Grandez-Booking-System",
          details: "Grandezza's Booking System is full booking system that allow the customer to book for trip activities and packages from he Grandezza tour and travel agency.",
          images: [
              "./assets/images/projects/grandezza_1.jpg",
              "./assets/images/projects/grandezza_2.jpg",
              "./assets/images/projects/grandezza_3.jpg"
          ],
          url: "https://grandezzazanzibar.com/"
      },
      {
          title: "Inventory Management System",
          details: "I created this inventory system that allows users to manage their inventory by adding, updating, and deleting items. It is built with Laravel for the backend and Vue.js for the frontend.",
          images: [
              "./assets/images/projects/inventory_1.jpg",
              "./assets/images/projects/inventory_2.jpg",
              "./assets/images/projects/inventory_3.jpg"
          ],
          url: "https://github.com/WAZIRI123/Inventory-System.git"
      },
      {
          title: "Uru Secondary School",
          details: "I created this site for Uru Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
          images: [
              "./assets/images/projects/uruseminary_1.jpg",
              "./assets/images/projects/uruseminary_2.jpg",
              "./assets/images/projects/uruseminary_3.jpg"
          ],
          url: "https://urusecondary.sc.tz/"
      },
      {
          title: "Ilowola Secondary School",
          details: "I created this site for Ilowola Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
          images: [
              "./assets/images/projects/ilowola_1.jpg",
              "./assets/images/projects/ilowola_2.jpg",
              "./assets/images/projects/ilowola_3.jpg"
          ],
          url: "https://schools.ilowola.org/"
      },
  ];

  cards.forEach(function(element) {
      let galleryHTML = '';
      element.images.forEach(image => {
          galleryHTML += `
              <a href="${image}" class="image-gallery-link"><img src="${image}" alt="${element.title}" /></a>
          `;
      });

      let html = ` 
          <div class="card">
              <h3>${element.title}</h3>
              <div class="img-wrapper">
                  ${galleryHTML}
                  <div class="buttons">
                      <a href="${element.url}" target="_blank" title="${element.title}">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <!-- Add your SVG path for external link icon -->
                          </svg>
                      </a>
                  </div>
              </div>
              <p>${element.details}</p>
          </div>`;

      section.insertAdjacentHTML('beforeend', html);
  });

  // Initialize Magnific Popup for image galleries
  $('.image-gallery-link').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      }
  });
}

export { projetos }
