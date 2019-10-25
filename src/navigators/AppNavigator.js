import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import MainNavigator from './mainNavigators'

const AppNavigator=createAppContainer(
    createSwitchNavigator({
        MainNav:MainNavigator
    })
)

export default AppNavigator