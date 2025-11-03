import React, { useState } from "react";

 function Widget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [catImage, setCatImage] = useState(null);
  const [error, setError] = useState(null);

  const runService = (service) => {
    setLoading(true);
    setTemperature(null);
    setCatImage(null);
    setError(null);

    if (service === "meteo") {
      if (!navigator.geolocation) {
        setError("La géolocalisation n'est pas disponible sur ce navigateur.");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          try {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
            );
            const data = await res.json();
            setTemperature(data.current_weather.temperature);
          } catch {
            setError("Impossible de récupérer la météo.");
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError("Impossible d'obtenir votre position.");
          setLoading(false);
        }
      );
    }

    if (service === "cat") {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => {
          setCatImage(data[0].url);
          setLoading(false);
        })
        .catch(() => {
          setError("Désolé nous rencontrons des difficultées a capter des images.");
          setLoading(false);
        });
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial", textAlign: "center" }}>
      <div
        style={{
          border: "2px solid #ddd",
          padding: 20,
          width: 250,
          margin: "auto",
          borderRadius: 10,
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <h2>Mon Widget</h2>
        <p>Clique pour voir les services</p>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 10,
              width: "90%",
              maxWidth: 400,
              textAlign: "center",
            }}
          >
            <h3>Services</h3>

            <button
              onClick={() => runService("meteo")}
              style={{ margin: 10, padding: "10px 20px" }}
            >
              Température
            </button>

            <button
              onClick={() => runService("cat")}
              style={{ margin: 10, padding: "10px 20px" }}
            >
              Image de chat
            </button>

            {loading && <p>Chargement...</p>}

            {temperature !== null && (
              <div style={{ marginTop: 15 }}>
                <h4>Température actuelle est de:</h4>
                <p>{temperature} °C</p>
              </div>
            )}

            {catImage && (
              <div style={{ marginTop: 15 }}>
                <img
                  src={catImage}
                  alt="Chat"
                  style={{ width: "100%", borderRadius: 10 }}
                />
              </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: 15,
                padding: "8px 20px",
                background: "sky blue",
                color: "#fff",
                border: "none",
                borderRadius: 6,
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Widget
