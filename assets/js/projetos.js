function projetos(section) {
    const cards = [{
            title: "Card 1",
            details: "Details for card 1",
            image: "image1.jpg"
        },
        {
            title: "Card 2",
            details: "Details for card 2",
            image: "image2.jpg"
        },
        {
            title: "Card 3",
            details: "Details for card 3",
            image: "image3.jpg"
        }
    ];
    section.innerHTML =
        `<header>
      <h2>Projects</h2>
    </header>

    <div class="content">
      <div class="cards">


        
        
      </div>
    </div>`
}

export { projetos }