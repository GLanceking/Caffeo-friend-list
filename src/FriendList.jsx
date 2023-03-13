import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

export default (props) => {
  if (!props.isOpened) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => {
        return (
          <View key={index}>
            <Profile
              name={item.name}
              uri={item.uri}
              introduction={item.introduction}
            />
            <Margin height={13} />
          </View>
        );
      })}
    </ScrollView>
  );
};
