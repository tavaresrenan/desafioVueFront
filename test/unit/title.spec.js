import { shallowMount } from '@vue/test-utils';
import Title from '../../src/components/Title.vue';

describe('Title.vue Test', () => {
    it('renders message when component is created', () => {
      const wrapper = shallowMount (Title, {
        propsData: {
            text: 'Page 1'
        }
      });
      expect(wrapper.text()).toMatch('Page 1');
    })
  })