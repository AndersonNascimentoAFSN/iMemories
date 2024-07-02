import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { Links } from './links';

describe('Links Class', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a id="link1" class="link">Link 1</a>
      <a id="link2" class="link">Link 2</a>
      <a id="link3" class="link">Link 3</a>
    `;
  });

  it('should add active class to the specified link and remove from others', () => {
    Links.addActiveLink('link2');
    const link2 = document.getElementById('link2');
    expect(link2).toHaveClass('active');

    const link1 = document.getElementById('link1');
    const link3 = document.getElementById('link3');
    expect(link1).not.toHaveClass('active');
    expect(link3).not.toHaveClass('active');
  });
});
