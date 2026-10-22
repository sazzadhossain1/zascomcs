'use client';

import React, { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="subsribe-all sp2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="all-subsribe-hadding">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55 font-w">
                Get the properties you&#39;re interested in delivered straight to your inbox.
              </h1>
            </div>
          </div>
          <div className="col-md-5">
            {submitted ? (
              <div className="alert alert-success mt-2">
                Thank you! You have been subscribed successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="comon-subsribe-all-input">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="subsribe-btn">
                  <div className="home2-btn">
                    <button
                      type="submit"
                      className="font-18 line-height-30 weight-700 font-f-2 font-w"
                    >
                      Get Notified
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
