import React from 'react';
import { View, Text, FlatList } from 'react-native';
import InfoCard from './cards/InfoCard';

import styles from './infoList-styles';

const InfoList = ({ details }) => {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listContainer}
                data={details}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => <InfoCard index={index + 1} title={item} />}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    )
};

export default InfoList;