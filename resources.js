const teacherResources = [
    { 
        name: "TeachersPayTeachers", 
        link: "https://www.teacherspayteachers.com", 
        description: " Discover, share, and sell innovative resources tailored to inspire unique teaching and learning experiences.",
    },
    { 
        name: "Khan Academy", 
        link: "https://www.khanacademy.org", 
        description: "Free online lessons and practice exercises for students.",
        icon: "" 
    },
    { 
        name: "PBS Learning Media", 
        link: "https://www.pbslearningmedia.org", 
        description: "Educational videos and interactive activities from PBS.",
        icon: "" 
    },
    { 
        name: "Edmodo", 
        link: "https://www.edmodo.com", 
        description: "A platform for classroom collaboration and communication.",
        icon: "" 
    }
];

function displayResources() {
    const resourcesContainer = document.getElementById("resources-container");

    if (resourcesContainer) {
        teacherResources.forEach(resource => {
            // Create a card for each resource
            const card = document.createElement("div");
            card.classList.add("resource-card");


            const icon = document.createElement("img");
            icon.src = resource.icon;
            icon.alt = `${resource.name} Icon`;
            card.appendChild(icon);

       
            const title = document.createElement("h3");
            title.textContent = resource.name;
            card.appendChild(title);

           
            const description = document.createElement("p");
            description.textContent = resource.description;
            card.appendChild(description);

        
            const link = document.createElement("a");
            link.href = resource.link;
            link.textContent = "Visit Resource";
            link.target = "_blank";
            link.classList.add("resource-link");
            card.appendChild(link);

          
            resourcesContainer.appendChild(card);
        });
    }
}
