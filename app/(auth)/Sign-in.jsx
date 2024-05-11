import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import React from 'react'
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../contants/images';
import CustomButton from "../../components/CustomButton";
import FormField from '../../components/FormField';
import { Link } from "expo-router";

const SignIn = () => {
 
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home"); 
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
       <View className='w-full justify-end min-h-[75vh] px-4 my-6'>
       <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className='text-white text-2xl font-psemibold mt-5'> Log In To Aora

          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

<FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

<CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'> Don't have an account </Text>
          <Link href='sign-up' className='text-lg font-psemibold text-secondary-100'>Sign Up</Link>

        </View>

       </View> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
