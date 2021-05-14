import React  from 'react';
import { render, shallow, mount} from 'enzyme';
import FlightsList from './FlightsList'

describe('<FlightsList />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let props: any;

  beforeEach(() => {
    jest.resetModules();
    props = {
      data: [],
      isDirect: false,
      onChangeDirect: jest.fn()
    };

    makeSubject = () => mount(<FlightsList {...props} />);
    makeShallowSubject = () => shallow(<FlightsList {...props} />)
    makeRenderSubject = () => render(<FlightsList {...props} />);
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

  it('should call props by click', () => {
    const subject = makeSubject();

    subject.find('div[data-test-id="checkbox"]').simulate('click');
    expect(props.onChangeDirect).toHaveBeenCalled();
  })
});
