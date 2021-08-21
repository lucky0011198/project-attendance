
import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Div, Button, Icon, Modal, ThemeProvider } from "react-native-magnus";

const Model = () => {
  const [visible, setVisible] = useState(false);

  return (
      <Div style={{ flex: 1 ,width:"100%",height:"10"}}>

        <Modal isVisible={visible}>
          <Button
            bg="gray400"
            h={35}
            w={35}
            position="absolute"
            top={50}
            right={15}
            rounded="circle"
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon color="black900" name="close" />
          </Button>
        </Modal>
      </Div>
  );
};

export default Model;