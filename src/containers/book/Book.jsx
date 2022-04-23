import React from 'react';
import BookImage from '../../assets/BookImage.png';
import { Heading, Step } from '../../components';
import stepsData from './data';
import './Book.scss';

const Book = () => {
  return (
    <section className="tld__book section__padding" id="book">
      <div className="tld__book-content">
        <Heading
          toptext="Easy and Fast"
          heading="Book Your Next Trip In 3 Easy Steps"
          alignLeft={true}
        />
        <div className="tld__book-content_steps">
          {stepsData.map((step) => (
            <Step
              key={step.title}
              icon={step.icon}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </div>
      <div className="tld__book-image">
        <img src={BookImage} alt="Book Infographic" />
      </div>
    </section>
  );
};

export default Book;
