// Pop-up kutusunu aç
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Pop-up kutusunu kapat
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Sayfa yüklendiğinde pop-up kutusunu otomatik olarak açmak için
window.onload = function() {
    openPopup();
};


// Yeni butona tıklandığında yazı fontunu değiştir
document.getElementById("changeFontBtn").addEventListener("click", function() {
    // Body elementine 'new-font' sınıfını ekle veya kaldır
    document.body.classList.toggle("new-font");
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const currentTheme = localStorage.getItem('theme');

    // Sayfa yüklendiğinde tema modunu kontrol et
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleThemeBtn.textContent = ''; // Karanlık modda ise buton metnini değiştir
        }
    }

    // Butona tıklandığında tema modunu değiştir
    toggleThemeBtn.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggleThemeBtn.textContent = theme === 'dark' ? '' : ''; // Buton metnini güncelle
    });
});


// Hesap makinesi ekranını temizleme
function temizle() {
    document.getElementById("screen").value = "";
}

// Hesap makinesi ekranına değer ekleme
function ekle(deger) {
    document.getElementById("screen").value += deger;
}

// Hesap makinesi ekranındaki değeri hesaplayıp ekrana yazdırma
function hesapla() {
    var deger = document.getElementById("screen").value;
    var sonuc = eval(deger); // eval() fonksiyonu string ifadeyi işlemeye alır
    document.getElementById("screen").value = sonuc;
}
