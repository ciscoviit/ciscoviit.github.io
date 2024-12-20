import Image from 'next/image';
import Link from 'next/link';

import { SiLinkedin, SiFacebook, SiWhatsapp, SiYoutube, SiX, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Copyright, Mail } from 'lucide-react';

import logo from '@/public/logo.png';


export default function Footer() {
    return (
        <section className="bg-primary-content">
            <footer className="footer text-neutral-content p-10 max-w-screen-xl m-auto">
                <aside>
                    <Image
                        src={logo}
                        height={96}
                        width={96}
                        alt="NetAcad Logo"
                        priority
                    />
                    <p>
                        Cisco Networking Academy VIIT
                        <br />
                        The Bridge to Possible.
                        <br />
                        Copyright <Copyright className='inline size-4' /> 2024 - All right reserved
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://www.linkedin.com/company/ciscoviit"><SiLinkedin/></Link>
                        <Link href="https://instagram.com/ciscoviit"><SiInstagram/></Link>
                        <Link href="https://x.com/CiscoViit"><SiX/></Link>
                        <Link href="https://www.facebook.com/CiscoVIIT"><SiFacebook/></Link>
                        <Link href="https://api.whatsapp.com/send?phone=917028131458"><SiWhatsapp/></Link>
                        <Link href="mailto:cisconetacad@viit.ac.in"><Mail /></Link>
                        <Link href="https://www.youtube.com/@CiscoVIIT"><SiYoutube/></Link>
                        <Link href="https://www.github.com/ciscoviit"><SiGithub/></Link>
                    </div>
                </nav>
            </footer>
        </section>
    );
}
