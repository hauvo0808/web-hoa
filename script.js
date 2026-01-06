// ===== DATA - PRODUCTS =====
const products = [
    // HOA BÓ - SINH NHẬT
    {
        id: 1,
        name: "Bó Hoa Hồng Trắng",
        price: 250000,
        image: "images/250 (1).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Bó hoa hồng trắng cao cấp, tượng trưng cho tình yêu nồng nàn và chân thành",
        rating: 5,
        reviews: 128
    },
    {
        id: 2,
        name: "Bó Hoa Hồng Đỏ",
        price: 250000,
        image: "images/250 (2).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa hồng đỏ sang trọng và tinh tế",
        rating: 5,
        reviews: 95
    },
    {
        id: 3,
        name: "Bó Hoa Hồng Đỏ",
        price: 250000,
        image: "images/250 (3).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa hồng đỏ sang trọng và tinh tế phù hợp tặng bạn gái",
        rating: 5,
        reviews: 156
    },
    {
        id: 4,
        name: "Bó Hoa Hồng phấn",
        price: 250000,
        image: "images/250 (4).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa hồng phấn tươi sáng, mang lại niềm vui và năng lượng tích cực",
        rating: 5,
        reviews: 87
    },
    {
        id: 5,
        name: "Bó Hoa Hồng phấn",
        price: 250000,
        image: "images/250 (5).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa hồng phấn tinh khôi, thơm ngát, sang trọng và quyến rũ",
        rating: 5,
        reviews: 73
    },
    {
        id: 6,
        name: "Bó Hoa Hồng Đỏ",
        price: 250000,
        image: "images/250 (6).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa hồng đỏ sang trọng và tinh tế phù hợp tặng bạn gái",
        rating: 4,
        reviews: 64
    },
    {
        id: 7,
        name: "Bó Hoa đơn giản",
        price: 250000,
        image: "images/250 (7).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "nhẹ nhàng, thanh lịch, đầy quyến rũ",
        rating: 5,
        reviews: 91
    },
    {
        id: 8,
        name: "giỏ Hoa Hồng Phấn Lãng Mạn",
        price: 250000,
        image: "images/250 (8).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hồng phấn Đà Lạt, mềm mại, ngọt ngào, biểu tượng của sự lãng mạn",
        rating: 5,
        reviews: 142
    },
    {
        id: 9,
        name: "Bó Hoa đơn giản",
        price: 250000,
        image: "images/250 (9).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Hoa mix nhiều màu, tươi vui và sinh động",
        rating: 4,
        reviews: 58
    },
    {
        id: 10,
        name: "Bó Hoa đơn giản",
        price: 250000,
        image: "images/250 (10).jpg",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "hương thơm dễ chịu, giúp thư giãn và an lành",
        rating: 5,
        reviews: 76
    },

    // HOA BÓ - KỶ NIỆM
    {
        id: 11,
        name: "Bó Hoa đơn giản",
        price: 250000,
        image: "images/250 (11).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa hồng biểu tượng của tình yêu thuần khiết và vĩnh cửu",
        rating: 5,
        reviews: 203
    },
    {
        id: 12,
        name: "Bó Hoa Mix Sang Trọng",
        price: 250000,
        image: "images/250 (12).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Kết hợp hoa hồng, lily - cao cấp và đẳng cấp",
        rating: 5,
        reviews: 134
    },
    {
        id: 13,
        name: "Bó Hoa đơn giản",
        price: 250000,
        image: "images/250 (15).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: " Hoa đẹp quý phái, thích hợp cho dịp kỷ niệm ",
        rating: 5,
        reviews: 89
    },
    {
        id: 14,
        name: "Bó Hoa Hồng ",
        price: 250000,
        image: "images/250 (16).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hồng phấn độc đáo, màu nude nhẹ nhàng, đầy quý phái",
        rating: 5,
        reviews: 112
    },
     {
        id: 15,
        name: "Bó hoa cẩm tú cầu",
        price: 270000,
        image: "images/270 (1).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa cẩm tú tươi cao cấp, thiết kế trang trọng",
        rating: 5,
        reviews: 178
    },
    {
        id: 16,
        name: "Giỏ hoa hồng bánh kem",
        price: 270000,
        image: "images/270 (7).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa hồng tươi cao cấp, bánh kem dễ thương",
        rating: 5,
        reviews: 156
    },
    {
        id: 19,
        name: "Bó Hoa mix màu sắc",
        price: 270000,
        image: "images/270 (8).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa mix nhiều màu lung linh, sang trọng",
        rating: 5,
        reviews: 98
    },
    {
        id: 20,
        name: "Bó hoa hồng lãng mạn",
        price: 2700000,
        image: "images/270 (9).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Bó hoa hồng sang trọng, lãng mạn phù hợp cho tặng người thương",
        rating: 5,
        reviews: 87
    },
    {
        id: 21,
        name: "Bó Hoa đơn giản",
        price: 2700000,
        image: "images/270 (10).jpg",
       category: "bo-hoa",
        occasion: "ky-niem",
        description: "Phối hợp hoa hồng trắng, trang trọng và ý nghĩa",
        rating: 5,
        reviews: 143
    },
    {
        id: 22,
        name: "Giỏ hoa hồng và bánh kem",
        price: 270000,
        image: "images/270 (11).jpg",
       category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa hồng tinh tế và bánh kem tinh tế",
        rating: 4,
        reviews: 67
    },
    {
        id: 23,
        name: "Bó hoa mix đơn giản",
        price: 270000,
        image: "images/270 (12).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa mix nhiều màu sắc lung linh, lãng mạn",
        rating: 4,
        reviews: 92
    },
      {
        id: 24,
        name: "Bó hoa mix đơn giản",
        price: 200000,
        image: "images/200 (1).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa mix nhiều màu sắc lung linh, lãng mạn",
        rating: 5,
        reviews: 234
    },
    {
        id: 25,
        name: "Bó hoa cẩm tú cầu độc đáo, tinh tế",
        price: 270000,
        image: "images/270 (13).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: " bó hoa cẩm tú cầu làm quà tặng ý nghĩa",
        rating: 5,
        reviews: 189
    },
    {
        id: 26,
        name: "Bó hoa hồng mix đơn giản",
        price: 270000,
        image: "images/220 (1).jpg",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "Hoa hồng tươi cao cấp, dễ thương",
        rating: 5,
        reviews: 156
    },

    // HOA TANG
  
    {
        id: 27,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (1).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 28,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (2).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 29,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (3).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 30,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (4).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 31,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (5).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 32,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (6).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 33,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (7).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 34,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (8).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
      {
        id: 35,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1 (9).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
        {
        id: 36,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1100000,
        image: "images/1tr1.jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
        {
        id: 37,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1200000,
        image: "images/1tr2 (1).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
        {
        id: 38,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 1200000,
        image: "images/1tr2 (2).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
        {
        id: 39,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 650000,
        image: "images/650 (1).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
        {
        id: 42,
        name: "Bó Hoa Chia Buồn Đơn Giản",
        price: 650000,
        image: "images/650 (2).jpg",
        category: "hoa-tang",
        occasion: "dam-tang",
        description: "Bó hoa nhỏ thể hiện lòng chia buồn chân thành",
        rating: 4,
        reviews: 92
    },
     
    // PHỤ KIỆN
  
    {
        id: 43,
        name: "Khung Ảnh Đôi Vintage",
        price: 95000,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "phu-kien",
        occasion: "ky-niem",
        description: "Khung ảnh đôi phong cách vintage, quà tặng ý nghĩa",
        rating: 4,
        reviews: 89
    },

    // THÊM SẢN PHẨM NỔI BẬT
    {
        id: 35,
        name: "Bó Hoa 100 Bông Hồng",
        price: 2500000,
        image: "https://images.unsplash.com/photo-1522669515770-58d3d8022316?w=400&h=400&fit=crop",
        category: "bo-hoa",
        occasion: "ky-niem",
        description: "100 bông hồng Ecuador đỏ thắm, quà tặng đỉnh cao cho người bạn yêu",
        rating: 5,
        reviews: 87,
        badge: "HOT"
    },
    {
        id: 36,
        name: "Giỏ Hoa Trái Cây Cao Cấp",
        price: 850000,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
        category: "bo-hoa",
        occasion: "sinh-nhat",
        description: "Kết hợp hoa tươi và trái cây nhập khẩu, quà tặng sức khỏe",
        rating: 5,
        reviews: 124
    },
];

// ===== STATE MANAGEMENT =====
let cart = [];
let filteredProducts = [...products];

// ===== FUNCTIONS =====

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Format price to VND
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

// Generate stars rating
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '⭐' : '☆';
    }
    return stars;
}

// Render Products
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding:40px; color: var(--text-gray);">Không tìm thấy sản phẩm phù hợp 😢</p>';
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openModal(${product.id})">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews} đánh giá)</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        🛒 Thêm vào giỏ
                    </button>
                    <button class="btn-quick-view" onclick="openModal(${product.id})" title="Xem nhanh">
                        👁️
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Nếu không có từ khóa tìm kiếm, reset về toàn bộ sản phẩm
        filteredProducts = [...products];
    } else {
        // Lọc sản phẩm theo từ khóa tìm kiếm
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Áp dụng các bộ lọc khác
    filterProducts();
}

// Filter Products
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const occasionFilter = document.getElementById('occasionFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    // Bắt đầu với danh sách đã được filter từ search
    let filtered = [...filteredProducts];
    
    // Lọc theo danh mục
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Lọc theo dịp
    if (occasionFilter !== 'all') {
        filtered = filtered.filter(p => p.occasion === occasionFilter);
    }
    
    // Lọc theo giá
    if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(v => v ? parseInt(v) * 1000 : null);
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }
    
    // Render kết quả
    renderProducts(filtered);
}

// Filter by Category (từ category cards)
function filterByCategory(category) {
    // Reset search input
    document.getElementById('searchInput').value = '';
    
    // Reset về toàn bộ sản phẩm
    filteredProducts = [...products];
    
    // Reset các bộ lọc khác về mặc định
    document.getElementById('occasionFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    
    // Set category filter
    document.getElementById('categoryFilter').value = category;
    
    // Áp dụng bộ lọc
    filterProducts();
    
    // Scroll đến phần sản phẩm
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    
    // Hiển thị thông báo
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!\n\n🛒 Giỏ hàng hiện có ${cart.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm`);
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Open Cart
function openCart() {
    if (cart.length === 0) {
        alert('🛒 Giỏ hàng của bạn đang trống!\n\nHãy thêm sản phẩm vào giỏ hàng nhé! 🌺');
        return;
    }
    
    let cartHTML = '🛒 GIỎ HÀNG CỦA BẠN\n';
    cartHTML += '═══════════════════════════\n\n';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        cartHTML += `${index + 1}. ${item.name}\n`;
        cartHTML += `   Số lượng: ${item.quantity} × ${formatPrice(item.price)}\n`;
        cartHTML += `   Thành tiền: ${formatPrice(subtotal)}\n\n`;
    });
    
    cartHTML += '═══════════════════════════\n';
    cartHTML += `💰 TỔNG CỘNG: ${formatPrice(total)}\n\n`;
    cartHTML += '📞 Liên hệ ngay để đặt hàng:\n';
    cartHTML += '• Zalo: 0333.069.017\n';
    cartHTML += '• Messenger: Shop Hoa Núi Thành\n\n';
    cartHTML += '🚚 Miễn phí giao hàng nội thành Quảng Nam!';
    
    alert(cartHTML);
}

// Open Product Modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-details">
            <h2>${product.name}</h2>
            <div class="product-rating">
                <span class="stars">${generateStars(product.rating)}</span>
                <span class="rating-count">(${product.reviews} đánh giá)</span>
            </div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <p class="product-description">${product.description}</p>
            <div style="margin: 20px 0; padding: 15px; background: var(--light-pink); border-radius: 10px;">
                <strong>📋 Thông tin sản phẩm:</strong><br>
                🏷️ <strong>Danh mục:</strong> ${getCategoryName(product.category)}<br>
                🎉 <strong>Dịp:</strong> ${getOccasionName(product.occasion)}<br>
                ✅ <strong>Tình trạng:</strong> <span style="color: green;">Còn hàng</span><br>
                🚚 <strong>Giao hàng:</strong> Miễn phí nội thành Quảng Nam<br>
                ⏰ <strong>Thời gian:</strong> Giao trong 2 giờ
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id}); closeModal();" style="width: 100%;">
                    🛒 Thêm vào giỏ hàng
                </button>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, var(--primary-pink), var(--dark-pink)); color: white; border-radius: 10px; text-align: center;">
                <strong style="font-size: 18px;">💬 Đặt hàng ngay qua:</strong><br><br>
                <a href="https://zalo.me/0123456789" target="_blank" style="display: inline-block; padding: 10px 20px; background: white; color: var(--dark-pink); text-decoration: none; border-radius: 25px; margin: 5px; font-weight: 600;">
                    📞 Zalo: 0333.069.017
                </a><br>
                <a href="https://m.me/your-page" target="_blank" style="display: inline-block; padding: 10px 20px; background: white; color: var(--dark-pink); text-decoration: none; border-radius: 25px; margin: 5px; font-weight: 600;">
                    📨 Messenger
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'bo-hoa': 'Hoa Bó',
        'hoa-tang': 'Hoa Tang',
        'phu-kien': 'Phụ Kiện'
    };
    return names[category] || category;
}

// Get Occasion Name
function getOccasionName(occasion) {
    const names = {
        'sinh-nhat': 'Sinh Nhật',
        'dam-tang': 'Đám Tang',
        'ky-niem': 'Kỷ Niệm'
    };
    return names[occasion] || occasion;
}

// Submit Contact Form
function submitContact(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;
    
    // Hiển thị thông báo thành công
    alert(`✅ Cảm ơn ${name} đã liên hệ!\n\nChúng tôi sẽ phản hồi qua số điện thoại ${phone} trong thời gian sớm nhất.\n\n💝 Shop Hoa Núi Thành`);
    
    // Reset form
    form.reset();
}

// Close modal khi click bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scroll cho anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Đóng mobile menu nếu đang mở
                    const navLinks = document.getElementById('navLinks');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Render sản phẩm ban đầu
    renderProducts();
    updateCartCount();
    
    // Thêm scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe các product cards để tạo animation
    setTimeout(() => {
        document.querySelectorAll('.product-card, .category-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
    
    // Thêm hiệu ứng khi scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ẩn/hiện header khi scroll (tùy chọn)
        const header = document.querySelector('header');
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});