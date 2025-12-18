import { View, Text, Button } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreen({ route, navigation }) {
  const { id, title } = route.params;
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleDelete = () => {
    removeTodo(id);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        {title}
      </Text>
      <Button title="Supprimer" color="red" onPress={handleDelete} />
    </View>
  );
}

/* ===== VERSION REDUX (COMMENTAIRE) ===== */
/*
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todosSlice";
dispatch(removeTodo(id));
*/
