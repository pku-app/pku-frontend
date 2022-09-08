import React from "react";
import { Text, TextInput, View } from "react-native";

export default function SignUp(formData, setFormData) {
  return <View>
   <TextInput
      type="text"
      placeholder="Name..."
      value={formData.name}
      onChangeText={(Text)=>setFormData(Text)}
    />
   <TextInput
      type="text"
      placeholder="Email..."
      value={formData.email}
      onChange={(event) =>
        setFormData({ ...formData, email: event.target.value })
      }
    />
    <TextInput
      type="text"
      placeholder="Password..."
      value={formData.password}
      onChange={(event) =>
        setFormData({ ...formData, password: event.target.value })
      }
    />
    <TextInput
      type="text"
      placeholder="Confirm Password..."
      value={formData.confirmPassword}
      onChange={(event) =>
        setFormData({ ...formData, confirmPassword: event.target.value })
      }
    />
    <TextInput
      type="text"
      placeholder="Type..."
      value={formData.type}
      onChange={(event) =>
        setFormData({ ...formData, type: event.target.value })
      }
    />
  </View>;
}