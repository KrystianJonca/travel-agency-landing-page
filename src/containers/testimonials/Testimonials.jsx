import React, { useState } from 'react';
import { Brand, Heading, Testimonial } from '../../components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { brands, testimonials } from './data';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const length = testimonials.length;

  const handleChange = (e) => {
    const testimonialNumber = e.target.value;
    setCurrentTestimonial(Number(testimonialNumber));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === length - 1 ? 0 : currentTestimonial + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === 0 ? length - 1 : currentTestimonial - 1,
    );
  };

  return (
    <section className="tld__testimonials section__padding" id="testimonials">
      <div className="tld__testimonials-content">
        <div className="tld__testimonials-content_text">
          <Heading
            alignLeft={true}
            toptext="Testimonials"
            heading="What People Say About Us."
          />
          <div className="tld__testimonials-slider_input">
            {[0, 1, 2].map((inp) => (
              <input
                type="radio"
                value={inp}
                checked={inp === currentTestimonial}
                key={inp}
                name="control"
                className="tld__slider-controls"
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <div className="tld__testimonials-content_opinions">
          {testimonials.map((t, i) => {
            return (
              <div
                key={t.name}
                className={i === currentTestimonial ? 'slide active' : 'slide'}>
                {i === currentTestimonial && (
                  <Testimonial key={t.name} {...t} />
                )}
              </div>
            );
          })}
          <div className="tld__testimonials-content_controls">
            <FaArrowLeft
              className="tld__testimonials-arrow"
              onClick={prevTestimonial}
            />
            <FaArrowRight
              className="tld__testimonials-arrow"
              onClick={nextTestimonial}
            />
          </div>
        </div>
      </div>
      <div className="tld__testimonials-brands">
        {brands.map((brand) => (
          <Brand
            key={brand.name}
            brandLogo={brand.logo}
            brandName={brand.name}
            brandLink={brand.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
