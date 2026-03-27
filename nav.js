// nav.js — shared navigation and footer for all pages
// Injects navbar and footer, highlights active page link

(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="logo">Ajanta <span>Yoga</span> Academy</a>
      <button class="nav-toggle" aria-label="Toggle navigation" onclick="document.querySelector('.nav-links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="index.html"     ${currentPage==='index.html'?'class="active"':''}>Home</a></li>
        <li><a href="about.html"     ${currentPage==='about.html'?'class="active"':''}>About</a></li>
        <li><a href="philosophy.html"${currentPage==='philosophy.html'?'class="active"':''}>Philosophy</a></li>
        <li><a href="courses.html"   ${currentPage==='courses.html'?'class="active"':''}>Courses</a></li>
        <li><a href="pranayama.html" ${currentPage==='pranayama.html'?'class="active"':''}>Pranayama</a></li>
        <li><a href="blog.html"      ${currentPage==='blog.html'?'class="active"':''}>Articles</a></li>
        <li><a href="contact.html"   class="nav-cta ${currentPage==='contact.html'?'active':''}">Enrol</a></li>
      </ul>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo">Ajanta <span>Yoga</span> Academy</div>
          <p>Yoga as philosophy and lifestyle. A welcoming space for practitioners of all abilities, including those navigating injury or health conditions.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="philosophy.html">Philosophy</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="pranayama.html">Pranayama Library</a></li>
            <li><a href="blog.html">Articles</a></li>
            <li><a href="contact.html">Enrol</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="contact.html">Send a message</a></li>
            <li><a href="mailto:hello@ajantayoga.com">hello@ajantayoga.com</a></li>
          </ul>
          <h4 style="margin-top:1.5rem">Approach</h4>
          <ul>
            <li><a href="philosophy.html">Our Philosophy</a></li>
            <li><a href="courses.html#adaptive">Adaptive Yoga</a></li>
            <li><a href="pranayama.html">Pranayama Practice</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 Ajanta Yoga Academy. All rights reserved.</span>
        <span>Built with care &amp; intention.</span>
      </div>
    </div>
  </footer>`;

  // Inject
  const navTarget = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget) navTarget.innerHTML = navHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;
})();
