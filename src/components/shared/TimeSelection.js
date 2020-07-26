import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './timeSelection-styles';

const TimeSelectionItem = ({ time, handleSelection, isDisabled, selectedTime }) => {
    const isSelected = selectedTime === time;
    return (
        <TouchableOpacity style={[styles.timeSelectionItem, isSelected && styles.selectedTimeSelectionItem]} onPress={() => handleSelection(time)} disabled={isDisabled}>
            <Text style={[styles.text, isSelected && styles.selectedText]}>{time}</Text>
        </TouchableOpacity>
    );
}

const TimeSelection = ({ data }) => {
    const [time, setTime] = useState();
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            <TimeSelectionItem time={'15:00'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'15:30'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'16:00'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'16:30'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'17:00'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'17:30'} handleSelection={setTime} selectedTime={time} />
            <TimeSelectionItem time={'18:00'} handleSelection={setTime} selectedTime={time} />
        </ScrollView>
    );
};

export default TimeSelection;