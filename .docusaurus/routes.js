import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tea_peaks_talks/blog',
    component: ComponentCreator('/tea_peaks_talks/blog', 'e2e'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/archive',
    component: ComponentCreator('/tea_peaks_talks/blog/archive', '36f'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/authors',
    component: ComponentCreator('/tea_peaks_talks/blog/authors', 'b1f'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/tea_peaks_talks/blog/authors/all-sebastien-lorber-articles', '941'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/authors/yangshun',
    component: ComponentCreator('/tea_peaks_talks/blog/authors/yangshun', '786'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/cleopatra-carpet-translation-issue',
    component: ComponentCreator('/tea_peaks_talks/blog/cleopatra-carpet-translation-issue', 'ded'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/first-blog-post',
    component: ComponentCreator('/tea_peaks_talks/blog/first-blog-post', 'cae'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/long-blog-post',
    component: ComponentCreator('/tea_peaks_talks/blog/long-blog-post', 'fb2'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/mdx-blog-post',
    component: ComponentCreator('/tea_peaks_talks/blog/mdx-blog-post', '849'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags',
    component: ComponentCreator('/tea_peaks_talks/blog/tags', 'd04'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/античность',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/античность', '8e6'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/история',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/история', '1e9'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/перевод',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/перевод', 'a6e'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/чай-горы-разговоры',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/чай-горы-разговоры', '439'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/docusaurus',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/docusaurus', '8f1'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/facebook',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/facebook', 'f17'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/hello',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/hello', '2a1'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/tags/hola',
    component: ComponentCreator('/tea_peaks_talks/blog/tags/hola', '179'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/blog/welcome',
    component: ComponentCreator('/tea_peaks_talks/blog/welcome', '0ac'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/markdown-page',
    component: ComponentCreator('/tea_peaks_talks/markdown-page', '90d'),
    exact: true
  },
  {
    path: '/tea_peaks_talks/',
    component: ComponentCreator('/tea_peaks_talks/', 'ca9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
