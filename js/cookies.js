// Set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  
  // Get a cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }
  
  document.addEventListener("DOMContentLoaded", async function () {
    let visitorId = getCookie("visitor_id");
  
    // If no cookie, create a new one
    if (!visitorId) {
      visitorId = Date.now().toString(); // Simple unique ID
      setCookie("visitor_id", visitorId, 30);
      console.log("✅ New visitor, cookie set:", visitorId);
    } else {
      console.log("👋 Returning visitor. Cookie:", visitorId);
    }
  
    // Send to Flask backend
    try {
      await fetch("https://YOUR-NGROK-ID.ngrok-free.app/track-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          visitor_id: visitorId,
          timestamp: new Date().toISOString()
        })
      });
      console.log("📨 Visitor data sent to backend.");
    } catch (error) {
      console.error("❌ Failed to send visitor data:", error);
    }
  });