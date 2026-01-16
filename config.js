const params = new URLSearchParams(window.location.search);
const businessKey = params.get("name");

// ALL BUSINESS DATA
const businesses = {
  sadaf: {
    name: "Hotel Sadaf",
    tagline: "Comfortable stay near Dal Lake",
    address:
      "45, Samander Bagh, SP College Road, Regal Chowk, Srinagar, Jammu & Kashmir 190001",
    phone: "911942457490",
  },

  curios: {
    name: "Hotel Curio's Srinagar",
    tagline: "A peaceful stay in the heart of Srinagar",
    address: "Ex-Change Road, Barbar Shah, Srinagar, Jammu & Kashmir 190001",
    phone: "918899922587",
  },

  ajaz: {
    name: "Hotel Ajaz",
    tagline: "Comfort and convenience near Dal Gate",
    address:
      "Khona Khan, New Road, Dalgate Bridge, Srinagar, Jammu & Kashmir 190001",
    phone: "917006951267",
  },

  heevan: {
    name: "Hotel Heevan & Restaurant",
    tagline: "Premium stay with dining experience",
    address: "Old Zero Bridge, Rajbagh, Srinagar, Jammu & Kashmir 190001",
    phone: "911942476233",
  },

  shamas: {
    name: "The Shamas Residency",
    tagline: "Elegant stay in Sonwar Bagh",
    address:
      "R City Square Main Market, Banumsar, Sonwar Bagh, Srinagar, Jammu & Kashmir 190004",
    phone: "919797671553",
  },
};

const data = businesses[businessKey] || {
  name: "Your Business Name",
  tagline: "Your business tagline here",
  address: "Your address here",
  phone: "910000000000",
};

const nameEls = document.querySelectorAll(".business-name");
const taglineEls = document.querySelectorAll(".business-tagline");
const addressEls = document.querySelectorAll(".business-address");
const phoneEls = document.querySelectorAll(".business-phone");

nameEls.forEach((el) => (el.textContent = data.name));
taglineEls.forEach((el) => (el.textContent = data.tagline));
addressEls.forEach((el) => (el.textContent = data.address));

phoneEls.forEach((el) => {
  el.textContent = data.phone;
  el.href = `tel:${data.phone}`;
});

// Page title
document.title = data.name;
