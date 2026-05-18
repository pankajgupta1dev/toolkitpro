  function toggleMobileMenu() {
        const mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu) {
          mobileMenu.classList.toggle("active");
        }
      }

      // Robust Copy Tags Logic for Main Container and Cards
      function copyTags(btn = null) {
        let tags;
        let targetBtn = btn;

        // 👉 Agar kisi card ka copy button click hua hai
        if (btn && btn.id !== "copyBtn") {
          const card = btn.closest(".bg-white");
          tags = card.querySelector(".flex.flex-wrap").innerText;
        } 
        // 👉 Agar top main box ka button click hua hai
        else {
          tags = document.getElementById("tag-container").innerText;
          targetBtn = document.getElementById("copyBtn");
        }

        navigator.clipboard.writeText(tags).then(() => {
          const originalText = targetBtn.innerHTML;
          targetBtn.innerHTML = "Copied! ✅";
          
          // Tailwind color transition feedback
          targetBtn.classList.replace("bg-blue-600", "bg-green-600");
          targetBtn.classList.replace("hover:bg-blue-700", "hover:bg-green-700");

          setTimeout(() => {
            targetBtn.innerHTML = originalText;
            targetBtn.classList.replace("bg-green-600", "bg-blue-600");
            targetBtn.classList.replace("hover:bg-green-700", "hover:bg-blue-700");
          }, 1500);
        }).catch(err => console.error("Copy failed: ", err));
      }