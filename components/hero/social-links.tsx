import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/constants";
const links = [
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: SOCIAL_LINKS.email,
    icon: FiMail,
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-6">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          className="flex items-center gap-2 text-stone-500 transition hover:text-stone-900"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
