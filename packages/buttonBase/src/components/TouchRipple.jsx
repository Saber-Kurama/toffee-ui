import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Ripple from './Ripple';

const TouchRippleSpan = styled.span`
  display: block;
  position: absolute;
  overflow: hidden;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 0;
`;
const DELAY_RIPPLE = 80;
class TouchRipple extends React.Component {
    state = {
      nextKey: 0,
      ripples: [],
    }
    componentWillUnmount() {
      clearTimeout(this.startTimer);
    }
    // 用来在移动端过滤鼠标按下
    ignoringMouseDown = false;
    // 触摸滚动 不触发 涟漪 效果
    startTimer = null;
    startTimerCommit = null;
    start = (event = {}, options = {}, cb) => {
      const pulsate = false;
      // 如果是鼠标按下
      if (event.type === 'mousedown' && this.ignoringMouseDown) {
        this.ignoringMouseDown = false;
        return false;
      }
      // 如果是触摸事件
      if (event.type === 'touchstart') {
        this.ignoringMouseDown = true;
      }

      const element = ReactDOM.findDOMNode(this);
      // const element = this.el;
      const rect = element
        ? element.getBoundingClientRect()
        : {
          width: 0,
          height: 0,
          left: 0,
          right: 0,
        };
      let rippleX;
      let rippleY;
      let rippleSize;
      if ((event.clientX === 0 && event.clientY === 0) ||
          (event.clientX && !event.touches) // 这个是什么条件？(不支持触摸？)
      ) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      const sizeX =
      Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY =
      Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt((sizeX ** 2) + (sizeY ** 2));
      // 触摸设备
      if (event.touches) {
        this.startTimerCommit = () => {
          this.startCommit({
            rippleX, rippleY, rippleSize, cb,
          });
        };
        this.startTimer = setTimeout(() => {
          this.startTimerCommit();
          this.startTimerCommit = null;
        }, DELAY_RIPPLE);
      } else {
        this.startCommit({
          rippleX, rippleY, rippleSize, cb,
        });
      }
      return false;
    }
    startCommit = (params) => {
      const {
        rippleX, rippleY, rippleSize, cb,
      } = params;
      let ripples = this.state.ripples;
      ripples = [...this.state.ripples,
        // this.state.nextKey,
        (<Ripple
          key={this.state.nextKey}
          rippleX={rippleX}
          rippleY={rippleY}
          rippleSize={rippleSize}
        />),
      ];
      this.setState(
        {
          nextKey: this.state.nextKey + 1,
          ripples,
        },
        cb,
      );
    }
    stop = (event, cb) => {
      clearTimeout(this.startTimer);
      const { ripples } = this.state;
      if (event.type === 'touchend' && this.startTimerCommit) {
        event.persist();
        this.startTimerCommit();
        this.startTimerCommit = null;
        this.startTimer = setTimeout(() => {
          this.stop(event, cb);
        }, 0);
        return;
      }
      this.startTimerCommit = null;
      if (ripples && ripples.length) {
        this.setState({
          ripples: ripples.slice(1),
        }, cb);
      }
    }
    render() {
      return (
        <TransitionGroup
          component={TouchRippleSpan}
          enter
          exit
          {...this.props}
        >
          { this.state.ripples }
        </TransitionGroup>
      );
    }
}
export default styled(TouchRipple)``;
