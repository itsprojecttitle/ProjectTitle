import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                fullPortfolio: "Gallery.html",
                media: "media.html",
                booking: "BookNow.html",
                facebook: "facebook.html",
                contact: "Contact.html",
                terms: "Terms.html",
                videography: "Videography.html",
                photography: "Photography.html",
                studio: "Studio.html",
                promotion: "Promotion.html",
                campaignDevelopment: "CampaignDevelopment.html",
                digitalCourse: "DigitalCourse.html",
            },
        },
    },
});
