import { ScrollView } from "react-native";
import { ReactNode } from "react";

interface ScrollableHProps {
  children: ReactNode;
}

export default function ScrollableH({ children }: ScrollableHProps) {
  return (
    <ScrollView
      style={{
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
      }}
      horizontal
      keyboardShouldPersistTaps="handled"
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
