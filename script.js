// ===============================
// MEDIBED WEBSITE JAVASCRIPT
// ===============================


// PAGE NAVIGATION

function showPage(pageId) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    document.getElementById(pageId)
        .classList.add("active-page");


    // Remove active menu
    document.querySelectorAll(".menu").forEach(menu => {
        menu.classList.remove("active");
    });


    // Find clicked menu
    const menus = document.querySelectorAll(".menu");

    menus.forEach(menu => {

        if (
            menu.getAttribute("onclick") ===
            `showPage('${pageId}')`
        ) {

            menu.classList.add("active");

        }

    });


    // Change top title
    const titles = {

        dashboard: "Dashboard",

        beds: "Bed Monitoring",

        management: "Bed Management",

        alerts: "Emergency Alerts",

        patients: "Patient Status",

        analytics: "Analytics"

    };


    document.getElementById("topTitle")
        .textContent = titles[pageId];

}



// REFRESH

function refreshData() {

    const button =
        document.querySelector(".primary-btn");

    button.textContent = "✓ Updated";

    setTimeout(() => {

        button.textContent = "↻ Refresh";

    }, 1500);

}



// EMERGENCY ALERT

function viewAlert() {

    alert(
        "🚨 MEDIBED EMERGENCY ALERT\n\n" +
        "Bed: 04\n" +
        "Ward: Emergency Ward\n" +
        "Status: Emergency\n\n" +
        "Immediate attention required."
    );
async function loadBeds() {
    try {
        const response = await fetch("http://localhost:5000/api/beds");
        const beds = await response.json();

        console.log("Bed data received from backend:", beds);

    } catch (error) {
        console.error("Error connecting to backend:", error);
    }
}

loadBeds();
}