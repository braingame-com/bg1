export function Header() {
  return (
    <Animated.View
      style={{
        ...s.row,
        height: isMobile ? 49 : 64,
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "space-between",
        paddingHorizontal: isMobile ? 20 : 30,
        borderBottomColor: isMobile ? borderOpacity : colors.border,
        borderBottomWidth: 1,
        paddingBottom: isMobile ? 10 : 0,
      }}
    >
      {userIsLoggedIn && (
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
            opacity: 0,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772",
            }}
            style={{
              width: isMobile ? 28 : 38,
              height: isMobile ? 28 : 38,
              borderColor: colors.border,
              borderWidth: 1,
              borderRadius: 999,
            }}
          />
        </TouchableOpacity>
      )}
      <Animated.Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: colors.text,
          opacity: headerOpacity,
        }}
      >
        Home
      </Animated.Text>
      {userIsLoggedIn && (
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772",
            }}
            style={{
              width: isMobile ? 28 : 38,
              height: isMobile ? 28 : 38,
              borderColor: colors.border,
              borderWidth: 1,
              borderRadius: 999,
            }}
          />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}
