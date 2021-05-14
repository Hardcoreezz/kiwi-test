import React  from 'react';
import { render, shallow, mount} from 'enzyme';
import PlaceInput from './PlaceInput'

describe('<PlaceInput />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let props: any;

  beforeEach(() => {
    jest.resetModules();
    props = {
      autoFocus: true,
      placeholder: 'placeholder-test',
      onSelect: jest.fn()
    };

    makeSubject = () => mount(<PlaceInput {...props} />);
    makeShallowSubject = () => shallow(<PlaceInput {...props} />)
    makeRenderSubject = () => render(<PlaceInput {...props} />);
  });

  describe('snapshots', () => {
    // snapshot
    it('should match latest render snapshot', () => {
      const subject = makeRenderSubject();

      expect(subject.html()).toMatchSnapshot();
    });

    it('should match latest shallow snapshot', () => {
      const subject = makeShallowSubject();

      expect(subject.html()).toMatchSnapshot();
    });

    it('should match latest mount snapshot', () => {
      const subject = makeSubject();

      expect(subject.html()).toMatchSnapshot();
    });
  });

  it('should contain placeholder as "placeholder-test"', () => {
    const subject = makeSubject();

    expect(subject.find('input[data-test-id="input"][placeholder="placeholder-test"]').exists()).toBeTruthy();
  });

  it('should be focused', () => {
    const subject = makeSubject();
    const focusedElement = document.activeElement;

    setTimeout(() => expect(subject.find('input[data-test-id="input"]').matchesElement(focusedElement)).toBe(true), 250);
  });
});
