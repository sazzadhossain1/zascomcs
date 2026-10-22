'use client';

import { useState } from 'react';
import { FaqItem } from '@/types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion" id="accordionExample">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.id} className="accordion-item accordion-item2 font-f-2 mb-3">
            <h2 className={`accordion-header ${isOpen ? 'active-header active-header2' : ''}`}>
              <button
                className={`accordion-button accordion-button2 ${!isOpen ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggle(idx)}
              >
                {faq.question}
              </button>
            </h2>
            {isOpen && (
              <div className="accordion-collapse show">
                <div className="accordion-body accordion-body2">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
