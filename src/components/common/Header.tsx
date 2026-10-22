// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { navItems } from "@/data/navigation";
// import styles from "./Header.module.css";

// interface HeaderProps {
//   variant?: "home1" | "home2" | "home3" | "home4" | "home5" | "inner";
// }

// type NavItem = (typeof navItems)[number];
// type SubItem = NonNullable<NavItem["subItems"]>[number];

// function Logo({
//   small = false,
//   dark = false,
// }: {
//   small?: boolean;
//   dark?: boolean;
// }) {
//   const [hover, setHover] = useState(false);

//   return (
//     <Link
//       href="/"
//       aria-label="ZASCOMCS Home"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: small ? 9 : 12,
//         textDecoration: "none",
//         whiteSpace: "nowrap",
//       }}
//     >
//       <span
//         style={{
//           width: small ? 38 : 46,
//           height: small ? 38 : 46,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//           borderRadius: small ? 10 : 12,
//           fontSize: small ? 21 : 26,
//           fontWeight: 800,
//           lineHeight: 1,
//           color: "#ffffff",
//           background: "linear-gradient(135deg, #0263e0 0%, #2f80ed 100%)",
//           boxShadow: hover
//             ? "0 12px 24px rgba(2, 99, 224, 0.35)"
//             : "0 8px 18px rgba(2, 99, 224, 0.22)",
//           transform: hover ? "translateY(-2px) rotate(-4deg)" : "none",
//           transition: "transform 0.3s ease, box-shadow 0.3s ease",
//         }}
//       >
//         Z
//       </span>

//       <span
//         style={{
//           fontSize: small ? 20 : 26,
//           fontWeight: 800,
//           letterSpacing: small ? 1.5 : 2,
//           lineHeight: 1,
//           color: dark ? "#ffffff" : "#202c4a",
//         }}
//       >
//         ZASCO
//         <span style={{ color: "#0263e0" }}>MCS</span>
//       </span>
//     </Link>
//   );
// }

// export default function Header({ variant = "home1" }: HeaderProps) {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expanded, setExpanded] = useState<string | null>(null);
//   const [nestedExpanded, setNestedExpanded] = useState<string | null>(null);

//   const pathname = usePathname();
//   const isDarkHeader = variant === "home2";

//   useEffect(() => {
//     const onScroll = () => setIsSticky(window.scrollY > 80);

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setExpanded(null);
//     setNestedExpanded(null);
//   }, [pathname]);

//   useEffect(() => {
//     if (!mobileOpen) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMobileOpen(false);
//     };

//     const onResize = () => {
//       if (window.innerWidth >= 1200) setMobileOpen(false);
//     };

//     document.addEventListener("keydown", onKeyDown);
//     window.addEventListener("resize", onResize);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       document.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [mobileOpen]);

//   const closeMenu = () => {
//     setMobileOpen(false);
//     setExpanded(null);
//     setNestedExpanded(null);
//   };

//   const toggleMenu = (label: string) => {
//     setExpanded((current) => (current === label ? null : label));
//     setNestedExpanded(null);
//   };

//   const renderDesktopSubmenu = (items: SubItem[]) => (
//     <ul className="sub-menu">
//       {items.map((sub, index) => (
//         <li
//           key={`${sub.label}-${index}`}
//           className={sub.subItems ? "has-dropdown has-dropdown1" : ""}
//         >
//           <Link href={sub.href}>
//             {sub.label}
//             {sub.subItems && (
//               <span>
//                 <i className="fa-solid fa-angle-right" />
//               </span>
//             )}
//           </Link>

//           {sub.subItems && (
//             <ul className="sub-menu">
//               {sub.subItems.map((nested, nestedIndex) => (
//                 <li key={`${nested.label}-${nestedIndex}`}>
//                   <Link href={nested.href}>{nested.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <>
//       {/* DESKTOP HEADER */}
//       <header
//         className={`${styles.desktopHeader} ${
//           isSticky ? styles.stickyHeader : ""
//         }`}
//       >
//         <div
//           id="header"
//           className={`header-area ${
//             isDarkHeader ? "header-area2" : ""
//           } ${isSticky ? "sticky" : ""} ${styles.desktopHeaderArea}`}
//         >
//           <div className={`container ${styles.headerContainer}`}>
//             <div className={styles.headerElements}>
//               <div className={`site-logo home1-site-logo ${styles.logoArea}`}>
//                 <Logo dark={isDarkHeader} />
//               </div>

