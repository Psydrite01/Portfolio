document.addEventListener('DOMContentLoaded', function() {
    // Sample achievements data (replace this with your actual data or fetch from server)
    const achievements = [
        {
            id: 1,
            title: "Android Development Certification",
            organization: "Udemy",
            date: "May 2025",
            description: "The Complete Android 14 & Kotlin Development Masterclass certificate by Udemy",
            icon: "fas fa-certificate",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"],
            image: "res/udemyandroidmasterclass.png",
            link: "https://www.linkedin.com/posts/prudam-dutta-7b85682a7_udemy-course-completion-certificate-activity-7329193063669485571-h9Ld?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnxjHwBnqhE5JW-r5SddeXd6u74u2Al5c4"
        },
        {id: 1,
            title: "Android Developmentgsdfgdsgfdgdg Certification",
            organization: "Udemy",
            date: "May 2025",
            description: "The Complete Andrdfsssssssssssss gdfgd gfdggdf dgdsfgfdgds dgdfsgdsgsdfg dfsgfdgdfg dfg fdgdfsg fdsg fdgfgd fdg fdgfdg fd fgfdgs ssssssssssssssssssssssssg fdgfdsgsfdgfdsgd dfgsdoid 14 & Kotlin Development Masterclass certificate by Udemy",
            icon: "fas fa-certificate",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"],
            image: "res/habify.png"
        },
        {
            id: 3,
            title: "UI/UX Design Specialist",
            organization: "DesignHub",
            date: "May 2023 - Aug 2023",
            description: "Created intuitive user interfaces and experiences for mobile applications. Specialized in material design principles and user-centric design.",
            icon: "fas fa-palette",
            tags: ["UI/UX", "Material Design", "Figma"]
        },
        {
            id: 4,
            title: "Firebase Expert Certification",
            organization: "Google Cloud",
            date: "July 2023",
            description: "Recognized for expertise in implementing Firebase services, including Authentication, Firestore, and Cloud Functions in Android applications.",
            icon: "fas fa-fire",
            tags: ["Firebase", "Cloud", "Authentication"]
        }
    ];

    const achievementsContainer = document.getElementById('achievementsContainer');

    // Add achievement cards
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        
        // Create tags HTML
        const tagsHTML = achievement.tags.map(tag => 
            `<div class="tag">${tag}</div>`
        ).join('');

        const linkHTML = achievement.link
        ? `<a href="${achievement.link}" target="_blank" rel="noopener">View</a>`
        : '';
        
        
        achievementCard.innerHTML = `
            <div class="achievement-image">
                <img src="${achievement.image}" alt="${achievement.title}" class="achievement-img">
            </div>
            <div class="achievement-header">
                <div class="achievement-icon">
                    <i class="${achievement.icon}"></i>
                </div>
                <div>
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <div class="achievement-org">${achievement.organization}</div>
                </div>
            </div>
            <div class="achievement-date">${achievement.date}</div>
            <p class="achievement-description">${achievement.description}</p>
            <div class="achievement-tags">
                ${tagsHTML}
            </div>
            <div class="project-link-row">
        ${linkHTML}
      </div>
        `;
        
        achievementsContainer.appendChild(achievementCard);
        
    });
    // Add the spacer after all projects are displayed
    const spacerHTML = `<div class="spacer">
    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    </div>`;
    achievementsContainer.innerHTML += spacerHTML;
});