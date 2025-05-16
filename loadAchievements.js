document.addEventListener('DOMContentLoaded', function() {
    // Sample achievements data (replace this with your actual data or fetch from server)
    const achievements = [
        {
            id: 1,
            title: "Android Developer Intern",
            organization: "TechFusion Labs",
            date: "Jan 2024 - Apr 2024",
            description: "Developed and maintained Android applications using Kotlin and Jetpack Compose. Implemented MVVM architecture and integrated Firebase services.",
            icon: "fas fa-briefcase",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"],
            image: "res/android.png"
        },
        {
            id: 2,
            title: "Google Associate Android Developer",
            organization: "Google Developers",
            date: "November 2023",
            description: "Certified for demonstrating proficiency in Android development with Kotlin, including UI implementation, data management, and debugging.",
            icon: "fas fa-certificate",
            tags: ["Android", "Kotlin", "Certification"]
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
        `;
        
        achievementsContainer.appendChild(achievementCard);
    });
});