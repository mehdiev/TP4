import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import AppBar from "../components/AppBar";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoListScreen({ navigation }) {
  const { todos, addTodo } = useTodoStore();

  useEffect(() => {
    addTodo({ id: 1, title: "Faire les courses" });
    addTodo({ id: 2, title: "Sortir le chien" });
    addTodo({ id: 3, title: "Coder une app RN" });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Mes tâches" />
      <FlatList
        data={todos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Détails", item)}
          >
            <Text style={{ padding: 15, fontSize: 18 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* ===== VERSION REDUX (COMMENTAIRE) ===== */
/*
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

const todos = useSelector(state => state.todos);
const dispatch = useDispatch();
*/
