import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

// Styles
import {MAIN_STYLES} from '../styles/main-styles';

const SeparatorLine = _ => <View style={LOCAL_STYLES.VERTICAL_SEPARATOR} />;

const ButtonsContainer = props => (
  <View style={LOCAL_STYLES.FOOTER_CONTAINER}>
    {props.cancel.text ? (
      <>
        <Pressable
          onPress={props.cancel.onPress}
          style={LOCAL_STYLES.BUTTON_CONTAINER}>
          <Text style={LOCAL_STYLES.CANCEL_TEXT}>
            {props.cancel.text || 'Cancel'}
          </Text>
        </Pressable>
        <SeparatorLine />
      </>
    ) : (
      <></>
    )}
    <Pressable
      onPress={props.confirm.onPress}
      style={LOCAL_STYLES.BUTTON_CONTAINER}>
      <Text style={LOCAL_STYLES.CONFIRM_TEXT}>
        {props.confirm.text || 'OK'}
      </Text>
    </Pressable>
  </View>
);

export default props => {
  return (
    <Modal
      isVisible={props.visible}
      coverScreen={true}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={LOCAL_STYLES.MODAL_STYLE}
      onBackdropPress={() => {
        props.onPressCancel?.();
        props.closeModal();
      }}
      onBackButtonPress={() => {
        props.onPressCancel?.();
        props.closeModal();
      }}>
      <View
        style={[LOCAL_STYLES.COMPONENT_CONTAINER, props.outerContainerStyles]}>
        <View style={LOCAL_STYLES.CHILDREN_CONTAINER}>{props.children}</View>
        <View style={LOCAL_STYLES.HORIZONTAL_BAR} />
        <ButtonsContainer
          cancel={{
            text: props.cancelText,
            onPress: () => {
              props.onPressCancel?.();
              props.closeModal();
            },
          }}
          confirm={{
            text: props.confirmText,
            onPress: () => {
              props.onPressConfirm?.();
              props.closeModal();
            },
          }}
        />
      </View>
    </Modal>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MODAL_STYLE: {
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  COMPONENT_CONTAINER: {
    borderRadius: WP('5%'),
    overflow: 'hidden',
    width: WP('80%'),
    backgroundColor: '#fff',
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  FOOTER_CONTAINER: {
    flexDirection: 'row',
    width: '100%',
    height: WP('15%'),
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  CHILDREN_CONTAINER: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  BUTTON_CONTAINER: {
    width: '50%',
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  VERTICAL_SEPARATOR: {
    height: '100%',
    borderLeftColor: '#333',
    borderRightWidth: 1.5,
  },
  HORIZONTAL_BAR: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  CANCEL_TEXT: {
    color: '#f00',
    fontSize: 20,
    textAlign: 'center',
  },
  CONFIRM_TEXT: {
    color: '#0f0',
    fontSize: 20,
    textAlign: 'center',
  },
});