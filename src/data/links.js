import github from "../assets/Links/github-logo.svg";
import linkedin from "../assets/Links/linkedin-logo.svg";
import resume from "../assets/Links/resume-logo.svg";
import { SECTION_HREFS } from "./sections";

export const navigationLinks = [
  { href: SECTION_HREFS.HOME, label: "Home" },
  { href: SECTION_HREFS.STACK, label: "Stack" },
  { href: SECTION_HREFS.PROJECTS, label: "Projects" },
];

export const profileLinks = [
  {
    id: "contact",
    label: "Contact",
    href: "mailto:rayyanmshaikhh@gmail.com",
    placements: ["navbar"],
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayyan-m-shaikh/",
    icon: linkedin,
    alt: "LinkedIn",
    placements: ["sidebar"],
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/rayyanmshaikh",
    icon: github,
    alt: "GitHub",
    placements: ["sidebar"],
  },
  {
    id: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1ge8jEvrI5Ra3_1crIVMpNXslQIpFxLtW/view?usp=sharing",
    icon: resume,
    alt: "Resume",
    placements: ["sidebar"],
  },
];

export const getProfileLinkById = (id) =>
  profileLinks.find((link) => link.id === id);
