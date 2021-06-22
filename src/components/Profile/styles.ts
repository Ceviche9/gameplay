import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container:{

        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20

        
    },

    greeting:{

        fontFamily: theme.fonts.title500,
        fontSize: 20,
        color: theme.colors.heading,
        marginRight: 6

    },

    user:{

        flexDirection: 'row',

    },

    userName:{

        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,

    },

    message:{

        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 12


    },

});