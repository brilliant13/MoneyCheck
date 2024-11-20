import React from 'react';
import { View, ScrollView } from 'react-native';
import { GroupTabs, TransactionSummary, GoalCard } from '../../components/GroupTab';

const GroupDetail = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <GroupTabs />
                <TransactionSummary />
                <GoalCard 
                title="호텔 뷔페"
                emoji="🍽️"
                level={1}
                progress={0.4}
                />
                <GoalCard 
                title="미국여행"
                emoji="🇺🇸"
                level={1}
                progress={0.4}
                />
            </ScrollView>
        </View>
    );
};

export default GroupDetail;
