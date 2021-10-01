import {
    Animated,
    Dimensions,
    Easing,
    PanResponder,
    Platform,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native'
  import React, { Component } from 'react'
  import PropTypes from 'prop-types';
  
  const { width, height } = Dimensions.get('screen');
  const DRAWER_HEIGHT = Platform.OS === 'ios' && height > 800 ? height-30 : height-20
  const BOTTOM_PADDING = Platform.OS === 'ios' && height > 800 ? 25 : 0
  
  class Drawer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        topValue: new Animated.Value(0),
        scrolling: false,
        drawerPosition: null,
        scrollable: false,
        contentHeight: 0,
      }
      this.collapsedHeight = 0
      this.expandedHeight = 0
      this.maxScroll = 0
    }
  
    componentWillMount(){
      let { drawerPosition, contentHeight, expandable, dismissFromFullHeight } = this.props
  
      //determine where the drawer should start at ( 'dismissed', 'collapsed', or 'expanded')
      this.setState({ drawerPosition: drawerPosition })
  
      //respond to gestures on the drawer and handle
      this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (event, gestureState) => true,
        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderGrant: () =>{
          this.state.topValue.setOffset(this.state.topValue.__getValue());
          this.state.topValue.setValue(0);
        },
        onPanResponderMove: (event, gestureState) => {
          if (gestureState.dy < 0 && !this.state.scrolling){
            if (this.state.drawerPosition === 'expanded' && this.state.scrollable){
              this.scrollView.scrollTo({
                x:0,
                y: Math.min(-gestureState.dy, this.maxScroll),
                animated: false
              })
            } else if (!expandable && this.state.scrollable) {
              this.scrollView.scrollTo({
                x:0,
                y: Math.min(-gestureState.dy, this.maxScroll * -1),
                animated: false
              })
            } else if (expandable) {
              this.state.topValue.setValue(gestureState.dy)
            }
          } else {
            this.state.topValue.setValue(Math.max(gestureState.dy, 0))
          }
        },
        onPanResponderRelease: (event, gestureState) => {
          if (this.state.drawerPosition === 'expanded' && gestureState.dy < 0 && !this.state.scrolling && this.state.scrollable){
            this.setState({scrolling:true})
          } else if (gestureState.dy < 0 && !this.state.scrolling && !expandable){
            this.setState({scrolling:true})
          } else {
            if (gestureState.dy > 40 && dismissFromFullHeight){
              this.dismissDrawer()
            } else if (gestureState.dy > 10 && this.state.drawerPosition === 'collapsed'){
              this.dismissDrawer()
            } else if (gestureState.dy > 40){
              this.collapseDrawer()
            } else if (gestureState.dy < -40 && expandable){
              this.expandDrawer()
            }
            if (this.state.topValue.__getValue() < 0){
              this.state.topValue.setOffset(0);
              this.state.topValue.setValue(0);
            }
          }
        }
      })
    }
  
    moveDrawer(drawerPosition){
      if (drawerPosition === 'expanded'){
        this.expandDrawer()
      } else if (drawerPosition === 'collapsed'){
        this.collapseDrawer()
      } else if (drawerPosition === 'dismissed'){
        this.dismissDrawer()
      }
    }
  
    collapseDrawer(){
      this.props.onChange('collapsed')
      this.setState({ drawerPosition: 'collapsed' });
      this.state.topValue.flattenOffset();
      Animated.spring(this.state.topValue, {
        toValue: this.collapsedHeight,
        duration:200,
      }).start();
    }
  
    expandDrawer(){
      this.props.onChange('expanded')
      this.setState({ drawerPosition: 'expanded' });
      this.state.topValue.flattenOffset();
      Animated.spring(this.state.topValue, {
        toValue: this.expandedHeight,
        duration:200,
      }).start();
    }
  
    dismissDrawer(){
      this.props.onChange('dismissed')
      this.setState({ drawerPosition: 'dismissed' });
      this.state.topValue.flattenOffset();
      Animated.timing(this.state.topValue, {
        toValue: height,
        duration:200,
      }).start();
    }
  
    componentWillReceiveProps(newProps){
      if (this.props.drawerPosition !== newProps.drawerPosition){
        this.moveDrawer(newProps.drawerPosition)
      }
    }
  
    checkScrollPosition = event =>{
      //if the user scolls up close enough to the top, snap to the top poisition and re-activate the touch responders on the drawer
      if (event.nativeEvent.contentOffset.y < 30){
        this.scrollView.scrollTo({x:0, y:0, animated:true})
        this.setState({scrolling:false})
      }
    }
  
    measureView = e =>{
      let { drawerPosition, contentHeight, expandable } = this.props
      let { layout } = e.nativeEvent
  
      //set the collapsed height to the height of the content or 250, whichever is smaller
      this.collapsedHeight = DRAWER_HEIGHT - Math.min(layout.height, 250)
  
      if (expandable && layout.height > DRAWER_HEIGHT){
        this.maxScroll = layout.height - DRAWER_HEIGHT;
        this.setState({
          scrollable:true,
          contentHeight: layout.height
        });
      } else if (!expandable && layout.height > 250){
        this.maxScroll = 250 - layout.height;
        this.setState({
          scrollable:true,
          contentHeight: layout.height
        });
      } else {
        this.setState({scrollable:false})
      }
  
      if (drawerPosition === 'expanded'){
        this.state.topValue.setValue(this.expandedHeight);
      } else if (drawerPosition === 'collapsed'){
        this.state.topValue.setValue(this.collapsedHeight);
      } else if (drawerPosition === 'dismissed'){
        this.state.topValue.setValue(height);
      }
    }
  
    render() {
      let { expandable, drawerStyle, handleBarStyle } = this.props
      let { topValue, drawerPosition, scrollable } = this.state
      let yPosition = topValue.interpolate({
        inputRange: [0, height],
        outputRange: [0, height],
        extrapolate: 'clamp'
      });
  
      return <Animated.View style={[ styles.drawerContainer, { top: yPosition, height: expandable ? DRAWER_HEIGHT : 250 }]}>
        <View style={styles.handleContainer} {...this.panResponder.panHandlers}>
          <View style={[ styles.handleBar, this.props.handleBarStyle ]}/>
        </View>
        <View style={styles.scrollContainer}>
          <View style={[ styles.clipCorners, this.props.drawerStyle ]}>
            <ScrollView
              scrollEnabled={scrollable}
              bounces={false}
              horizontal={false}
              onScrollBeginDrag={ _ => this.setState({ scrolling:true }) }
              onScrollEndDrag={ event => this.checkScrollPosition(event) }
              onMomentumScrollEnd={ event => this.checkScrollPosition(event) }
              ref={ ref => this.scrollView = ref }
              directionalLockEnabled
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={20}>
              <View onLayout={ event => this.measureView(event) }>
                {this.props.children}
              </View>
            </ScrollView>
          </View>
        </View>
        <View {...this.panResponder.panHandlers}
          pointerEvents={this.state.scrolling ? 'none' : 'auto'}
          style={[ styles.drawerContainer, { top:-30, height: expandable ? DRAWER_HEIGHT : 250 } ]}/>
      </Animated.View>
    }
  }
  
  Drawer.propTypes = {
    children: PropTypes.element,
    dimissFromFullHeight: PropTypes.bool,
    expandable: PropTypes.bool,
    drawerPosition: PropTypes.string,
    handleBarStyle: PropTypes.object,
    drawerStyle: PropTypes.object,
  
    //callbacks
    onChange: PropTypes.func,
  };
  
  Drawer.defaultProps = {
    children: <View/>,
    dismissFromFullHeight: false,
    expandable: true,
    drawerPosition: 'collapsed',
    handleBarStyle: {},
    drawerStyle: {},
  
    //callbacks
    onChange: () => {}
  };
  
  const styles = StyleSheet.create({
    drawerContainer: {
      position:'absolute',
      paddingTop:30,
      width:width,
      marginTop: Platform.OS === 'ios' && height > 800 ? 30 : 20,
    },
    scrollContainer:{
      shadowColor: "rgba(0,0,0,0.5)",
      shadowOffset: {
          width: 0,
          height: -4,
      },
      shadowOpacity: 0.10,
      shadowRadius: 4.65,
      elevation: 8,
    },
    clipCorners:{
      borderTopRightRadius:16,
      borderTopLeftRadius:16,
      overflow:'hidden',
      paddingBottom: Platform.OS === 'ios' && height > 800 ? 25 : 0,
      backgroundColor:'white'
    },
    handleContainer:{
      height:40,
      position:'absolute',
      zIndex:10,
      top: 0,
      width: width,
      paddingTop:18,
      alignItems:'center',
    },
    handleBar:{
      height:6,
      width: 55,
      borderRadius:100,
      backgroundColor:'rgba(255,255,255,0.5)'
    }
  });
  
  export default Drawer
