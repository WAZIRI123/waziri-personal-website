function projetos(section) {
    const cards = [

      {
        title: "Kilimanjaro Christian Meical Centre",
        details: "Grandezza's Booking System is full booking system that allow the customer to book for trip activities and packages from he Grandezza tour and travel agency.",
        image: "./assets/images/projects/kcmc.jpg",
        url: "https://www.kcmc.ac.tz/"
    },
      
      {
            title: "Grandez-Booking-System",
            details: "Grandezza's Booking System is full booking system that allow the customer to book for trip activities and packages from he Grandezza tour and travel agency.",
            image: "./assets/images/projects/grandezza.jpg",
            url: "https://grandezzazanzibar.com/"
        },
        // uruseminary
        // {
        //     title: "Joskenyandelicacies",
        //     details: "I created this inventory system that allows users to manage their inventory by adding, updating, and deleting items. It is built with Laravel for the backend and Vue.js for the frontend.",
        //     image: "./assets/images/projects/josKenyan.jpg",
        //     url: "https://joskenyandelicacies.com/"
        // },

        {
            title: "morningtanzania",
            details: "I created this site for Uru Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
            image: "./assets/images/projects/morningtanzania.jpg",
            url: "https://morningtanzania.com/"
        },

        // {
        //     title: "djvinceice",
        //     details: "I created this site for Ilowola Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
        //     image: "./assets/images/projects/djvince.jpg",
        //     url: "https://djvinceice.com/"
        // },

        {
          title: "My Portifolio Website",
          details: "I created this site for Ilowola Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
          image: "./assets/images/projects/waziri.jpg",
          url: "https://waziri.vercel.app/"
      },

                {
          title: "Livewire Package to generate CRUD Files using TALL Stack",
          details: "I created this site for Ilowola Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
          image: "https://media.giphy.com/media/e4sld9tmOsDMMbBztN/giphy.gif",
          url: "https://github.com/WAZIRI123/waziri-tall-crud-generator"
      },

                {
          title: "Livewire Package to display Toast Notification based on TALL Stack.",
          details: "I created this site for Ilowola Secondary School to provide a central online resource for students, parents, and teachers. I designed the website with a clean and modern layout.",
          image: "https://media.giphy.com/media/P1aEuZq9kSok2RIfJC/giphy.gif",
          url: "https://github.com/WAZIRI123/Livewire-Toast/"
      },

        
    ];
    let html = ''

    cards.forEach(function(element) {
        html += ` <div class="card">
      <div class="img-wrapper">
      <div data-bg="https://reveccs.com/wp-content/uploads/2023/07/leopard-tours.png" class="bdt-scroll-image bdt-scroll-image-bottom-top rocket-lazyload entered lazyloaded" style="background-image: url(${element.image});" data-ll-status="loaded"></div>

      <a  href="${element.url}" class="bdt-scroll-image-caption bdt-caption-text">${element.title}</a>
  
      </div>
    
    </div>`;
    });
    section.innerHTML =
        `<header>
    <h2>Projects</h2>
  </header>
  <div class="content">
    <div class="cards">
     ${html}
    </div>
  </div>`
}

export { projetos }
