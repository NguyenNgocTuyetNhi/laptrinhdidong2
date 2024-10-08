import { MaterialIcons } from "@expo/vector-icons";
import Icon from "@react-native-vector-icons/fontawesome";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  // Dữ liệu cứng cho sản phẩm
  const [products, setProducts] = useState([
    {
      id: "1",
      name: " cheesecake ",
      price: "100.000 VND",
      image:
        "https://th.bing.com/th/id/OIP.Hu2PVU7AJPzs3d0gEq33fwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: "2",
      name: "Flan Gato",
      price: "200.000 VND",
      image:
        "https://banhkemcaocap.com/wp-content/uploads/2019/11/banh-kem-mau-xanh-tao-hinh-guong-mat-be-khung-long-de-thuong-768x768.jpg",
    },
    {
      id: "3",
      name: "Bánh kem Bắp ",
      price: "300.000 VND",
      image:
        "https://bobthebakerboy.com/img/cakes/2603_20230423140619-IMG_7146.jpg",
    },
    {
      id: "4",
      name: "Tiramisu",
      price: "400.000 VND",
      image:
        "https://bobthebakerboy.com/img/cakes/9386_20210821152548-IMG_9302.jpg",
    },
    {
      id: "5",
      name: "Bánh cà rốt",
      price: "500.000 VND",
      image:
        "https://th.bing.com/th/id/OIP.Gk5qshwZ5fhUokFJcSdslwHaJ4?w=800&h=1067&rs=1&pid=ImgDetMain",
    },
  ]);
  const categories = [
    { id: "1", name: "All" },
    { id: "2", name: "Size M" },
    { id: "3", name: "Size L" },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const screenWidth = Dimensions.get("window").width;
  const itemWidth = (screenWidth - 48) / 2;
  const numColumns = 2;

  return (
    <View style={styles.container}>
      {/* Logo và Ô tìm kiếm */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/logo1.jpg")}
          style={styles.logo}
        />
        <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="green" />

          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#aaa"
          />

        </View>
       
        <TouchableOpacity style={styles.categoryButton}>
          <MaterialIcons name ="message" size={24} color="green" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <MaterialIcons name="shopping-cart" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("@/assets/images/12.jpg")}
          style={styles.banner}
        />
      </View>
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category.name} </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* Danh sách sản phẩm */}
      <FlatList
        data={filteredProducts}
        key={numColumns}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={[styles.productContainer, { width: itemWidth }]}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Mua ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Không tìm thấy sản phẩm</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 10,
  },
  cartButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  categoryButton: {
    backgroundColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  bannerContainer: {
    marginBottom: 12,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  banner: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productDetails: {
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "green",
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
  },
  buyButton: {
    height: 30,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
});
