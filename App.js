import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
import { useState } from "react";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  // 친구 목록 최소화 상태
  const [isOpened, setIsOpened] = useState(true);

  // 탭바 아이콘 on/off 상태
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  // 친구 목록 최소화
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  //Flatlist의 props값 분리해서 정의. Flatlist에 헤더와 풋터를 넣는 속성이 이미 있다
  //isMe 속성: 젤 위 MyProfile인 경우 true, 나머지 밑에 친구 리스트 Profile이면 false로 구분되도록 추가
  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        name={item.name}
        uri={item.uri}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        name={myProfile.name}
        uri={myProfile.uri}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <DivisionLine />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : null}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsVerticalScrollIndicator={false}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
