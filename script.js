// Text you want to encode
const text = "https://google.com";

// Options (optional)
const options = {
    color: {
        dark: "#000000",  // QR code color
        light: "#ffffff" // Background color
    },
    width: 200,        // Size in pixels
    errorCorrectionLevel: 'H' // Error correction level (L, M, Q, H)
};

// Generate QR code and display in an element with id="qrcode"
QRCode.toCanvas(document.getElementById('qrcode'), text, options, function (error) {
    if (error) console.error(error);
    console.log('QR code generated!');
});


document.getElementById('imageUpload').addEventListener("input", (e) => {
    const fileInput = e.currentTarget;
    const preview = document.getElementById('preview');

    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];

        // Display preview
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            console.log(e.target.result)
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);

        // Here you would typically send to server
        console.log('Selected file:', file.name, file.size, file.type);
    }
});
