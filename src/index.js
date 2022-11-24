function createNewPage(pageName) {
  if (pageName === "Home") {
    createHomePage();
  } else if (pageName === "Menu") {
    createMenuPage();
  } else if (pageName === "Contact") {
    createContactPage();
  }
}

function createHomePage() {
  const content = document.querySelector("#content");
  const htmlCode = `
    <header>
    <h1>Mozzarello</h1>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
  </header>
  
  <section>
    <p>Best Pizza in the Town</p>
    <p>Made with special recipe since 1111</p>
    <img src="images/chef.jfif" alt="restaurantBannerImage" />
    <p>order online or visit us!</p>
  </section>
  
  <footer>
  <span
    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &
    <a href="https://github.com/SayyidMuhammad878"
      >Sayyid Muhammad A</a
    ></span
  >
</footer>
    `;

  content.innerHTML = htmlCode;
  addFunctionallityToHeaderList();
}

function createMenuPage() {
  const content = document.querySelector("#content");
  const htmlCode = `
    <header>
    <h1>Mozzarello</h1>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
  </header>
  
  
  <section id="menu">
    <ul>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
      <li>
        <img src="images/salsabil.png" alt="Salsabil Image" />
        <h2>Salsabil</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </li>
    </ul>
  </section>
  
  <footer>
  <span
    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &
    <a href="https://github.com/SayyidMuhammad878"
      >Sayyid Muhammad A</a
    ></span
  >
</footer>
    `;
  content.innerHTML = htmlCode;
  addFunctionallityToHeaderList();
}

function createContactPage() {
  const content = document.querySelector("#content");
  const htmlCode = `
  <header>
  <h1>Mozzarello</h1>
  <ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
  </ul>
</header>
  <section class="contact">
    <h2>Contact Form</h2>
    <form class="contactForm" method="get">
    <div>
    <label for="firstName">First Name:</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name.."
    />
  </div>
  <div>
    <label for="lastName">Last Name:</label>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name.."
    />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" placeholder="Email.." />
  </div>
  <div>
    <label for="message">Your message:</label>
    <textarea
      name="message"
      id="message"
      cols="50"
      rows="20"
      placeholder="Message..."
    ></textarea>
  </div>
      <button type="submit">Send</button>
    </form>
  </section>
  
  <footer>
  <span
    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &
    <a href="https://github.com/SayyidMuhammad878"
      >Sayyid Muhammad A</a
    ></span
  >
</footer>
    `;
  content.innerHTML = htmlCode;
  addFunctionallityToHeaderList();
}

createHomePage();

function addFunctionallityToHeaderList() {
  const headerLi = document.querySelectorAll("header > ul li");
  headerLi.forEach((li) => {
    li.addEventListener("click", () => {
      createNewPage(li.innerHTML);
    });
  });
}
