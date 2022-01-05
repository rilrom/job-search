import axios from "axios";

// Using Next.js API routes due to CORS error when called client-side
export default async (req, res) => {
    try {
        const response = await axios.post("https://jobs.nt.gov.au/Home/Search", JSON.stringify(req.body), {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(response.data.data));
    } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(error));
    }
};
