import { inject, observer } from 'mobx-react'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SelectableButton =inject('inputsStore')(observer(({style: styles,sport: s, inputsStore}) => {
    return (
        <TouchableOpacity style={styles.sportTouchableButton} onPress={() => inputsStore.handleSelectableInput(s.id)}>
            <View style={s.selected ? styles.selectedSportBtn : styles.sportBtn}>
                <Text style={styles.btnText}>
                    {s.sport}
                </Text>
            </View>
        </TouchableOpacity>
    )
})) 

export default SelectableButton
