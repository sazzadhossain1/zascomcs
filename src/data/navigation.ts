// import { NavItem } from "@/types";

// // Placeholder links (#) will be replaced when their pages are created.
// export const navItems: NavItem[] = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "#", subItems: [
//     { label: "Brief History of TSD", href: "#" },
//     { label: "President’s Message", href: "#" },
//     { label: "Constitution", href: "#" },
//     { label: "Advisory Board", href: "#" },
//   ] },
//   { label: "Member", href: "#", subItems: [
//     { label: "Founder Member", href: "#" },
//     { label: "EC Member", href: "#" },
//     { label: "Life member", href: "#" },
//     { label: "Donor Member", href: "#" },
//     { label: "Become A Member", href: "#" },
//     { label: "Online Payment", href: "#" },
//   ] },
//   { label: "Media", href: "#", subItems: [
//     { label: "Photo Gallery", href: "#" },
//     { label: "Video Gallery", href: "#" },
//   ] },
//   { label: "Contact", href: "/contact" },
// ];

import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#",
    subItems: [
      {
        label: "Brief History of Zasco Mcs",
        href: "/about/history",
      },
      {
        label: "President’s Message",
        href: "/about/president-message",
      },
      {
        label: "Constitution",
        href: "/about/constitution",
      },
      {
        label: "Advisory Board",
        href: "/about/advisory-board",
      },
    ],
  },
  {
    label: "Member",
    href: "#",
    subItems: [
      {
        label: "Founder Member",
        href: "/member/founder-member",
      },
      {
        label: "EC Member",
        href: "/member/ec-member",
      },
      {
        label: "Life member",
        href: "/member/life-member",
      },
      {
        label: "Donor Member",
        href: "/member/donor-member",
      },
      {
        label: "Become A Member",
        href: "/member/become-a-member",
      },
      // {
      //   label: "Online Payment",
      //   href: "/member/online-payment",
      // },
    ],
  },
  {
    label: "Media",
    href: "#",
    subItems: [
      {
        label: "Photo Gallery",
        href: "/media/photo-gallery",
      },
      {
        label: "Video Gallery",
        href: "/media/video-gallery",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
