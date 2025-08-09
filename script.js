// Product Data Object
const ProductData = {
    products: [
        {
            id: 1,
            name: "Elegant Summer Dress",
            price: 89.99,
            originalPrice: 129.99,
            category: "dresses",
            image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwf4a68105/images/July25/25thJuly25/WTOP25V50011_999_2.JPG?sw=1000&sh=1200",
            colors: [
                { name: "Pink", value: "#f8b589ff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwa4604434/images/July25/25thJuly25/WTOP25V50005_999_3.JPG?sw=1000&sh=1200" },
                { name: "Blue", value: "#754c17ff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw85543350/images/July25/25thJuly25/WTOP25V50006_999_2.JPG?sw=1000&sh=1200" },
                { name: "White", value: "#fdfcfcff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwa779c573/images/July25/WBTM25V50004_999_2.JPG?sw=1000&sh=1200" }
            ],
            rating: 4.8,
            reviews: 124,
            isNew: true,
            description: "Beautiful summer dress perfect for any occasion. Made with premium fabric for ultimate comfort."
        },
        {
            id: 2,
            name: "Casual Cotton Top",
            price: 45.99,
            originalPrice: 65.99,
            category: "tops",
            image: "https://images.meesho.com/images/products/531357415/zdegb_512.jpg",
            colors: [
                { name: "White", value: "#ffffff", image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/H44963.jpg?im=Resize,width=450" },
                { name: "Pink", value: "#a37114ff", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNokJO-DJQ08QLi8vS5IqXm8Ts21AEFS0cwWoGeIQYKoF5pt52syQAJI0aUEDH59920bo&usqp=CAU" },
                { name: "Black", value: "#1310caff", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSQB65aU7R584g8-1CyGkSJlB-7cuIA3AHREuumPTE9sdIStx05X4b1UASyogdstL5HM&usqp=CAU" }
            ],
            rating: 4.5,
            reviews: 89,
            isNew: false,
            description: "Comfortable cotton top that pairs well with any bottom. Soft and breathable fabric."
        },
        {
            id: 3,
            name: "Designer Blazer",
            price: 159.99,
            originalPrice: 199.99,
            category: "tops",
            image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwf40fcf5f/images/July25/WDNMS25V1015_999_2.JPG?sw=1000&sh=1200",
            colors: [
                { name: "Black", value: "#7a0d0dff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw6484e6dd/images/July25/WDNMS25V1003_999_2.JPG?sw=1000&sh=1200" },
                { name: "Navy", value: "#020211ff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw3325dfd4/images/July25/25thJuly25/WTOP25V50046_999_2.JPG?sw=1000&sh=1200" },
                { name: "Pink", value: "#ecd0deff", image: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dw96fd1aac/images/July25/WBTM25V50011_999_2.JPG?sw=1000&sh=1200" }
            ],
            rating: 4.9,
            reviews: 156,
            isNew: false,
            description: "Professional blazer perfect for business meetings and formal events. Tailored fit."
        },
        {
            id: 4,
            name: "High-Waist Jeans",
            price: 79.99,
            originalPrice: 99.99,
            category: "bottoms",
            image: "https://m.media-amazon.com/images/I/61pofxJB-nL._AC_US218_.jpg",
            colors: [
                { name: "Blue", value: "#4169e1", image: "https://ae-pic-a1.aliexpress-media.com/kf/S550b281413e54e269994cdfe91b0c8d4Q.jpg_220x220q75.jpg_.avif" },
                { name: "Black", value: "#000000", image: "https://cdn.shopify.com/s/files/1/0399/0231/4646/products/NVJEAN0291-2_300x.jpg?v=1754054862" },
                { name: "White", value: "#f7d4a7ff", image: "https://cdn.shopify.com/s/files/1/0399/0231/4646/files/NVJEAN0736-2_9c50225f-4382-4a33-a494-8dd3d108a83b_1200x.jpg?v=1754042853" }
            ],
            rating: 4.6,
            reviews: 203,
            isNew: true,
            description: "Trendy high-waist jeans that flatter your figure. Premium denim with stretch comfort."
        },
        {
            id: 5,
            name: "Silk Scarf",
            price: 35.99,
            originalPrice: 49.99,
            category: "accessories",
            image: "https://zohra.pk/wp-content/uploads/2023/12/Pine-Cone3-370x444.jpg",
            colors: [
                { name: "Pink", value: "#ddd5d9ff", image: "https://zohra.pk/wp-content/uploads/2023/10/Dior-Vintage-1-370x444.jpg" },
                { name: "Purple", value: "#800080", image: "https://zohra.pk/wp-content/uploads/2023/10/Purple-Haze-3-370x444.jpg" },
                { name: "Gold", value: "#1c4853ff", image: "https://zohra.pk/wp-content/uploads/2023/10/Deep-Sea-Green-4-370x444.jpg" }
            ],
            rating: 4.7,
            reviews: 78,
            isNew: false,
            description: "Luxurious silk scarf that adds elegance to any outfit. Versatile and stylish accessory."
        },
        {
            id: 6,
            name: "Floral Maxi Dress",
            price: 119.99,
            originalPrice: 149.99,
            category: "dresses",
            image: "https://i.pinimg.com/736x/ea/5e/b7/ea5eb7e7c2f22f233daeaeebda40c3c4.jpg",
            colors: [
                { name: "Floral", value: "#ff69b4", image: "https://pinkcloset.in/cdn/shop/files/Elsa-Floral_min_3.jpg?v=1714044447&width=1946" },
                { name: "Navy", value: "#000080", image: "https://m.media-amazon.com/images/I/71Va39p4DvL._UY1000_.jpg" },
                { name: "White", value: "#ffffff", image: "https://img.kwcdn.com/product/fancy/3e956831-28df-4d26-b550-24d8c3dbe817.jpg?imageView2/2/w/500/q/60/format/webp" }
            ],
            rating: 4.8,
            reviews: 167,
            isNew: true,
            description: "Stunning floral maxi dress perfect for special occasions. Flowing fabric with beautiful print."
        }
    ]
};

// Shopping Cart Object
const ShoppingCart = {
    items: [],
    
    addItem(product, selectedColor) {
        const existingItem = this.items.find(item => 
            item.id === product.id && item.selectedColor.name === selectedColor.name
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                selectedColor: selectedColor,
                quantity: 1
            });
        }
        
        this.updateCartUI();
        this.showNotification('Product added to cart!', 'success');
    },
    
    removeItem(productId, colorName) {
        this.items = this.items.filter(item => 
            !(item.id === productId && item.selectedColor.name === colorName)
        );
        this.updateCartUI();
    },
    
    updateQuantity(productId, colorName, newQuantity) {
        const item = this.items.find(item => 
            item.id === productId && item.selectedColor.name === colorName
        );
        
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId, colorName);
            } else {
                item.quantity = newQuantity;
                this.updateCartUI();
            }
        }
    },
    
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    },
    
    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const totalAmount = document.getElementById('totalAmount');
        
        // Update cart count
        cartCount.textContent = this.getItemCount();
        
        // Update cart items
        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <p class="text-muted">Your cart is empty</p>
                </div>
            `;
            cartTotal.classList.add('d-none');
        } else {
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <img src="${item.selectedColor.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="text-muted small">Color: ${item.selectedColor.name}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="ShoppingCart.updateQuantity(${item.id}, '${item.selectedColor.name}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="ShoppingCart.updateQuantity(${item.id}, '${item.selectedColor.name}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="ShoppingCart.removeItem(${item.id}, '${item.selectedColor.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            cartTotal.classList.remove('d-none');
            totalAmount.textContent = this.getTotal().toFixed(2);
        }
    },
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
};

// Wishlist Object
const Wishlist = {
    items: [],
    
    toggleItem(product) {
        const existingIndex = this.items.findIndex(item => item.id === product.id);
        
        if (existingIndex > -1) {
            this.items.splice(existingIndex, 1);
            ShoppingCart.showNotification('Removed from wishlist', 'info');
        } else {
            this.items.push(product);
            ShoppingCart.showNotification('Added to wishlist!', 'success');
        }
        
        this.updateWishlistUI();
    },
    
    updateWishlistUI() {
        const wishlistCount = document.getElementById('wishlistCount');
        wishlistCount.textContent = this.items.length;
        
        // Update heart icons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const productId = parseInt(btn.dataset.productId);
            const isInWishlist = this.items.some(item => item.id === productId);
            const icon = btn.querySelector('i');
            
            if (isInWishlist) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                btn.classList.add('text-danger');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                btn.classList.remove('text-danger');
            }
        });
    }
};

// Product Display Object
const ProductDisplay = {
    currentFilter: 'all',
    
    init() {
        this.renderProducts();
        this.setupEventListeners();
    },
    
    renderProducts(filter = 'all') {
        const productsGrid = document.getElementById('productsGrid');
        const filteredProducts = filter === 'all' 
            ? ProductData.products 
            : ProductData.products.filter(product => product.category === filter);
        
        productsGrid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
        
        // Add fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 100);
            });
        }, 50);
    },
    
    createProductCard(product) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const stars = this.generateStars(product.rating);
        
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card product-card h-100">
                    <div class="product-image">
                        <img src="${product.image}" class="card-img-top product-main-image" alt="${product.name}" data-product-id="${product.id}">
                        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
                        ${discount > 0 ? `<span class="product-badge" style="left: auto; right: 10px; background: #e74c3c;">-${discount}%</span>` : ''}
                        <div class="product-actions">
                            <button class="action-btn wishlist-btn" data-product-id="${product.id}" onclick="Wishlist.toggleItem(ProductData.products.find(p => p.id === ${product.id}))">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="action-btn" onclick="ProductDisplay.showProductModal(${product.id})">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body product-info">
                        <h5 class="product-title">${product.name}</h5>
                        <div class="rating mb-2">
                            ${stars}
                            <span class="text-muted ms-2">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            $${product.price}
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                        </div>
                        <div class="color-options">
                            ${product.colors.map((color, index) => `
                                <div class="color-option ${index === 0 ? 'active' : ''}" 
                                     style="background-color: ${color.value}; border: 2px solid ${color.value === '#ffffff' ? '#ddd' : color.value};"
                                     data-product-id="${product.id}" 
                                     data-color-index="${index}"
                                     title="${color.name}">
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-primary w-100" onclick="ProductDisplay.addToCart(${product.id})">
                            <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt star"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star star empty"></i>';
        }
        
        return stars;
    },
    
    addToCart(productId) {
        const product = ProductData.products.find(p => p.id === productId);
        const activeColorOption = document.querySelector(`.color-option[data-product-id="${productId}"].active`);
        const colorIndex = parseInt(activeColorOption.dataset.colorIndex);
        const selectedColor = product.colors[colorIndex];
        
        ShoppingCart.addItem(product, selectedColor);
    },
    
    showProductModal(productId) {
        const product = ProductData.products.find(p => p.id === productId);
        const modal = document.getElementById('productModal');
        const modalTitle = document.getElementById('productModalTitle');
        const modalBody = document.getElementById('productModalBody');
        
        modalTitle.textContent = product.name;
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" class="img-fluid rounded modal-product-image" alt="${product.name}" id="modalProductImage">
                </div>
                <div class="col-md-6">
                    <div class="rating mb-3">
                        ${this.generateStars(product.rating)}
                        <span class="text-muted ms-2">(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price mb-3">
                        <h3>$${product.price}</h3>
                        ${product.originalPrice ? `<span class="original-price fs-5">$${product.originalPrice}</span>` : ''}
                    </div>
                    <p class="text-muted mb-4">${product.description}</p>
                    <div class="mb-4">
                        <h6>Available Colors:</h6>
                        <div class="color-options">
                            ${product.colors.map((color, index) => `
                                <div class="color-option ${index === 0 ? 'active' : ''}" 
                                     style="background-color: ${color.value}; border: 2px solid ${color.value === '#ffffff' ? '#ddd' : color.value};"
                                     data-product-id="${product.id}" 
                                     data-color-index="${index}"
                                     title="${color.name}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg w-100" onclick="ProductDisplay.addToCart(${product.id}); bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    },
    
    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const filter = e.target.dataset.filter;
                this.renderProducts(filter);
            });
        });
        
        // Color option clicks (using event delegation)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('color-option')) {
                const productId = e.target.dataset.productId;
                const colorIndex = parseInt(e.target.dataset.colorIndex);
                const product = ProductData.products.find(p => p.id === parseInt(productId));
                
                // Update active color
                document.querySelectorAll(`.color-option[data-product-id="${productId}"]`).forEach(option => {
                    option.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Update product image
                const productImage = document.querySelector(`.product-main-image[data-product-id="${productId}"]`);
                if (productImage) {
                    productImage.src = product.colors[colorIndex].image;
                }
                
                // Update modal image if modal is open
                const modalImage = document.getElementById('modalProductImage');
                if (modalImage && modalImage.closest('.modal').classList.contains('show')) {
                    modalImage.src = product.colors[colorIndex].image;
                }
            }
        });
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                const results = ProductData.products.filter(product => 
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query)
                );
                
                searchResults.innerHTML = results.length > 0 
                    ? results.map(product => `
                        <div class="d-flex align-items-center mb-2 p-2 border rounded">
                            <img src="${product.image}" width="40" height="40" class="rounded me-3">
                            <div>
                                <div class="fw-bold">${product.name}</div>
                                <div class="text-muted small">$${product.price}</div>
                            </div>
                        </div>
                    `).join('')
                    : '<p class="text-muted">No products found</p>';
            } else {
                searchResults.innerHTML = '';
            }
        });
        
        // Contact form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            ShoppingCart.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            e.target.reset();
        });
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    ProductDisplay.init();
    ShoppingCart.updateCartUI();
    Wishlist.updateWishlistUI();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});