fetch('clientproject.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projectGrid');
    data.forEach(project => {
      const techTags = project.technologies.map(tech => {
        const extraClass = tech === "Jetpack Compose" ? 'purple' : '';
        return `<span class="tag ${extraClass}">${tech}</span>`;
      }).join('');

      const featureList = project.features.map(feature => `
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <p>${feature}</p>
        </div>
      `).join('');

      const cardHTML = `
        <div class="project-card">
          <div class="project-image">
            <img src="res/${project.image}" alt="Project Image" onerror="this.src='/res/default.jpg'" />
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.subtitle}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${techTags}</div>
            <div class="project-features">${featureList}</div>
            ${project.playstoreLink ? `
              <div class="project-link">
                <br>
                <a href="${project.playstoreLink}" target="_blank" rel="noopener">View on Play Store</a>
              </div>` : ''}
          </div>
        </div>
      `;

      container.innerHTML += cardHTML;
    });
  })
  .catch(error => {
    console.error("Failed to load client project data:", error);
  });
