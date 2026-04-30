import { Image, Text, View } from 'react-native';


export default function Header(){
    return (
        <View className='flex-row px-4 justify-between bg-green-500'>
            <View>
                Menu
            </View>
            <View>
                <Image source={require("../assets/rubonito.png")}
                className='w-20 h-20'
                />
            </View>
            <View></View>
        </View>
    );
}