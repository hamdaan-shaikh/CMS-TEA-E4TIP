import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

// Components
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

// Styles
import {MAIN_STYLES} from '../styles/main-styles';

export const PopupModal = props => {
  return (
    <Modal
      isVisible={props.visible}
      coverScreen={props.coverScreen ?? true}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
      animationInTiming={200}
      animationOutTiming={200}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={LOCAL_STYLES.MAIN_CONTAINER}
      onBackdropPress={props.closeModal}
      onBackButtonPress={props.closeModal}>
      <View style={[LOCAL_STYLES.COMPONENT_CONTAINER, props.style]}>
        {props.children}
      </View>
    </Modal>
  );
};

const UserInfoRow = props => {
  return (
    <View style={LOCAL_STYLES.ROW_CONTAINER}>
      <Text style={LOCAL_STYLES.ROW_TITLE}>{props.title + ': '}</Text>
      <Text style={LOCAL_STYLES.ROW_SUBTITLE}>{props.subtitle}</Text>
    </View>
  );
};

export default props => {
  return (
    <PopupModal visible={props.visible} closeModal={props.closeModal}>
      <View style={LOCAL_STYLES.USER_INFO_CONTAINER}>
        <View style={LOCAL_STYLES.LEFT_CONTAINER}>
          <View
            style={{
              aspectRatio: 1,
              height: 90,
              backgroundColor: '#c0c',
              borderRadius: 4,
            }}
          />
        </View>
        <View style={LOCAL_STYLES.RIGHT_CONTAINER}>
          <UserInfoRow title="Name" subtitle="Hamdaan Shaikh" />
          <UserInfoRow title="Age" subtitle="25" />
          <UserInfoRow title="Gender" subtitle="Male" />
          <UserInfoRow title="Address" subtitle="Borsbergstr. 34" />
          <UserInfoRow title="Post Code" subtitle="01309" />
          <UserInfoRow title="City" subtitle="Dresden" />
          <UserInfoRow title="Country" subtitle="Germany" />
          <UserInfoRow title="Phone" subtitle="+49-123-456-7890" />
          <UserInfoRow title="Email" subtitle="hash843d@tud.de" />
          <UserInfoRow title="Relationship Status" subtitle="-" />
          <UserInfoRow title="Study at" subtitle="TU Dresden" />
          <UserInfoRow title="Work at" subtitle="-" />
        </View>
      </View>
    </PopupModal>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  COMPONENT_CONTAINER: {
    borderRadius: WP('3%'),
    overflow: 'hidden',
    width: WP('95%'),
    backgroundColor: '#fff',
    ...MAIN_STYLES.CENTER_CONTENT,
  },

  ROW_CONTAINER: {
    flexDirection: 'row',
  },
  ROW_TITLE: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20,
  },
  ROW_SUBTITLE: {
    color: '#333',
    fontSize: 20,
  },

  USER_INFO_CONTAINER: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  LEFT_CONTAINER: {
    flex: 1,
    ...MAIN_STYLES.CENTER_CONTENT,
  },
  RIGHT_CONTAINER: {
    flex: 2,
  },
});