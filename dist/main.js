(()=>{function n(){document.querySelector("#content").innerHTML='\n    <header>\n    <h1>Mozzarello</h1>\n    <ul>\n      <li>Home</li>\n      <li>Menu</li>\n      <li>Contact</li>\n    </ul>\n  </header>\n  \n  <section>\n    <p>Best Pizza in the Town</p>\n    <p>Made with special recipe since 1111</p>\n    <img src="images/chef.jfif" alt="restaurantBannerImage" />\n    <p>order online or visit us!</p>\n  </section>\n  \n  <footer>\n  <span\n    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &\n    <a href="https://github.com/SayyidMuhammad878"\n      >Sayyid Muhammad A</a\n    ></span\n  >\n</footer>\n    ',e()}function e(){document.querySelectorAll("header > ul li").forEach((a=>{a.addEventListener("click",(()=>{var l;"Home"===(l=a.innerHTML)?n():"Menu"===l?(document.querySelector("#content").innerHTML='\n    <header>\n    <h1>Mozzarello</h1>\n    <ul>\n      <li>Home</li>\n      <li>Menu</li>\n      <li>Contact</li>\n    </ul>\n  </header>\n  \n  \n  <section id="menu">\n    <ul>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n      <li>\n        <img src="images/salsabil.png" alt="Salsabil Image" />\n        <h2>Salsabil</h2>\n        <p>Lorem, ipsum dolor sit amet consectetur.</p>\n      </li>\n    </ul>\n  </section>\n  \n  <footer>\n  <span\n    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &\n    <a href="https://github.com/SayyidMuhammad878"\n      >Sayyid Muhammad A</a\n    ></span\n  >\n</footer>\n    ',e()):"Contact"===l&&(document.querySelector("#content").innerHTML='\n  <header>\n  <h1>Mozzarello</h1>\n  <ul>\n    <li>Home</li>\n    <li>Menu</li>\n    <li>Contact</li>\n  </ul>\n</header>\n  <section class="contact">\n    <h2>Contact Form</h2>\n    <form class="contactForm" method="get">\n    <div>\n    <label for="firstName">First Name:</label>\n    <input\n      type="text"\n      name="firstName"\n      id="firstName"\n      placeholder="First Name.."\n    />\n  </div>\n  <div>\n    <label for="lastName">Last Name:</label>\n    <input\n      type="text"\n      name="lastName"\n      id="lastName"\n      placeholder="Last Name.."\n    />\n  </div>\n  <div>\n    <label for="email">Email:</label>\n    <input type="email" name="email" id="email" placeholder="Email.." />\n  </div>\n  <div>\n    <label for="message">Your message:</label>\n    <textarea\n      name="message"\n      id="message"\n      cols="50"\n      rows="20"\n      placeholder="Message..."\n    ></textarea>\n  </div>\n      <button type="submit">Send</button>\n    </form>\n  </section>\n  \n  <footer>\n  <span\n    >Copyright @ 2022 <a href="https://github.com/NJ-2020">Novell</a> &\n    <a href="https://github.com/SayyidMuhammad878"\n      >Sayyid Muhammad A</a\n    ></span\n  >\n</footer>\n    ',e())}))}))}n()})();