import React from "react"
import FooterImage from "../../assets/images/footer.png"
import FooterTitle from "./footerTitle"
import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Twitter from "../../assets/svg/twitter.svg"
import Phone from "../../assets/svg/phoneFooter.svg"
import Mail from "../../assets/svg/mail.svg"
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

                    <FooterTitle title={"Hangi Liman"} subtitles={["Hakkında", "Sitemap", "Üyelikler", "Ürün Hizmetleri"]} />

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
                    <img src={Mail} />
                    <img src={Phone} />
                    <img src={Facebook} />
                    <img src={Instagram} />
                    <img src={Twitter} />
                </div>

            </div>

                {/* footer copyright */}

            <div className="footer-copyright flex-center"><a>hangiliman</a> • Tüm hakları saklıdır 2020 ©</div>
            
                   {/* footer logo */}

                   <div className="footer-logo"> <img width="200" src={Logo} /></div>

        </div>
    )
}