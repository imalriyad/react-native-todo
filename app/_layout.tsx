//app/_layout

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Dashboard",
        statusBarBackgroundColor: "orange",
      }}
    />
  );
}
