
      // document.addEventListener("DOMContentLoaded", function () {
      //   // 1. Header Load Logic
      //   const headerComponent = document.getElementById("global-header");
      //   if (headerComponent) {
      //     fetch('/assets/header.html')
      //       .then(response => {
      //         if (!response.ok) throw new Error('Header file nahi mili');
      //         return response.text();
      //       })
      //       .then(data => {
      //         headerComponent.innerHTML = data;
      //         updateDomainReferences(); // Header load hone ke baad domain update karein
      //       })
      //       .catch(error => console.error('Header load error:', error));
      //   }

      //   // 2. Footer Load Logic
      //   const footerComponent = document.getElementById("global-footer");
      //   if (footerComponent) {
      //     fetch('/assets/footer.html')
      //       .then(response => {
      //         if (!response.ok) throw new Error('Footer file nahi mili');
      //         return response.text();
      //       })
      //       .then(data => {
      //         footerComponent.innerHTML = data;
      //         updateDomainReferences(); // Footer load hone ke baad domain update karein
      //       })
      //       .catch(error => console.error('Footer load error:', error));
      //   }
      // });

      // // Automatically update logo text and copyright domain based on hostname
      // function updateDomainReferences() {
      //   const currentDomain = window.location.hostname.replace("www.", "") || "toolkitpro.tools";
      //   const domainElements = ["header-logo", "footer-logo", "copyright-domain"];

      //   domainElements.forEach((id) => {
      //     const element = document.getElementById(id);
      //     if (element) {
      //       element.textContent = currentDomain;
      //     }
      //   });
      // }

      // // Mobile Menu Toggle matching common styles
    
    document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Asynchronous Header Injection
  const headerComponent = document.getElementById("global-header");
  if (headerComponent) {
    fetch('/assets/header.html')
      .then(response => {
        if (!response.ok) throw new Error('System Component Routing: Header network asset down.');
        return response.text();
      })
      .then(data => {
        headerComponent.innerHTML = data;
        updateDomainReferences(); // Fires domain references rewrite loop post dynamic rendering
      })
      .catch(error => console.error('Interface loader anomaly tracking:', error));
  }

  // 2. Dynamic Asynchronous Footer Injection
  const footerComponent = document.getElementById("global-footer");
  if (footerComponent) {
    fetch('/assets/footer.html')
      .then(response => {
        if (!response.ok) throw new Error('System Component Routing: Footer network asset down.');
        return response.text();
      })
      .then(data => {
        footerComponent.innerHTML = data;
        updateDomainReferences();
      })
      .catch(error => console.error('Interface loader anomaly tracking:', error));
  }
});

// Hostname parser tracking active server environments dynamically
function updateDomainReferences() {
  const currentDomain = window.location.hostname.replace("www.", "") || "toolkitpro.tools";
  const operationalIdentityNodes = ["header-logo", "footer-logo", "copyright-domain"];

  operationalIdentityNodes.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = currentDomain;
    }
  });
}

// Fixed Mobile Dropdown Drawer Toggle Logic Function
function toggleMobileMenu() {
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  if (mobileMenuContainer) {
    // Explicitly uses Tailwind v4 native toggles to prevent CSS rules clash
    mobileMenuContainer.classList.toggle("hidden");
  }
}