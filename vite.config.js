import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
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
                servicePackagesVideography: "ServicePackages-Videography.html",
                servicePackagesPhotography: "ServicePackages-Photography.html",
                servicePackagesStudio: "ServicePackages-Studio.html",
                servicePackagesPromotion: "ServicePackages-Promotion.html",
                servicePackagesCampaign: "ServicePackages-CampaignDevelopment.html",
                servicePackagesDigitalCourse: "ServicePackages-DigitalCourse.html",
            },
        },
    },
});