//               <nav
//                 className={`main-menu-ex main-menu-ex1 ${styles.desktopNavigation}`}
//                 aria-label="Main navigation"
//               >
//                 <ul>
//                   {navItems.map((item, index) => (
//                     <li
//                       key={`${item.label}-${index}`}
//                       className={item.subItems ? "has-dropdown" : ""}
//                     >
//                       <Link href={item.href}>
//                         {item.label}
//                         {item.subItems && (
//                           <i className="fa-solid fa-angle-down ms-1" />
//                         )}
//                       </Link>

//                       {item.subItems && renderDesktopSubmenu(item.subItems)}
//                     </li>
//                   ))}
//                 </ul>
//               </nav>

//               <div className={`header-site-btn ${styles.desktopActions}`}>
//                 <Link
//                   className="cta-btn font-f-2 weight-700"
//                   style={{
//                     background: "#0d6efd",
//                     borderColor: "#16621d",
//                     borderRadius: 999,
//                   }}
//                   href="https://app.zascomcs.org/login"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Member Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE HEADER */}
//       <div className={styles.mobileHeader}>
//         <div className={styles.mobileHeaderInner}>
//           <Logo small />

//           <button
//             type="button"
//             className={styles.menuToggle}
//             aria-label="Open navigation menu"
//             aria-expanded={mobileOpen}
//             aria-controls="zascomcs-mobile-drawer"
//             onClick={() => setMobileOpen(true)}
//           >
//             <i className="fa-solid fa-bars" />
//           </button>
//         </div>
//       </div>

//       {/* OVERLAY */}
//       {mobileOpen && (
//         <button
//           type="button"
//           className={styles.backdrop}
//           aria-label="Close navigation menu"
//           onClick={closeMenu}
//         />
//       )}

//       {/* MOBILE DRAWER */}
//       <aside
//         id="zascomcs-mobile-drawer"
//         className={`${styles.mobileDrawer} ${
//           mobileOpen ? styles.drawerOpen : ""
//         }`}
//         aria-label="Mobile navigation"
//         aria-hidden={!mobileOpen}
//         inert={!mobileOpen}
//       >
//         <div className={styles.drawerTop}>
//           <Logo small />

//           <button
//             type="button"
//             className={styles.closeButton}
//             aria-label="Close navigation menu"
//             onClick={closeMenu}
//           >
//             <i className="fa-solid fa-xmark" />
//           </button>
//         </div>

//         <nav className={styles.mobileNavigation} aria-label="Mobile menu">
//           <ul className={styles.mobileNavList}>
//             {navItems.map((item, index) => (
//               <li
//                 key={`${item.label}-${index}`}
//                 className={styles.mobileNavItem}
//               >
//                 <div className={styles.mobileNavRow}>
//                   {item.subItems && item.href === "#" ? (
//                     <button
//                       type="button"
//                       className={styles.mobileNavLink}
//                       onClick={() => toggleMenu(item.label)}
//                       aria-expanded={expanded === item.label}
//                     >
//                       {item.label}
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className={styles.mobileNavLink}
//                       onClick={closeMenu}
//                     >
//                       {item.label}
//                     </Link>
//                   )}

