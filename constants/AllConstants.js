export const SidebarMenuold = [
  {
    name: "Website Setting",
    link: "/",
    icon: () => <i className="fa-solid fa-gear text-[18px] w-[20px]"></i>,
  },
  {
    name: "Products",
    link: "/products",
    icon: () => <i className="fa-solid fa-shop text-[18px] w-[20px]"></i>,
  },
  {
    name: "Sub categories",
    link: "/subcategories",
    icon: () => <i className="fa-solid fa-list-check text-[18px] w-[20px]"></i>,
  },
  {
    name: "Categories",
    link: "/categories",
    icon: () => <i className="fa-solid fa-shapes text-[18px] w-[20px]"></i>,
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: () => <i className="fa-solid fa-blog text-[18px] w-[20px]"></i>,
  },
  {
    name: "Expert",
    link: "/expert",
    icon: () => <i className="fa-solid fa-blog text-[18px] w-[20px]"></i>,
  },
  {
    name: "Offers",
    link: "/offers",
    icon: () => <i className="fa-solid fa-gift text-[18px] w-[20px]"></i>,
  },
  {
    name: "Orders",
    link: "/orders",
    icon: () => (
      <i className="fa-solid fa-bag-shopping text-[18px] w-[20px]"></i>
    ),
  },
  {
    name: "Users",
    link: "/users",
    icon: () => <i className="fa-solid fa-users text-[18px] w-[20px]"></i>,
  },
  {
    name: "Moderators",
    link: "/moderators",
    icon: () => <i className="fa-solid fa-user-pen text-[18px] w-[20px]"></i>,
  },
];

export const SidebarMenu = [
  {
    name: "Admin Panel Setting",
    link: "/",
    icon: () => <i className="fa-solid fa-gear text-[18px] w-[20px]"></i>,
  },
  {
    name: "Websites",
    icon: () => <i className="fa-solid fa-globe text-[18px] w-[20px]"></i>,
    items: [
      {
        name: "Top Rated Designer",
        image: "/assets/TopRatedDesigner.png",
        menu: [
          {
            name: "Settings",
            link: "/toprateddesigner/settings",
            icon: () => <i className="fa-solid fa-gear text-[12px]"></i>,
          },
          {
            name: "Blogs",
            link: "/toprateddesigner/blogs",
            icon: () => <i className="fa-solid fa-blog text-[12px]"></i>,
          },
          {
            name: "Experts",
            link: "/toprateddesigner/expert",
            icon: () => <i className="fa-solid fa-blog text-[12px]"></i>,
          },
        ],
      },
      {
        name: "Business website",
        image: "/assets/web.png",
        menu: [
          {
            name: "Settings",
            link: "/business-website/settings",
            icon: () => <i className="fa-solid fa-gear text-[12px]"></i>,
          },
          {
            name: "Products",
            link: "/business-website/products",
            icon: () => <i className="fa-solid fa-shop text-[12px]"></i>,
          },
          {
            name: "Digital Products",
            link: "/business-website/digital",
            icon: () => <i className="fa-solid fa-list-check text-[12px]"></i>,
          },
          {
            name: "Categories",
            link: "/business-website/categories",
            icon: () => <i className="fa-solid fa-shapes text-[12px]"></i>,
          },
          {
            name: "Orders",
            link: "/business-website/orders",
            icon: () => (
              <i className="fa-solid fa-bag-shopping text-[12px]"></i>
            ),
          },
          {
            name: "Offers",
            link: "/business-website/offers",
            icon: () => <i className="fa-solid fa-gift text-[12px]"></i>,
          },
        ],
      },
    ],
  },
  {
    name: "Users",
    link: "/users",
    icon: () => <i className="fa-solid fa-users text-[18px] w-[20px]"></i>,
  },
  {
    name: "Moderators",
    link: "/moderators",
    icon: () => <i className="fa-solid fa-user-pen text-[18px] w-[20px]"></i>,
  },
];

export const SocialMedia = [
  {
    name: "Facebook",
    link: "",
    icon: () => <i className="fa-brands fa-facebook mr-2"></i>,
  },
  {
    name: "LinkedIn",
    link: "",
    icon: () => <i className="fa-brands fa-linkedin mr-2"></i>,
  },
  {
    name: "Whatsapp",
    link: "",
    icon: () => <i className="fa-brands fa-whatsapp mr-2"></i>,
  },
  {
    name: "Instagram",
    link: "",
    icon: () => <i className="fa-brands fa-square-instagram mr-2"></i>,
  },
  {
    name: "Twitter",
    link: "",
    icon: () => <i className="fa-brands fa-square-x-twitter mr-2"></i>,
  },
];
