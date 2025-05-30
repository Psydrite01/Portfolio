fetch('testimonials.json')
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('testimonialContainer');
    if (!container) return;

    // Clear previous testimonials, if any
    container.innerHTML = '';

    data.testimonials.forEach(t => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      
      // Create card content
      card.innerHTML = `
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="author-name">~ ${t.author.name}</div>
          <div class="author-role">${t.author.role}</div>
          <br>
          <div class="author-company">${t.author.company}</div>
          <div class="author-company">${t.author.time}</div>
        </div>
      `;
      
      // Ensure display is set correctly
      card.style.display = 'block'; // Make sure it's visible

      // Append card to container
      container.appendChild(card);
    });
    // Add the spacer after all projects are displayed
    const spacerHTML = `<div class="spacer">
    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    </div>`;
    container.innerHTML += spacerHTML;
  })
  .catch(error => {
    console.error("Failed to load testimonials:", error);
  });
