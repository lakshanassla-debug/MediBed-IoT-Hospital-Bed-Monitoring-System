const express = require("express");
const cors = require("cors");

const { connectDB, getDB } = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "MediBed Backend is Running!",
        status: "Online"
    });
});

app.get("/api/beds", async (req, res) => {

    try {

        const db = getDB();

        const beds = await db
            .collection("beds")
            .find({})
            .toArray();

        res.json(beds);

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: "Database error"
        });
    }
});

connectDB().then(() => {

    app.listen(PORT, () => {

        console.log(
            `MediBed Backend running on http://localhost:${PORT}`
        );

    });

});