//                   {item.subItems && (
//                     <button
//                       type="button"
//                       className={styles.expandButton}
//                       aria-label={`Toggle ${item.label} submenu`}
//                       aria-expanded={expanded === item.label}
//                       onClick={() => toggleMenu(item.label)}
//                     >
//                       <i
//                         className={`fa-solid ${
//                           expanded === item.label ? "fa-minus" : "fa-plus"
//                         }`}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {item.subItems && expanded === item.label && (
//                   <ul className={styles.mobileSubmenu}>
//                     {item.subItems.map((sub, subIndex) => (
//                       <li key={`${sub.label}-${subIndex}`}>
//                         <div className={styles.mobileNavRow}>
//                           {sub.subItems && sub.href === "#" ? (
//                             <button
//                               type="button"
//                               className={styles.mobileSubLink}
//                               onClick={() =>
//                                 setNestedExpanded((current) =>
//                                   current === sub.label ? null : sub.label,
//                                 )
//                               }
//                             >
//                               {sub.label}
//                             </button>
//                           ) : (
//                             <Link
//                               href={sub.href}
//                               className={styles.mobileSubLink}
//                               onClick={closeMenu}
//                             >
//                               {sub.label}
//                             </Link>
//                           )}

//                           {sub.subItems && (
//                             <button
//                               type="button"
//                               className={styles.expandButton}
//                               aria-label={`Toggle ${sub.label} submenu`}
//                               aria-expanded={nestedExpanded === sub.label}
//                               onClick={() =>
//                                 setNestedExpanded((current) =>
//                                   current === sub.label ? null : sub.label,
//                                 )
//                               }
//                             >
//                               <i
//                                 className={`fa-solid ${
//                                   nestedExpanded === sub.label
//                                     ? "fa-minus"
//                                     : "fa-plus"
//                                 }`}
//                               />
//                             </button>
//                           )}
//                         </div>

