import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './daySelection-styles';

const DaySelection = ({ count, title, handleChange }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setShow(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.emptyView} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{date.toDateString()}</Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={() => setShow(true)}>
                <FastImage source={require('../../assets/icons/dropdown1.png')} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                onConfirm={onChange}
                onCancel={() => setShow(false)}
                value={date}
                display="calendar"
            />
        </View>
    );
};

export default DaySelection;