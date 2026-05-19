// Global Mobile Menu Toggle matching modern layout states
function toggleMobileMenu() {
  const mobileDrawerNode = document.getElementById("mobile-menu-container");
  if (mobileDrawerNode) {
    mobileDrawerNode.classList.toggle("hidden");
  }
}

// Optimized High-Performance Safe String Clipboard Actions Core
function copyTags(btnReference = null) {
  let textPayload = "";
  let targetActionElement = btnReference;

  try {
    // Check if target copy operations are scoped to an independent inner card block
    if (btnReference && btnReference.id !== "copyBtn") {
      const cardWrapperNode = btnReference.closest(".bg-white") || btnReference.closest(".rounded-2xl");
      if (cardWrapperNode) {
        // Targets active runtime compiled tokens grids safely
        const flexTagsContainer = cardWrapperNode.querySelector(".flex-wrap") || cardWrapperNode.querySelector("[id$='Tags']");
        textPayload = flexTagsContainer ? flexTagsContainer.innerText.trim() : "";
      }
    } else {
      // Fallback target routing execution straight to global input canvas nodes
      const globalOutputNode = document.getElementById("tag-container") || document.getElementById("allTagsText");
      textPayload = globalOutputNode ? (globalOutputNode.value || globalOutputNode.innerText).trim() : "";
      targetActionElement = document.getElementById("copyBtn") || btnReference;
    }

    if (!textPayload) return;

    // Execute absolute native text allocation strings capture
    navigator.clipboard.writeText(textPayload).then(() => {
      if (!targetActionElement) return;

      const dynamicSavedLabel = targetActionElement.innerHTML;
      targetActionElement.innerHTML = "Copied Data! ✓";

      // Execute stable style shifts that comply uniformly with standard tokens systems
      targetActionElement.style.backgroundColor = "#10B981";
      targetActionElement.style.color = "#FFFFFF";

      setTimeout(() => {
        targetActionElement.innerHTML = dynamicSavedLabel;
        targetActionElement.style.backgroundColor = "";
        targetActionElement.style.color = "";
      }, 1500);
    });

  } catch (matrixAnomaly) {
    console.error("System structural clipboard allocation block tracking: ", matrixAnomaly);
  }
}