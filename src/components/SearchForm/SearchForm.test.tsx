import React  from 'react';
import { render, shallow, mount} from 'enzyme';
import SearchForm from './SearchForm'

describe('<SearchForm />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let props: any;

  beforeEach(() => {
    jest.resetModules();
    props = {
      onSubmit: jest.fn()
    };

    makeSubject = () => mount(<SearchForm {...props} />);
    makeShallowSubject = () => shallow(<SearchForm {...props} />)
    makeRenderSubject = () => render(<SearchForm {...props} />);
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

  it('should button disabled', () => {
    const subject = makeSubject();
    subject.find('form').simulate('submit');

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should datepicker "TO" disabled', () => {
    const subject = makeSubject();
    subject.find('.react-datepicker__close-icon').simulate('click');

    expect(subject.find('input[placeholder="Date to"]').props()["disabled"]).toBe(true);
  });

  it('should datepicker "TO" enabled', () => {
    const subject = makeSubject();

    expect(subject.find('input[placeholder="Date to"]').props()["disabled"]).toBe(false);
  });
});
