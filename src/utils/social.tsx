import { MdEmail } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";


export const Social = [
    {
        name: "E-mail",
        path: "malito:alex.ferreira@gmail.com",
        text: "alex.ferreira@gmail.com",
        icon: <MdEmail />
    },
    {
        name: "Github",
        path: "https://github.com/alexferreira1796",
        text: "alexferreira1796",
        icon: <GoMarkGithub />
    },
    {
        name: "Instagram",
        path: "https://www.instagram.com/alexferreiranw",
        text: "@alexferreiranw",
        icon: <GrInstagram />
    },
    {
        name: "Whatsapp",
        path: "https://api.whatsapp.com/send?phone=5551996502085&text=Ol%C3%A1%2C%20",
        text: "+55 51 99650-2085",
        icon: <IoLogoWhatsapp />
    },
]