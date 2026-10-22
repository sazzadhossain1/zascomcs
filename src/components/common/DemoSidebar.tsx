'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DemoSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`demo-sidebar ${isOpen ? 'active-sidebar' : ''}`} id="demo-sidebar">
        <div className="demo-sidebar-wrap">
          <div className="demo-sidebar-menu">
            <span
              className="demosIcon"
              id="demosIcon"
              onClick={() => setIsOpen(!isOpen)}
              role="button"
              tabIndex={0}
              aria-label="Toggle Demo Sidebar"
            >
              <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-gear'}></i>
            </span>
          </div>
          <div className="demo-sidebar-content" style={{ overflowY: 'auto', maxHeight: '100vh', padding: '20px' }}>
            <div className="heading2">
              <h2>Pre-Built Demos Collection</h2>
            </div>
            <div className="space20"></div>
            <div className="demo-sidebar-items">
              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img1.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/">Multi Page</Link>
                    <Link href="/single-index1">Landing Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/">Real Estate</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img2.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/home-2">Multi Page</Link>
                    <Link href="/single-index2">Landing Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/home-2">Management</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img3.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/home-3">Multi Page</Link>
                    <Link href="/single-index3">Landing Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/home-3">App Landing</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img4.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link className="theme-btn-9" href="/home-4">
                      Multi Page
                    </Link>
                    <Link className="theme-btn-9" href="/single-index4">
                      Landing Page
                    </Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/home-4">Web Hosting</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img5.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/home-5">Multi Page</Link>
                    <Link href="/single-index5">Landing Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/home-5">Consulting</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item coming-soon">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/sidebar-img6.png" alt="" />
                  <div className="coming-son-text">
                    <h4>Coming Soon</h4>
                  </div>
                </div>
                <div className="demo-item-content">
                  <a href="#">Coming Soon</a>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="heading2">
              <h2>Pre-Built Inner Demos</h2>
            </div>
            <div className="space20"></div>
            <div className="demo-sidebar-items inner-dmeos">
              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner1.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/about">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/about">About Us</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner2.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/service">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/service">Service 1</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner4.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/service-2">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/service-2">Service 2</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner3.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/service/cloud-hosting-services">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/service/cloud-hosting-services">Service Details</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner5.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/pricing">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/pricing">Pricing Plan</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner6.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/team">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/team">Our Team</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner7.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/faq">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/faq">FAQ</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner8.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/blog">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/blog">Our Blog</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner9.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/blog/sidebar-right">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/blog/sidebar-right">Blog Details</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner10.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/blog/sidebar-left">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/blog/sidebar-left">Blog Left</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner11.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/blog/sidebar-right">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/blog/sidebar-right">Blog Right</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner12.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/blog/transforming-real-estate-with-virtual-tours">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/blog/transforming-real-estate-with-virtual-tours">Single Blog</Link>
                </div>
              </div>

              <div className="single-demo-sidebar-item">
                <div className="demo-sidebar-item-img">
                  <img src="/assets/img/image/demo-inner13.png" alt="" />
                  <div className="demo-sidebar-buttons">
                    <Link href="/contact">View Page</Link>
                  </div>
                </div>
                <div className="demo-item-content">
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="demo-sidebar-backdrop"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}
