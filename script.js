// Menu Data
const menuData = {
    starters: [
        { name: 'Paneer Tikka', price: 280, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format', description: 'Marinated cottage cheese grilled to perfection with mint chutney' },
        { name: 'Samosa Chaat', price: 180, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format', description: 'Crispy samosas topped with yogurt, chutneys, and sev' },
        { name: 'Tandoori Chicken', price: 320, image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&auto=format', description: 'Succulent chicken marinated in yogurt and spices, tandoor-cooked' },
        { name: 'Veg Pakora', price: 150, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format', description: 'Crispy fritters with mixed vegetables and aromatic spices' },
        { name: 'Chicken 65', price: 280, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format', description: 'Spicy deep-fried chicken with curry leaves and green chilies' },
        { name: 'Hara Bhara Kabab', price: 220, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format', description: 'Spinach and green peas patties with Indian spices' }
    ],
    mains: [
        { name: 'Butter Chicken', price: 420, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format', description: 'Creamy tomato curry with tender chicken pieces and aromatic spices' },
        { name: 'Biryani (Chicken/Veg)', price: 380, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format', description: 'Fragrant basmati rice layered with marinated meat/vegetables' },
        { name: 'Paneer Butter Masala', price: 350, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format', description: 'Cottage cheese in rich tomato and cashew gravy' },
        { name: 'Dal Makhani', price: 280, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format', description: 'Slow-cooked black lentils with butter and cream' },
        { name: 'Rogan Josh', price: 480, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format', description: 'Aromatic lamb curry with Kashmiri spices and yogurt' },
        { name: 'Chole Bhature', price: 250, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&auto=format', description: 'Spicy chickpea curry with fluffy deep-fried bread' }
    ],
    desserts: [
        { name: 'Gulab Jamun', price: 120, image: 'https://images.unsplash.com/photo-1589301773859-cb96f514b4e0?w=400&auto=format', description: 'Soft milk dumplings soaked in rose-flavored sugar syrup' },
        { name: 'Rasmalai', price: 150, image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&auto=format', description: 'Cottage cheese patties in sweetened, thickened milk with saffron' },
        { name: 'Kulfi Falooda', price: 140, image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83d6c4f?w=400&auto=format', description: 'Traditional Indian ice cream with vermicelli and rose syrup' },
        { name: 'Gajar Halwa', price: 130, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format', description: 'Warm carrot pudding with ghee, milk, and dry fruits' }
    ],
    drinks: [
        { name: 'Mango Lassi', price: 120, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&auto=format', description: 'Creamy yogurt drink blended with fresh mango pulp' },
        { name: 'Masala Chai', price: 60, image: 'https://images.unsplash.com/photo-1597318130878-aa1caa81e00a?w=400&auto=format', description: 'Traditional Indian spiced tea with cardamom and ginger' },
        { name: 'Fresh Lime Soda', price: 80, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format', description: 'Refreshing lime juice with soda and mint' },
        { name: 'Thandai', price: 150, image: 'https://images.unsplash.com/photo-1589301773859-cb96f514b4e0?w=400&auto=format', description: 'Cooling milk drink with almonds, saffron, and spices' }
    ]
};

// Events Data
const eventsData = [
    { title: 'Live Jazz Night', date: 'Every Friday', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400', description: 'Immerse in smooth jazz while savoring our tasting menu' },
    { title: 'Wine Pairing Soirée', date: 'First Saturday', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', description: 'A curated journey through rare vintages and fine courses' },
    { title: "Chef's Table Experience", date: 'By Reservation', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', description: 'Intimate seating with the chef crafting bespoke dishes' },
    { title: 'Sunday Brunch', date: 'Every Sunday', image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400', description: 'Unlimited mimosas and gourmet brunch selections' }
];

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// Render Menu Items
function renderMenu(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = menuData[category].map(item => `
        <div class="menu-card" onclick="orderItem('${item.name}', ${item.price})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300/1e293b/f59e0b?text=Delicious+Dish'">
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="price">₹${item.price}</span>
                </div>
                <p>${item.description}</p>
                <button class="order-btn" onclick="event.stopPropagation(); orderItem('${item.name}', ${item.price})">
                    <i class="fas fa-shopping-cart"></i> Order Now
                </button>
            </div>
        </div>
    `).join('');
}

// Order Item Function
function orderItem(itemName, price) {
    localStorage.setItem('orderItem', JSON.stringify({ name: itemName, price: price }));
    window.location.href = 'order.html';
}

// Initialize Menu
renderMenu('starters', 'startersGrid');
renderMenu('mains', 'mainsGrid');
renderMenu('desserts', 'dessertsGrid');
renderMenu('drinks', 'drinksGrid');

// Menu Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const menuContents = document.querySelectorAll('.menu-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Render Events
function renderEvents() {
    const container = document.getElementById('eventsGrid');
    container.innerHTML = eventsData.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" onerror="this.src='https://via.placeholder.com/400x300/1e293b/f59e0b?text=Event'">
            <div class="event-card-content">
                <div class="event-date">${event.date}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

renderEvents();

// Reservation Form
const reservationForm = document.getElementById('reservationForm');
const formMessage = document.getElementById('formMessage');

reservationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Send to backend
        const response = await fetch('http://localhost:5000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Reservation confirmed! We will send you a confirmation email shortly.';
            reservationForm.reset();
        } else {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Failed to create reservation. Please try again.';
        }
    } catch (error) {
        // Fallback if backend is not running
        console.log('Reservation Data:', data);
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Reservation confirmed! (Backend not connected)';
        reservationForm.reset();
    }
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Set minimum date for reservation
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

console.log('Delicious Bites Restaurant Website Loaded Successfully!');
