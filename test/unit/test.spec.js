import { createLocalVue, mount } from '@vue/test-utils'
import inputCheckData from '@/pages/index/index'
import MintUI from 'mint-ui';

const localVue = createLocalVue()
localVue.use(MintUI)
describe('index/index.vue', () => {
    it('check query', () => {
        const wrapper = mount(inputCheckData, {
            localVue
        })
    })
})