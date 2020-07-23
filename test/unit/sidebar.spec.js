import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Sidebar from '../../src/components/menu/Sidebar.vue';

Vue.config.ignoredElements = ['ion-icon']

describe('Sidebar.vue Test', () => {
  const listItems = [{ id: 1, text: 'Page 1', icon: 'logo-ionic'}, { id: 2, text: 'Page 2', icon: 'leaf'}];
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount (Sidebar, {
      propsData: {
          items: listItems
      }
    });
  });

  afterEach(() => {
    wrapper.destroy()
  });

  it('validate props data', () => {
    expect(wrapper.vm.items[0].id).toBe(1);
    expect(wrapper.vm.items[0].text).toMatch('Page 1');
  });

  it('renders list when component is created', () => {
    wrapper = shallowMount (Sidebar, {
      propsData: {
        items: listItems
      }
      });
    expect(wrapper.findAll('li')).toHaveLength(listItems.length);
  });

})