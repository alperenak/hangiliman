import React from "react"
import FooterImage from "../../assets/images/footer.png"
import FooterTitle from "./footerTitle"
import { Facebook } from "../../components/icons/index"
import { Instagram } from "../../components/icons/index"
import { Twitter } from "../../components/icons/index"
import { PhoneFooter } from "../../components/icons/index"
import { Mail } from "../../components/icons/index"
import Logo from "../../assets/images/logo.png"

export default function Footer() {
    return (
        <div className="footer flex-dir-col">

            {/* background */}

            <div className="footer-background"><img src={FooterImage} /></div>

            {/* footer main */}

            <div className="footer-main  flex-center">


                {/* footer container */}

                <div className="footer-container">

                    {/* footer title Hangi Liman */}

                    <FooterTitle title={"Hangiliman"} subtitles={["Hakkında", "Sitemap", "Üyelikler", "Ürün Hizmetleri"]} />

                    {/* footer title Şirket */}

                    <FooterTitle title={"Şirket"} subtitles={["Hakkında", "Bizimle Çalış", "Website", "Marka"]} />

                    {/* footer title Politika */}

                    <FooterTitle title={"Politika"} subtitles={["Gizlilik ve Güvenlik", "Politikalar", "Şartlar", "Lisanslama"]} />

                </div>
            </div>

            {/* footer social platforms */}

            <div className="footer-social-platforms flex-center">

                {/* Footer social links */}

                <div className="social-links">

                    {/* Mail icon */}

                    <Mail className="social-links-img" />

                    {/* Phone icon */}

                    <PhoneFooter className="social-links-img" />

                    {/* facebook icon */}

                    <Facebook className="social-links-img" />

                    {/* instagram icon */}

                    <Instagram className="social-links-img" />

                    {/* twitter icon */}

                    <Twitter className="social-links-img" />
                </div>

            </div>

            {/* footer copyright */}

            <div className="footer-copyright flex-center"><a>hangiliman</a> • Tüm hakları saklıdır 2020 ©</div>

            {/* footer logo */}

            <div className="footer-logo"> <img width="200" src={Logo} /></div>

        </div>
    )
}