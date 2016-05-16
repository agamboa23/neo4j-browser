import React from 'react'
import { shallow } from 'enzyme'
import {StreamComponent} from './Stream'
import {expect} from 'chai'

describe('Stream', () => {
  it('should render a stream of frames', () => {
    const frames = [{id: 1, cmd: ':first', type: 'x'}, {id: 2, cmd: ':second', type: 'x'}]
    const wrapper = shallow(<StreamComponent frames={frames} />)
    expect(wrapper.find('.frame')).to.have.length(frames.length)
  })
})