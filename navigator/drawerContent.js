import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'; 

export function DrawerContent(props){
    return(
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                        icon={() => (<AntDesign name="home" style={styles.icon} size={18} />)}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                        icon={() => (<AntDesign name="hearto" style={styles.icon} size={18} />)}
                        label="Favorites"
                        onPress={() => {props.navigation.navigate('Favorites')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={() => (<AntDesign name="user" style={styles.icon} size={18} />)}
                label="About"
                onPress={() => {props.navigation.navigate('About')}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    drawerSection:{
        marginTop: 15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    icon:{
        color: '#f1356d',
    },
})