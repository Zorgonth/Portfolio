
document.addEventListener('DOMContentLoaded', function() {
  const username = "Zorgonth";
  const token = process.env.GITHUBTOKEN;
  fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(repos => {
    repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
    const projectsContainer = document.getElementById('projects-container');
    let currentOpenCard = null;
  
    const readmePromises = repos.map(repo => {
      if (repo.name.toLowerCase() === username.toLowerCase()) {
        return null;
      }
  
      return fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
        headers: {
          Authorization: `token ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching README for ${repo.name}: ${response.status}`);
        }
        return response.json();
      })
      .then(readme => {
        const readmeContent = atob(readme.content);
  
        let description = readmeContent;
        if (repo.name === "auto_scrolling") {
          description = readmeContent
            .split('\n')
            .filter(line => line.trim() !== '')
            .slice(0, 2)
            .join(' ');
        } else if (repo.name === "Push_Swap") {
          description = readmeContent
            .split('\n')
            .filter(line => line.trim() !== '')
            .slice(1, 12)
            .join('<br>');
        } else if (repo.name === "Printf") {
          description = readmeContent
            .split('\n')
            .filter(line => line.trim() !== '')
            .slice(1, 8)
            .join('<br>');
        } else if (repo.name === "Inception") {
          description = readmeContent
          .split('\n')
          .filter(line => line.trim() !== '')
          .slice(12, 14)
          .join('<br')
        } else {
          description = readmeContent
            .split('\n')
            .filter(line => line.trim() !== '')
            .slice(1, 2)
            .join(' ');
        }
        return { repo, description };
      })
      .catch(error => {
        console.error(error);
        return null;
      });
    });
    Promise.all(readmePromises).then(projects => {
      projects.forEach(project => {
        if (project) {
          const { repo, description } = project;
    
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
    
          projectCard.addEventListener('click', (event) => {
            if (!event.target.classList.contains('project-title')) {
              const descriptionElement = projectCard.querySelector('.project-description');
              const isOpen = descriptionElement.classList.contains('show');
    
              if (currentOpenCard && currentOpenCard !== projectCard) {
                const currentDescriptionElement = currentOpenCard.querySelector('.project-description');
                currentDescriptionElement.classList.remove('show');
              }
    
              if (!isOpen) {
                descriptionElement.classList.add('show');
                currentOpenCard = projectCard;
              } else {
                descriptionElement.classList.remove('show');
                currentOpenCard = null;
              }
            }
          });
    
          projectCard.innerHTML = `
            <div class="project-header">
              <a class="project-title" href="${repo.html_url}" target="_blank" title="View on GitHub">${repo.name}</a>
            </div>
            <p class="project-description">${description || 'No description available'}</p>
          `;
    
          projectsContainer.appendChild(projectCard);
        }
      });
    });
    })
    .catch(error => {
    console.error('Error fetching repositories:', error);
    });

});



const navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const apiKey = process.env.APIKEY; 
    emailjs.init(apiKey);
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        subject: subject,
        message: message,
    };

    emailjs.send(process.env.SERVICEKEY, process.env.TEMPLATEKEY, templateParams) 
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('contactForm').reset();
            $('#contactModal').modal('hide');
        }, function (error) {
            console.error('FAILED...', error);
            alert('Error sending the message. Please try again later.');
        });
});

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

window.onload = function() {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
        document.body.style.overflowY = 'auto';
    }, 100);
};
