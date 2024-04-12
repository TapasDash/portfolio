import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/tapas-dash-41374a138/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/TapasDash",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://twitter.com/tapasdash017",
      label: "X",
      Icon: SiX,
    }, //Icon is in capita bcoz its  a jsx element
  ];
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Tapas Dash 👨‍💻
      </h1>
      <div className="flex justify-center items-center gap-2">
        {socials.map(({ link, label, Icon }, index) => (
          <Link href={link} aria-label={label} key={index}>
            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
