// JavaScript Functionality

// Modal functionality
const modal = document.getElementById("modal")
const modalBody = document.getElementById("modal-body")
const closeBtn = document.getElementsByClassName("close")[0]
const notification = document.getElementById("notification")
const notificationText = document.getElementById("notification-text")

// Product details data
const productDetails = {
  "Microsoft 365": {
    title: "Microsoft 365",
    description:
      "Get premium versions of Word, Excel, PowerPoint, and more with cloud storage and AI-powered features.",
    features: [
      "Premium Office apps",
      "OneDrive cloud storage",
      "Microsoft Teams",
      "AI-powered Copilot",
      "Advanced security features",
      "Cross-platform compatibility",
    ],
    price: "Starting at $6.99/month",
  },
  OneDrive: {
    title: "Microsoft OneDrive",
    description: "Save your files and photos to OneDrive and access them from any device, anywhere.",
    features: [
      "5 GB free storage",
      "Secure file sharing",
      "Automatic backup",
      "Integration with Office apps",
      "Advanced search capabilities",
      "File recovery options",
    ],
    price: "Free with premium plans available",
  },
  "Windows 11": {
    title: "Windows 11",
    description: "The most secure and productive Windows ever, designed for hybrid work.",
    features: [
      "Enhanced security",
      "Microsoft Teams integration",
      "New Start menu",
      "Snap layouts",
      "Voice typing",
      "Microsoft Store",
    ],
    price: "Free upgrade for eligible devices",
  },
  "Surface Devices": {
    title: "Surface Devices",
    description: "Premium laptops and tablets designed for professionals and creators.",
    features: [
      "Touchscreen displays",
      "All-day battery life",
      "Surface Pen support",
      "Premium build quality",
      "Windows 11 Pro",
      "Studio-quality cameras",
    ],
    price: "Starting at $999",
  },
}

// Show modal function
function showModal(content) {
  modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="color: var(--nvidia-green); margin-bottom: 20px;">Microsoft Updates</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #333;">${content}</p>
            <button onclick="closeModal()" style="background: var(--nvidia-green); color: white; border: none; padding: 10px 20px; border-radius: 4px; margin-top: 20px; cursor: pointer;">Got it!</button>
        </div>
    `
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Show product details
function showProductDetails(productName) {
  const product = productDetails[productName]
  if (product) {
    const featuresHTML = product.features.map((feature) => `<li>${feature}</li>`).join("")
    modalBody.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color: var(--nvidia-green); margin-bottom: 15px;">${product.title}</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 20px;">${product.description}</p>
                <h3 style="color: var(--nvidia-black); margin-bottom: 10px;">Key Features:</h3>
                <ul class="feature-list">${featuresHTML}</ul>
                <div class="price-tag">${product.price}</div>
                <div style="margin-top: 20px;">
                    <button onclick="showNotification('Added ${product.title} to your wishlist!')" style="background: var(--nvidia-green); color: white; border: none; padding: 12px 24px; border-radius: 4px; margin-right: 10px; cursor: pointer; font-weight: 600;">Add to Wishlist</button>
                    <button onclick="showNotification('Redirecting to ${product.title} page...')" style="background: transparent; color: var(--nvidia-green); border: 2px solid var(--nvidia-green); padding: 12px 24px; border-radius: 4px; cursor: pointer; font-weight: 600;">Learn More</button>
                </div>
            </div>
        `
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

// Close modal
function closeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Toggle search
function toggleSearch() {
  const searchContainer = document.getElementById("searchContainer")
  searchContainer.classList.toggle("active")
  if (searchContainer.classList.contains("active")) {
    searchContainer.querySelector(".search-input").focus()
  }
}

// Handle search
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value
    if (query.trim()) {
      showNotification(`Searching for "${query}"...`)
      event.target.value = ""
      toggleSearch()
    }
  }
}

// Show account modal
function showAccountModal() {
  modalBody.innerHTML = `
        <div style="padding: 20px;">
            <h2 style="color: var(--nvidia-green); margin-bottom: 20px;">Microsoft Account</h2>
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background: var(--nvidia-green); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">👤</div>
                <h3 style="margin-bottom: 5px;">Welcome to Microsoft</h3>
                <p style="color: #666;">Sign in to access your personalized experience</p>
            </div>
            <div style="margin-bottom: 20px;">
                <input type="email" placeholder="Email address" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 15px; font-size: 16px;">
                <input type="password" placeholder="Password" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 20px; font-size: 16px;">
            </div>
            <button onclick="showNotification('Sign in successful! Welcome back.')" style="width: 100%; background: var(--nvidia-green); color: white; border: none; padding: 15px; border-radius: 4px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 15px;">Sign In</button>
            <div style="text-align: center;">
                <a href="#" onclick="showNotification('Password reset link sent to your email!')" style="color: var(--nvidia-green); text-decoration: none; margin-right: 20px;">Forgot password?</a>
                <a href="#" onclick="showNotification('Redirecting to create account page...')" style="color: var(--nvidia-green); text-decoration: none;">Create account</a>
            </div>
        </div>
    `
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Show notification
function showNotification(message) {
  notificationText.textContent = message
  notification.classList.add("show")

  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Animate service
function animateService(element) {
  element.style.transform = "scale(1.05)"
  setTimeout(() => {
    element.style.transform = "scale(1)"
  }, 200)

  const title = element.querySelector("h3").textContent
  showNotification(`Learn more about ${title}`)
}

// Close modal when clicking outside
window.onclick = (event) => {
  if (event.target === modal) {
    closeModal()
  }
}

// Close modal with close button
if (closeBtn) {
  closeBtn.onclick = () => {
    closeModal()
  }
}

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal()
  }
})

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Carousel functionality
  const indicators = document.querySelectorAll(".indicator")
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      indicators.forEach((ind) => ind.classList.remove("active"))
      indicator.classList.add("active")
      // Here you would normally change the slide content
      showNotification(`Showing slide ${index + 1}`)
    })
  })
})
