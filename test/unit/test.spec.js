import { createLocalVue, mount } from '@vue/test-utils'
import inputCheckData from '@/pages/index/index'

const localVue = createLocalVue()
// localVue.use(MintUI)
describe('index/index.vue', () => {
    it('check query', () => {
        const wrapper = mount(inputCheckData, {
            localVue
        })
    })
})