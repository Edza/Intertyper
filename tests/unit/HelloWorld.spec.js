import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Questions from '@/components/Questions.vue'
import Vue from 'vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Questions.vue', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Questions.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Questions.data).toBe('function')
    const defaultData = Questions.data()
    expect(defaultData.message).toBe('hello!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(Questions).$mount()
    expect(vm.message).toBe('bye!')
  })

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Constructor = Vue.extend(Questions)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})
