
document.addEventListener('DOMContentLoaded', function() {
    const productName = localStorage.getItem('selectedProductName');
    const productPrice = localStorage.getItem('selectedProductPrice');

    document.getElementById('selected-product-name').textContent = `Sản phẩm: ${productName}`;
    document.getElementById('selected-product-price').textContent = `Giá: ${productPrice}`;
});
function buyNow(productName, productPrice) {
    localStorage.setItem('selectedProductName', productName);
    localStorage.setItem('selectedProductPrice', productPrice);
    window.location.href = 'checkout.html';
}
// Hàm để xem chi tiết sản phẩm
function buyNow(productName, productDescription, productPrice) {
    alert(`Tên sản phẩm: ${productName}\nMô tả: ${productDescription}\nGiá: ${productPrice}`);
}

// Hàm xử lý hành động "Mua ngay"
function buynow(productName, productDescription, productPrice) {
    const confirmation = confirm(`Bạn có chắc chắn muốn mua: ${productName}?\nGiá: ${productPrice}`);
    if (confirmation) {
        alert(`Cảm ơn bạn đã mua ${productName}.\nChúng tôi sẽ gửi email xác nhận đến bạn ngay.`);
        // Bạn có thể thêm logic khác ở đây để chuyển hướng đến trang thanh toán hoặc trang kiểm tra
    }
}
