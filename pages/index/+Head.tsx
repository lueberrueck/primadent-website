// Startseite +Head mit JSON-LD
import React from 'react';
import { LocalBusinessJsonLd } from '../../components/seo/LocalBusinessJsonLd';

export default function Head() {
  return (
    <>
      <LocalBusinessJsonLd />
    </>
  );
}
