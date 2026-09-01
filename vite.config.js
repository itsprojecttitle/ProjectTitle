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
                galleryDemo: "GalleryDemo.html",
                fullPortfolio: "Gallery.html",
                gallery2024Photos: "Gallery-2024-Photos.html",
                gallery8oh8: "Gallery-8OH8.html",
                galleryEvents: "Gallery-Events.html",
                galleryStudio: "Gallery-Studio.html",
                galleryShoots: "Gallery-Shoots.html",
                galleryArchive: "Gallery-Archive.html",
                gallery1LifeStudioSession: "Gallery-1Life-StudioSession.html",
                galleryOhmien8oh8PopupShotbyaza: "Gallery-Ohmien-8OH8-Popup-Shotbyaza.html",
                galleryOhmien8oh8ShotByGabrielll: "Gallery-Ohmien-8OH8-Shot-by-Gabrielll.html",
                media: "media.html",
                projectBritania: "Project-Britania.html",
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
                servicePackagesBundles: "ServicePackages-Bundles.html",
                servicePackagesStudio: "ServicePackages-Studio.html",
                servicePackagesPromotion: "ServicePackages-Promotion.html",
                servicePackagesCampaign: "ServicePackages-CampaignDevelopment.html",
                servicePackagesDigitalCourse: "ServicePackages-DigitalCourse.html",
            },
        },
    },
});
