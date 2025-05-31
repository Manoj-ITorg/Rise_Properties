const properties = [
  {
    image: "property-1.jpg",
    title: "Manoj Apartment in City Center",
    description: "2 bed, 2 bath, close to metro and shopping.",
    contact: "agent1@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Cozy Suburban Home",
    description: "3 bed, 2 bath, large backyard.",
    contact: "agent2@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Luxury Villa with Sea View",
    description: "4 bed, 3 bath, private pool.",
    contact: "agent3@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Downtown Studio Apartment",
    description: "1 bed, 1 bath, close to nightlife.",
    contact: "agent4@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Suburban Family Home",
    description: "3 bed, 2 bath, quiet neighborhood.",
    contact: "agent5@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Penthouse Suite",
    description: "3 bed, 3 bath, city skyline view.",
    contact: "agent6@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Country Cottage",
    description: "2 bed, 1 bath, large garden.",
    contact: "agent7@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Beachfront Condo",
    description: "2 bed, 2 bath, ocean view.",
    contact: "agent8@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Mountain Cabin",
    description: "3 bed, 2 bath, scenic views.",
    contact: "agent9@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Urban Loft",
    description: "2 bed, 2 bath, modern design.",
    contact: "agent10@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Historic Townhouse",
    description: "4 bed, 3 bath, charming architecture.",
    contact: "agent11@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Rural Farmhouse",
    description: "3 bed, 2 bath, acres of land.",
    contact: "agent12@example.com"
  },
  {
    image: "property-1.jpg",
    title: "City Center Condo",
    description: "1 bed, 1 bath, close to amenities.",
    contact: "agent13@example.com"
  },
  {
    image:"property-2.jpg",
    title: "Suburban Duplex",
    description: "3 bed, 2 bath, shared yard.",
    contact: "agent14@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Luxury Penthouse",
    description: "4 bed, 4 bath, rooftop terrace.",
    contact: "agent15@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Coastal Retreat",
    description: "3 bed, 2 bath, beach access.",
    contact: "agent16@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Downtown Loft",
    description: "2 bed, 2 bath, industrial design.",
    contact: "agent17@example.com"
  },
  {
    image:"property-2.jpg",
    title: "Suburban Ranch",
    description: "3 bed, 2 bath, large lot.",
    contact: "agent18@example.com"
  },
  {
    image: "property-1.jpg",
    title: "Modern Condo",
    description: "2 bed, 2 bath, city views.",
    contact: "agent19@example.com"
  },
  {
    image: "property-2.jpg",
    title: "Country Estate",
    description: "5 bed, 4 bath, expansive grounds.",
    contact: "agent20@example.com"
  }
];

const container = document.getElementById("property-list");

properties.forEach(prop => {
  const div = document.createElement("div");
  div.className = "property";
  div.innerHTML = `
    <img src="${prop.image}" alt="${prop.title}" />
    <div class="property-details">
      <h2>${prop.title}</h2>
      <p>${prop.description}</p>
      <p><strong>Contact:</strong> ${prop.contact}</p>
    </div>
  `;
  container.appendChild(div);
});
