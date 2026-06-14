import {
    FaFacebook,
    FaYoutube,
    FaWhatsapp,
    FaLinkedin,
    FaResearchgate,
    FaSlideshare
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiAcademia } from "react-icons/si";
import { MdArticle } from "react-icons/md";

export default function SocialLinks() {
    return (
        <div className="social-sidebar">

            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
            >
                <FaFacebook color="#1877F2" />
            </a>

            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
            >
                <FaYoutube color="#FF0000" />
            </a>

            <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
            >
                <FaXTwitter color="#000000" />
            </a>

            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
            >
                <FaWhatsapp color="#25D366" />
            </a>

            <a
                href="https://www.researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                title="ResearchGate"
            >
                <FaResearchgate color="#00CCBB" />
            </a>

            <a
                href="https://www.academia.edu"
                target="_blank"
                rel="noopener noreferrer"
                title="Academia"
            >
                <SiAcademia color="#41454A" />
            </a>

            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
            >
                <FaLinkedin color="#0A66C2" />
            </a>

            <a
                href="https://slideshare.net"
                target="_blank"
                rel="noopener noreferrer"
                title="SlideShare"
            >
                <FaSlideshare color="#008ED2" />
            </a>

            <a
                href="https://yourblog.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Blog"
            >
                <MdArticle color="#FF8C00" />
            </a>

        </div>
    );
}