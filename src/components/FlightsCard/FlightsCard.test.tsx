import React  from 'react';
import { render, shallow, mount} from 'enzyme';
import FlightsCard from './FlightsCard'

describe('<FlightsCard />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let props: any;

  beforeEach(() => {
    jest.resetModules();
    props = {
      data: {
        deep_link: 'https://link.com/',
        price: 100,
        route: [{}],
        fly_duration: '',
        cityFrom: 'Prague',
        cityTo: 'London',
        dTimeUTC: 213123123,
        aTimeUTC: 213123123
      },
    };

    makeSubject = () => mount(<FlightsCard data={props.data} />);
    makeShallowSubject = () => shallow(<FlightsCard data={props.data} />)
    makeRenderSubject = () => render(<FlightsCard data={props.data} />);
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

  it('should be a link', () => {
    const subject = makeSubject();

    expect(subject.find('a').exists()).toBeTruthy();
  })

  it('should contain word "Direct"', () => {
    const subject = makeShallowSubject();

    const el = subject.find('[data-test-id="transfer-text"]');
    expect(el.text().includes('Direct')).toBe(true);
  })
});
