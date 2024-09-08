import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('Check text (fristName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ณัฐธชนพงศ์')
  })
  it('Check text(secondName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h2')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ไชยศรี')
  })
  it('Check text (StudentId)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h3')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('6604101328')
  })
  it('Check text (NickName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h4')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('เกรซ')
  })
})
