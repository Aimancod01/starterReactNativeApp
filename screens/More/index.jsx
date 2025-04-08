import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import GradientButton from '../../components/Buttons/GradientButton';
import {AuthContext} from '../../context/AuthContext';
import Layout from '../../Layout/MainLayout';

function More() {
  const {logout} = useContext(AuthContext);
  return (
    <Layout>
      <View>
        <GradientButton title="Log Out" onPress={() => logout()} />
      </View>
    </Layout>
  );
}

export default More;
