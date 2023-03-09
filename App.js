import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import DivisionLine from "./src/DivisionLine";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const onPressArrow = (first) => console.log("클릭");

  return (
    <View style={styles.container}>
      <Header />
      <Margin height={10} />
      <Profile
        name={myProfile.name}
        uri={myProfile.uri}
        introduction={myProfile.introduction}
      />
      <Margin height={15} />
      <DivisionLine />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
      />

      <FriendList data={friendProfiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
});
