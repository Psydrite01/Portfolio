fetch('playstoreproject.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('playstoreprojectGrid');
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

      const playstoreLinkHTML = project.playstoreLink
        ? `<a href="${project.playstoreLink}" target="_blank" rel="noopener">View on Play Store</a><br>`
        : '';

      const githubLinkHTML = project.githubLink
        ? `<a href="${project.githubLink}" target="_blank" rel="noopener">View on GitHub</a>`
        : '';

      const cardHTML = `
  <div class="project-card">
    <div class="project-image">
      <img src="res/${project.image}" alt="Project Image" />
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.subtitle}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">${techTags}</div>
      <div class="project-features">${featureList}</div>
      <div class="project-link-row">
        ${playstoreLinkHTML}
        ${githubLinkHTML}
      </div>
    </div>
  </div>
`;


      container.innerHTML += cardHTML;
    });
    // Add the spacer after all projects are displayed
    const spacerHTML = `<div class="spacer">
    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    </div>`;
    container.innerHTML += spacerHTML;
  })
  .catch(error => {
    console.error("Failed to load project data:", error);
  });
