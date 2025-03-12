/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Suspense } from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';

const StandardButton = () => (
  <Pressable>
    <Text>This is a standard button</Text>
  </Pressable>
);

const FederatedButton = React.lazy(() => import('NativeComponents/Button'));

function App(): React.JSX.Element {
  return (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <StandardButton />
        <FederatedButton />
      </Suspense>
    </View>
  );
}

export default App;
