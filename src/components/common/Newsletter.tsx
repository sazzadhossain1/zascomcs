'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="subsribe-all sp2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="all-subsribe-hadding">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45 font-w">
                Get the properties you&apos;re interested in delivered straight to your inbox.
              </h1>
            </div>
          </div>
          <div className="col-md-5">
            {subscribed ? (
              <div className="alert alert-success text-white bg-success border-0 p-3">
                <i className="fa-solid fa-check-circle me-2" /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="comon-subsribe-all-input">
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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
