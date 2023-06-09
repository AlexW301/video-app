import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {MediaStream, RTCView} from "react-native-webrtc";
import Button from "./Button";

export type Props = {
  hangup?: () => void;
  localStream?: MediaStream | null;
  remoteStream?: MediaStream | null;
};

function ButtonContainer(props: Props) {
  return (
    <View style={styles.bContainer}>
      <Button iconName="phone" backgroundColor="red" onPress={props.hangup} />
    </View>
  );
}

export default function Video(props: Props) {
  // On call we will just display the local stream
  if (props.localStream && !props.remoteStream) {
    return (
      <View style={styles.container}>
        <RTCView streamURL={props.localStream.toURL()} objectFit={"cover"} style={styles.video} />
      </View>
    );
  }
  return <ButtonContainer hangup={props.hangup} />;
}

const styles = StyleSheet.create({
  bContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
