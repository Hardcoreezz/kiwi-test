import React  from 'react';
import { render, shallow, mount} from 'enzyme';
import PlaceList from './PlaceList'

describe('<PlaceList />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let props: any;

  beforeEach(() => {
    jest.resetModules();
    props = {
      places: [
        {
          name: 'Test1'
        },
        {
          name: 'Test2'
        }
      ],
      onSelect: jest.fn()
    };

    makeSubject = () => mount(<PlaceList {...props} />);
    makeShallowSubject = () => shallow(<PlaceList {...props} />)
    makeRenderSubject = () => render(<PlaceList {...props} />);
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

    subject.find('li[children="Test1"]').simulate('click');
    expect(props.onSelect).toHaveBeenCalled();
  })
});
