export interface InnerPageData {
  title: string;
  category: string;
  description: string;
}

export const innerPages: Record<string, InnerPageData> = {
  "/about/history": {
    title: "Brief History of Zasco Mcs",
    category: "About",
    description: "Information for this section will be updated soon.",
  },

  "/about/president-message": {
    title: "President’s Message",
    category: "About",
    description: "The President’s message will be published here.",
  },

  "/about/constitution": {
    title: "Constitution",
    category: "About",
    description: "The constitution will be available here.",
  },

  "/about/advisory-board": {
    title: "Advisory Board",
    category: "About",
    description: "Advisory Board information will be updated soon.",
  },

  "/member/founder-member": {
    title: "Founder Member",
    category: "Member",
    description: "Founder Member information will be updated soon.",
  },

  "/member/ec-member": {
    title: "EC Member",
    category: "Member",
    description: "Executive Committee information will be updated soon.",
  },

  "/member/life-member": {
    title: "Life Member",
    category: "Member",
    description: "Life Member information will be updated soon.",
  },

  "/member/donor-member": {
    title: "Donor Member",
    category: "Member",
    description: "Donor Member information will be updated soon.",
  },

  "/member/become-a-member": {
    title: "Become A Member",
    category: "Member",
    description: "Membership application information will be available soon.",
  },

  "/member/online-payment": {
    title: "Online Payment",
    category: "Member",
    description: "Online payment information will be available soon.",
  },

  "/media/photo-gallery": {
    title: "Photo Gallery",
    category: "Media",
    description: "Photos will be published here soon.",
  },

  "/media/video-gallery": {
    title: "Video Gallery",
    category: "Media",
    description: "Videos will be published here soon.",
  },
};
