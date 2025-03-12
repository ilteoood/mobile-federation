import { Pressable, StyleSheet, Text } from 'react-native';

const FederatedButton = () => {
    return <Pressable style={styles.button}>
        <Text>This is a federated button</Text>
    </Pressable>;
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
    },
});

export default FederatedButton;
