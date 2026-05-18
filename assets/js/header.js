
      document.addEventListener("DOMContentLoaded", function () {
        // 1. Header Load Logic
        const headerComponent = document.getElementById("global-header");
        if (headerComponent) {
          fetch('/assets/header.html')
            .then(response => {
              if (!response.ok) throw new Error('Header file nahi mili');
              return response.text();
            })
            .then(data => {
              headerComponent.innerHTML = data;
              updateDomainReferences(); // Header load hone ke baad domain update karein
            })
            .catch(error => console.error('Header load error:', error));
        }

        // 2. Footer Load Logic
        const footerComponent = document.getElementById("global-footer");
        if (footerComponent) {
          fetch('/assets/footer.html')
            .then(response => {
              if (!response.ok) throw new Error('Footer file nahi mili');
              return response.text();
            })
            .then(data => {
              footerComponent.innerHTML = data;
              updateDomainReferences(); // Footer load hone ke baad domain update karein
            })
            .catch(error => console.error('Footer load error:', error));
        }
      });

      // Automatically update logo text and copyright domain based on hostname
      function updateDomainReferences() {
        const currentDomain = window.location.hostname.replace("www.", "") || "Tolzo.site";
        const domainElements = ["header-logo", "footer-logo", "copyright-domain"];

        domainElements.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            element.textContent = currentDomain;
          }
        });
      }

      // Mobile Menu Toggle matching common styles
    
    