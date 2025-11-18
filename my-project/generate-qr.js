// generate-qr.js
import QRCode from "qrcode";

const portfolioURL = "https://portfolio-coh2.vercel.app/"; // ton lien

// Génère un fichier PNG
QRCode.toFile("portfolio-qr.png", portfolioURL, {
  width: 300,
  margin: 2,
  color: {
    dark: "#000000",
    light: "#ffffff"
  }
}).then(() => {
  console.log("✅ QR code généré : portfolio-qr.png");
}).catch(err => {
  console.error(err);
});