//                         {sub.subItems && nestedExpanded === sub.label && (
//                           <ul className={styles.mobileNestedSubmenu}>
//                             {sub.subItems.map((nested, nestedIndex) => (
//                               <li key={`${nested.label}-${nestedIndex}`}>
//                                 <Link href={nested.href} onClick={closeMenu}>
//                                   {nested.label}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* ONLY MEMBER LOGIN - REGISTER REMOVED */}
//         <div className={styles.drawerActions}>
//           <Link
//             className="btn btn-primary text-white"
//             href="https://app.zascomcs.org/login"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Member Login
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
interface HeaderProps {
  variant?: "home1" | "home2" | "home3" | "home4" | "home5" | "inner";
}
type NavItem = (typeof navItems)[number];
type SubItem = NonNullable<NavItem["subItems"]>[number];
function Logo({
  small = false,
  dark = false,
}: {
  small?: boolean;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ZASCO Multipurpose Cooperative Society Home"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textDecoration: "none",
        flexShrink: 0,
        width: small ? "165px" : "200px",
        maxWidth: "100%",
      }}
    >
      <Image
        src="/images/zasco-logo.png"
        alt="ZASCO Multipurpose Cooperative Society"
        width={660}
        height={215}
        priority
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Link>
  );
}
export default function Header({ variant = "home1" }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [nestedExpanded, setNestedExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const isDarkHeader = variant === "home2";
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setExpanded(null);
    setNestedExpanded(null);
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1200) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);
  const closeMenu = () => {
    setMobileOpen(false);
    setExpanded(null);
    setNestedExpanded(null);
  };
  const toggleMenu = (label: string) => {
    setExpanded((current) => (current === label ? null : label));
    setNestedExpanded(null);
  };
  const renderDesktopSubmenu = (items: SubItem[]) => (
    <ul className="sub-menu">
      {items.map((sub, index) => (
        <li
          key={`${sub.label}-${index}`}
          className={sub.subItems ? "has-dropdown has-dropdown1" : ""}
        >
          <Link href={sub.href}>
            {sub.label}
            {sub.subItems && (
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            )}
          </Link>
          {sub.subItems && (
            <ul className="sub-menu">
              {sub.subItems.map((nested, nestedIndex) => (
                <li key={`${nested.label}-${nestedIndex}`}>
                  <Link href={nested.href}>{nested.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      {/* DESKTOP HEADER */}
      <header
        className={`${styles.desktopHeader} ${
          isSticky ? styles.stickyHeader : ""
        }`}
      >
        <div
          id="header"
          className={`header-area ${
            isDarkHeader ? "header-area2" : ""
          } ${isSticky ? "sticky" : ""} ${styles.desktopHeaderArea}`}
        >
          <div className={`container ${styles.headerContainer}`}>
            <div className={styles.headerElements}>
              <div className={`site-logo home1-site-logo ${styles.logoArea}`}>
                <Logo dark={isDarkHeader} />
              </div>
              <nav
                className={`main-menu-ex main-menu-ex1 ${styles.desktopNavigation}`}
                aria-label="Main navigation"
              >
                <ul>
                  {navItems.map((item, index) => (
                    <li
                      key={`${item.label}-${index}`}
                      className={item.subItems ? "has-dropdown" : ""}
                    >
                      <Link href={item.href}>
                        {item.label}
                        {item.subItems && (
                          <i className="fa-solid fa-angle-down ms-1" />
                        )}
                      </Link>
                      {item.subItems && renderDesktopSubmenu(item.subItems)}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={`header-site-btn ${styles.desktopActions}`}>
                <Link
                  className="cta-btn font-f-2 weight-700"
                  style={{
                    background: "#0d6efd",
                    borderColor: "#16621d",
                    borderRadius: 999,
                  }}
                  href="https://app.zascomcs.org/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Member Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* MOBILE HEADER */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderInner}>
          <Logo small />
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="zascomcs-mobile-drawer"
            onClick={() => setMobileOpen(true)}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
      {/* OVERLAY */}
      {mobileOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
      {/* MOBILE DRAWER */}
      <aside
        id="zascomcs-mobile-drawer"
        className={`${styles.mobileDrawer} ${
          mobileOpen ? styles.drawerOpen : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className={styles.drawerTop}>
          <Logo small />
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className={styles.mobileNavigation} aria-label="Mobile menu">
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className={styles.mobileNavItem}
              >
                <div className={styles.mobileNavRow}>
                  {item.subItems && item.href === "#" ? (
                    <button
                      type="button"
                      className={styles.mobileNavLink}
                      onClick={() => toggleMenu(item.label)}
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.subItems && (
                    <button
                      type="button"
                      className={styles.expandButton}
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                      onClick={() => toggleMenu(item.label)}
                    >
                      <i
                        className={`fa-solid ${
                          expanded === item.label ? "fa-minus" : "fa-plus"
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.subItems && expanded === item.label && (
                  <ul className={styles.mobileSubmenu}>
                    {item.subItems.map((sub, subIndex) => (
                      <li key={`${sub.label}-${subIndex}`}>
                        <div className={styles.mobileNavRow}>
                          {sub.subItems && sub.href === "#" ? (
                            <button
                              type="button"
                              className={styles.mobileSubLink}
                              onClick={() =>
                                setNestedExpanded((current) =>
                                  current === sub.label ? null : sub.label,
                                )
                              }
                            >
                              {sub.label}
                            </button>
                          ) : (
                            <Link
                              href={sub.href}
                              className={styles.mobileSubLink}
                              onClick={closeMenu}
                            >
                              {sub.label}
                            </Link>
                          )}
                          {sub.subItems && (
                            <button
                              type="button"
                              className={styles.expandButton}
                              aria-label={`Toggle ${sub.label} submenu`}
                              aria-expanded={nestedExpanded === sub.label}
                              onClick={() =>
                                setNestedExpanded((current) =>
                                  current === sub.label ? null : sub.label,
                                )
                              }
                            >
                              <i
                                className={`fa-solid ${
                                  nestedExpanded === sub.label
                                    ? "fa-minus"
                                    : "fa-plus"
                                }`}
                              />
                            </button>
                          )}
                        </div>
                        {sub.subItems && nestedExpanded === sub.label && (
                          <ul className={styles.mobileNestedSubmenu}>
                            {sub.subItems.map((nested, nestedIndex) => (
                              <li key={`${nested.label}-${nestedIndex}`}>
                                <Link href={nested.href} onClick={closeMenu}>
                                  {nested.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* ONLY MEMBER LOGIN - REGISTER REMOVED */}
        <div className={styles.drawerActions}>
          <Link
            className="btn btn-primary text-white"
            href="https://app.zascomcs.org/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Member Login
          </Link>
        </div>
      </aside>
    </>
  );
}
